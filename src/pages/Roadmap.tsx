import { GraduationCap, Target, BookOpen, Trophy, Rocket, Star, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Roadmap = () => {
  const educationPath = [
    {
      phase: "High School (Ages 14-18)",
      icon: <BookOpen className="w-6 h-6" />,
      requirements: [
        "Excel in STEM subjects (Math, Physics, Chemistry, Biology)",
        "Maintain high GPA (3.5+)",
        "Participate in science clubs and competitions",
        "Learn coding and computer skills",
        "Stay physically fit and healthy"
      ]
    },
    {
      phase: "Undergraduate (Ages 18-22)",
      icon: <GraduationCap className="w-6 h-6" />,
      requirements: [
        "Bachelor's degree in STEM field (Engineering, Physics, Biology, Mathematics)",
        "Join aerospace clubs and organizations",
        "Pursue internships at NASA, SpaceX, or aerospace companies",
        "Maintain excellent academic record",
        "Continue physical fitness training"
      ]
    },
    {
      phase: "Graduate Studies (Ages 22-26)",
      icon: <Target className="w-6 h-6" />,
      requirements: [
        "Master's or Doctoral degree (PhD preferred)",
        "Conduct research in space-related fields",
        "Publish papers in scientific journals",
        "Build professional network in aerospace industry",
        "Gain flight experience (pilot training beneficial)"
      ]
    },
    {
      phase: "Professional Experience (Ages 26-30+)",
      icon: <Trophy className="w-6 h-6" />,
      requirements: [
        "3+ years of relevant professional experience",
        "Work in engineering, science, or medicine",
        "Develop specialized expertise",
        "Meet NASA's physical requirements",
        "Obtain jet pilot certification (advantageous)"
      ]
    },
    {
      phase: "Astronaut Selection",
      icon: <Star className="w-6 h-6" />,
      requirements: [
        "Apply to astronaut program (highly competitive)",
        "Pass medical examinations",
        "Complete psychological evaluation",
        "Demonstrate leadership and teamwork skills",
        "Show adaptability and problem-solving abilities"
      ]
    },
    {
      phase: "Astronaut Training (2+ years)",
      icon: <Rocket className="w-6 h-6" />,
      requirements: [
        "Complete basic astronaut training",
        "Learn spacecraft systems",
        "Underwater EVA training",
        "Survival training",
        "Russian language proficiency",
        "Mission-specific training"
      ]
    }
  ];

  const researchAreas = [
    {
      title: "Astrobiology",
      description: "Study of life in the universe",
      opportunities: "Search for extraterrestrial life, habitability studies, extremophiles research"
    },
    {
      title: "Planetary Science",
      description: "Study of planets, moons, and planetary systems",
      opportunities: "Mars exploration, exoplanet discovery, planetary geology"
    },
    {
      title: "Astrophysics",
      description: "Physical properties of celestial objects",
      opportunities: "Black holes, neutron stars, cosmic phenomena, dark matter research"
    },
    {
      title: "Space Engineering",
      description: "Design and development of spacecraft",
      opportunities: "Rocket propulsion, satellite technology, life support systems"
    },
    {
      title: "Cosmology",
      description: "Study of the universe's origin and evolution",
      opportunities: "Big Bang research, cosmic inflation, universe expansion studies"
    },
    {
      title: "Space Medicine",
      description: "Health effects of space environment",
      opportunities: "Microgravity research, radiation protection, long-duration missions"
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
                Astronaut Roadmap
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Your comprehensive guide to becoming an astronaut and pursuing space research careers
              </p>
            </div>
          </div>
        </section>

        {/* Education Path */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-orbitron font-bold mb-12 text-center text-gradient">
              Educational Journey
            </h2>
            <div className="space-y-6">
              {educationPath.map((step, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {step.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.phase}</CardTitle>
                        <CardDescription>Step {index + 1} of {educationPath.length}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {step.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-orbitron font-bold mb-12 text-center text-gradient">
              Space Research Fields
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-accent">Research Focus:</span> {area.opportunities}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Requirements */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-orbitron font-bold mb-12 text-center text-gradient">
              Essential Requirements
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Bachelor's degree minimum (Master's or PhD preferred)</p>
                  <p>• STEM field required</p>
                  <p>• Strong academic record</p>
                  <p>• Continuous learning mindset</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Physical Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Excellent physical condition</p>
                  <p>• Vision: 20/20 (correctable)</p>
                  <p>• Blood pressure: 140/90 or below</p>
                  <p>• Height: 62-75 inches</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Problem-solving abilities</p>
                  <p>• Teamwork and leadership</p>
                  <p>• Adaptability under pressure</p>
                  <p>• Technical proficiency</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• 3+ years professional work</p>
                  <p>• Relevant field experience</p>
                  <p>• Pilot experience (advantageous)</p>
                  <p>• Research contributions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Inspiration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-3xl text-center">
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-8 space-y-4">
                <Rocket className="w-16 h-16 mx-auto text-primary" />
                <h3 className="text-2xl font-orbitron font-bold text-gradient">
                  Ready to Reach for the Stars?
                </h3>
                <p className="text-muted-foreground text-lg">
                  Becoming an astronaut is one of the most challenging and rewarding careers. With dedication, perseverance, and the right preparation, you can turn your space dreams into reality.
                </p>
                <p className="text-primary font-semibold italic">
                  "The important thing is not to stop questioning. Curiosity has its own reason for existing." - Albert Einstein
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

export default Roadmap;
