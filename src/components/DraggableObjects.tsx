import { useState, useRef, useEffect } from "react";
import { Satellite, Globe, Rocket } from "lucide-react";

interface DraggableObject {
  id: number;
  x: number;
  y: number;
  icon: typeof Satellite;
  color: string;
}

const DraggableObjects = () => {
  const [objects, setObjects] = useState<DraggableObject[]>([
    { id: 1, x: 100, y: 100, icon: Satellite, color: "text-primary" },
    { id: 2, x: 300, y: 200, icon: Globe, color: "text-secondary" },
    { id: 3, x: 500, y: 150, icon: Rocket, color: "text-accent" },
  ]);

  const [draggedId, setDraggedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (id: number) => {
    setDraggedId(id);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (draggedId === null || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 30;
    const y = e.clientY - rect.top - 30;

    setObjects(prev =>
      prev.map(obj =>
        obj.id === draggedId
          ? { ...obj, x: Math.max(0, Math.min(x, rect.width - 60)), y: Math.max(0, Math.min(y, rect.height - 60)) }
          : obj
      )
    );
  };

  const handleMouseUp = () => {
    setDraggedId(null);
  };

  useEffect(() => {
    if (draggedId !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [draggedId]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
    >
      {objects.map((obj) => {
        const Icon = obj.icon;
        return (
          <div
            key={obj.id}
            className={`absolute pointer-events-auto cursor-move transition-transform ${
              draggedId === obj.id ? "scale-110" : "scale-100"
            } ${draggedId !== obj.id ? "floating" : ""}`}
            style={{
              left: `${obj.x}px`,
              top: `${obj.y}px`,
            }}
            onMouseDown={() => handleMouseDown(obj.id)}
          >
            <div className={`${obj.color} opacity-70 hover:opacity-100 transition-opacity pulse-glow`}>
              <Icon className="w-12 h-12 sm:w-16 sm:h-16" strokeWidth={1.5} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DraggableObjects;
