import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Agency from "@/components/portfolio/Agency";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main>
        <About />
        <Services />
        <Agency />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
