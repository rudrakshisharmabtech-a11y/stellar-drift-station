import { Card } from "@/components/ui/card";
import { Satellite, Users, Calendar, Zap } from "lucide-react";

const stations = [
  {
    name: "International Space Station",
    icon: Satellite,
    description: "The ISS serves as a microgravity and space environment research laboratory where scientific experiments are conducted in astrobiology, astronomy, meteorology, and physics.",
    facts: [
      { label: "Orbit Altitude", value: "408 km" },
      { label: "Speed", value: "28,000 km/h" },
      { label: "Crew Size", value: "6-7 people" },
      { label: "Launch Date", value: "November 1998" },
    ],
    color: "primary",
  },
  {
    name: "Tiangong Space Station",
    icon: Users,
    description: "China's modular space station represents the nation's permanent presence in low Earth orbit, designed to conduct scientific experiments and technological demonstrations.",
    facts: [
      { label: "Orbit Altitude", value: "340-450 km" },
      { label: "Crew Size", value: "3 people" },
      { label: "Modules", value: "3 main modules" },
      { label: "Completed", value: "2022" },
    ],
    color: "secondary",
  },
  {
    name: "Future Lunar Gateway",
    icon: Calendar,
    description: "A planned space station in lunar orbit that will serve as a staging point for missions to the Moon and beyond, playing a crucial role in sustainable lunar exploration.",
    facts: [
      { label: "Location", value: "Lunar Orbit" },
      { label: "Purpose", value: "Moon & Deep Space" },
      { label: "Expected", value: "Late 2020s" },
      { label: "Partners", value: "Multi-national" },
    ],
    color: "accent",
  },
];

const SpaceStationInfo = () => {
  return (
    <section id="stations" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Orbital Habitats</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 glow-text">
            Space <span className="text-gradient">Stations</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Humanity's outposts in the cosmos, where science and exploration converge beyond Earth's atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stations.map((station, index) => {
            const Icon = station.icon;
            return (
              <Card
                key={station.name}
                className={`p-6 bg-card border-border hover:border-${station.color} 
                           transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]
                           hover:scale-105 cursor-pointer group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 bg-${station.color}/10 rounded-lg group-hover:bg-${station.color}/20 transition-colors`}>
                    <Icon className={`w-6 h-6 text-${station.color}`} />
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold">{station.name}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {station.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {station.facts.map((fact) => (
                    <div key={fact.label} className="text-sm">
                      <p className="text-muted-foreground mb-1">{fact.label}</p>
                      <p className="font-semibold text-foreground">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpaceStationInfo;
