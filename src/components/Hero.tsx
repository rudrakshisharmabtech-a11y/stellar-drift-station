import heroImage from "@/assets/space-station-hero.jpg";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Sparkles className="w-4 h-4 text-primary animate-pulseGlow" />
            <span className="text-sm text-primary font-medium">Explore the Final Frontier</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-bold mb-6 glow-text">
            Journey to the
            <span className="block text-gradient mt-2">Cosmic Frontiers</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the marvels of space stations orbiting Earth, witness breathtaking spacewalks, 
            and explore humanity's incredible journey beyond our planet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#stations"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold 
                       hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 
                       transform hover:scale-105"
            >
              Explore Stations
            </a>
            <a 
              href="#spacewalk"
              className="px-8 py-4 bg-card border border-primary/30 text-foreground rounded-lg 
                       font-semibold hover:bg-primary/10 transition-all duration-300 
                       transform hover:scale-105"
            >
              View Spacewalks
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
