
import NavBar from "@/components/NavBar";
import Hero from "@/components/hero/Hero";
import Introduction from "@/components/home/Introduction";
import Technology from "@/components/home/Technology";
import Impact from "@/components/home/Impact";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Introduction />
        <Technology />
        <Impact />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
