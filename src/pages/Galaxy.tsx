import { Telescope, Rocket, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import galaxyImage from "@/assets/milky-way.jpg";
import solarSystemImage from "@/assets/solar-system.jpg";
import neilImage from "@/assets/astronaut-neil.jpg";
import yuriImage from "@/assets/astronaut-yuri.jpg";
import sallyImage from "@/assets/astronaut-sally.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Galaxy = () => {
  const astronauts = [
    {
      name: "Neil Armstrong",
      image: neilImage,
      achievement: "First human to walk on the Moon",
      mission: "Apollo 11 (1969)",
      description: "Commander of Apollo 11, made history with the famous words 'That's one small step for man, one giant leap for mankind.'"
    },
    {
      name: "Yuri Gagarin",
      image: yuriImage,
      achievement: "First human in space",
      mission: "Vostok 1 (1961)",
      description: "Soviet cosmonaut who completed the first crewed orbital spaceflight, orbiting Earth once in 108 minutes."
    },
    {
      name: "Sally Ride",
      image: sallyImage,
      achievement: "First American woman in space",
      mission: "STS-7 (1983)",
      description: "Physicist and astronaut who broke barriers as the first American woman to travel to space aboard Challenger."
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
                Our Cosmic Home
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the magnificent galaxy we call home, our solar system, and the brave pioneers who ventured beyond Earth
              </p>
            </div>
          </div>
        </section>

        {/* Galaxy Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Telescope className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-gradient">
                    The Milky Way Galaxy
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our galaxy, the Milky Way, is a barred spiral galaxy containing 100-400 billion stars. It spans approximately 100,000 light-years in diameter and is part of the Local Group of galaxies.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="bg-card/50 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-lg">Age</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">13.6 Billion Years</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-lg">Stars</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">200+ Billion</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={galaxyImage} 
                  alt="Milky Way Galaxy" 
                  className="rounded-lg shadow-2xl pulse-glow w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solar System Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img 
                  src={solarSystemImage} 
                  alt="Solar System" 
                  className="rounded-lg shadow-2xl pulse-glow w-full h-auto"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-8 h-8 text-accent" />
                  <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-gradient">
                    Our Solar System
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our solar system consists of the Sun and everything bound to it by gravity: eight planets, dozens of moons, millions of asteroids, comets, and meteoroids.
                </p>
                <div className="space-y-4">
                  <Card className="bg-card/50 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-lg">Inner Planets</CardTitle>
                      <CardDescription>Mercury, Venus, Earth, Mars</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-card/50 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-lg">Outer Planets</CardTitle>
                      <CardDescription>Jupiter, Saturn, Uranus, Neptune</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Astronauts Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Users className="w-8 h-8 text-secondary" />
                <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-gradient">
                  Legendary Astronauts
                </h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Meet the pioneers who dared to venture beyond our planet and inspire generations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {astronauts.map((astronaut, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={astronaut.image} 
                      alt={astronaut.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{astronaut.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {astronaut.achievement}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      <span className="font-semibold text-accent">Mission:</span> {astronaut.mission}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {astronaut.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Galaxy;
