import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="bg-background overflow-hidden w-full min-w-[1440px] min-h-screen">
      <Header />
      <Hero />
      <Services />
    </div>
  );
};

export default Index;
