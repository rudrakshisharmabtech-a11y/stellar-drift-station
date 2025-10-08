import { Rocket } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <span className="text-xl sm:text-2xl font-orbitron font-bold text-gradient">
              Cosmic Frontiers
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a 
              href="#stations" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Stations
            </a>
            <a 
              href="#spacewalk" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Spacewalk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
