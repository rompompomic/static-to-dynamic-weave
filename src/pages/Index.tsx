import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const Index = () => {
  return (
    <div className="bg-background overflow-x-hidden w-full min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Index;
