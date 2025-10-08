import spacewalk1 from "@/assets/spacewalk-1.jpg";
import spacewalk2 from "@/assets/spacewalk-2.jpg";
import { User } from "lucide-react";

const SpacewalkSection = () => {
  return (
    <section id="spacewalk" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-nebula pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <User className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Extravehicular Activity</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 glow-text">
            Epic <span className="text-gradient">Spacewalks</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the awe-inspiring moments when astronauts venture outside their spacecraft, 
            floating in the void with only Earth and stars as their backdrop
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Image Card */}
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={spacewalk1}
                alt="Astronaut performing spacewalk with Earth in background"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent 
                            opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-4 
                          group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-orbitron font-bold mb-2 text-foreground glow-text">
                Working Above the World
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Astronauts conduct critical maintenance and scientific experiments while orbiting 
                Earth at speeds of 28,000 km/h
              </p>
            </div>
          </div>

          {/* Second Image Card */}
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={spacewalk2}
                alt="Close-up of astronaut during EVA with gold visor reflection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent 
                            opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-4 
                          group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-orbitron font-bold mb-2 text-foreground glow-text">
                The Ultimate Frontier
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Each spacewalk requires meticulous preparation and represents humanity's 
                ability to thrive in the most hostile environment
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
            <p className="text-3xl sm:text-4xl font-orbitron font-bold text-gradient mb-2">574</p>
            <p className="text-sm text-muted-foreground">Total Spacewalks</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
            <p className="text-3xl sm:text-4xl font-orbitron font-bold text-gradient mb-2">8hrs</p>
            <p className="text-sm text-muted-foreground">Average Duration</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
            <p className="text-3xl sm:text-4xl font-orbitron font-bold text-gradient mb-2">245</p>
            <p className="text-sm text-muted-foreground">Different Astronauts</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
            <p className="text-3xl sm:text-4xl font-orbitron font-bold text-gradient mb-2">3,652</p>
            <p className="text-sm text-muted-foreground">Total Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacewalkSection;
