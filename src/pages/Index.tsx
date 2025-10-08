import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DraggableObjects from "@/components/DraggableObjects";
import SpaceStationInfo from "@/components/SpaceStationInfo";
import SpacewalkSection from "@/components/SpacewalkSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <DraggableObjects />
      
      <main>
        <Hero />
        <SpaceStationInfo />
        <SpacewalkSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
