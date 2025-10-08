import { Rocket, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="w-6 h-6 text-primary" />
              <span className="text-xl font-orbitron font-bold text-gradient">
                Cosmic Frontiers
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Exploring the wonders of space, one orbit at a time. 
              Journey with us through the cosmos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron font-semibold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </a>
              <a href="#stations" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Space Stations
              </a>
              <a href="#spacewalk" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Spacewalks
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-orbitron font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cosmic Frontiers. Reaching for the stars.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
