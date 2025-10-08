import { Brain, Atom, Zap, Sparkles, Circle, Infinity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Theories = () => {
  const theories = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Big Bang Theory",
      description: "The universe began as an infinitely hot and dense point approximately 13.8 billion years ago, then rapidly expanded in an event called the Big Bang.",
      details: [
        "Supported by cosmic microwave background radiation",
        "Explains the expansion of the universe",
        "Predicts the abundance of light elements",
        "Confirmed by redshift observations"
      ]
    },
    {
      icon: <Infinity className="w-8 h-8" />,
      title: "Inflation Theory",
      description: "In the first fraction of a second after the Big Bang, the universe underwent exponential expansion, growing faster than the speed of light.",
      details: [
        "Explains the uniformity of the universe",
        "Solves the horizon problem",
        "Predicts quantum fluctuations as seeds for structure",
        "Consistent with cosmic observations"
      ]
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "String Theory",
      description: "Proposes that the fundamental constituents of reality are one-dimensional strings rather than point-like particles, vibrating at different frequencies.",
      details: [
        "Attempts to unify quantum mechanics and general relativity",
        "Requires extra dimensions beyond our observable four",
        "Multiple versions including M-theory",
        "Predicts existence of gravitons"
      ]
    },
    {
      icon: <Circle className="w-8 h-8" />,
      title: "Multiverse Theory",
      description: "Suggests that our universe is just one of many universes that exist simultaneously, each with potentially different physical laws.",
      details: [
        "Arises from quantum mechanics interpretations",
        "Explains fine-tuning of physical constants",
        "Supported by inflation theory predictions",
        "Currently untestable but mathematically consistent"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Dark Matter & Dark Energy",
      description: "Mysterious substances that make up 95% of the universe. Dark matter provides gravitational effects we observe, while dark energy drives cosmic acceleration.",
      details: [
        "Dark matter: ~27% of universe composition",
        "Dark energy: ~68% of universe composition",
        "Explains galaxy rotation curves",
        "Drives accelerating expansion of universe"
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Quantum Gravity",
      description: "Attempts to describe gravity according to quantum mechanics principles, reconciling Einstein's general relativity with quantum field theory.",
      details: [
        "Essential for understanding black holes",
        "Explains behavior at Planck scale",
        "Loop quantum gravity is one approach",
        "Critical for understanding universe's beginning"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6 text-gradient">
                Universe Theories
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Exploring the fundamental theories that explain the origin, structure, and nature of our universe
              </p>
            </div>
          </div>
        </section>

        {/* Theories Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {theories.map((theory, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        {theory.icon}
                      </div>
                      <CardTitle className="text-2xl">{theory.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {theory.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-accent mb-3">Key Points:</h4>
                    <ul className="space-y-2">
                      {theory.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-center">The Quest for Understanding</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  These theories represent humanity's best attempts to understand the fundamental nature of reality. While some are well-established with substantial evidence, others remain speculative, pushing the boundaries of our knowledge.
                </p>
                <p>
                  Scientists continue to test these theories through observations, experiments, and mathematical analysis. Each discovery brings us closer to answering the deepest questions about existence: How did the universe begin? What is it made of? What is its ultimate fate?
                </p>
                <p className="text-center font-semibold text-primary pt-4">
                  "The universe is not only stranger than we imagine, it is stranger than we can imagine." - J.B.S. Haldane
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Theories;
