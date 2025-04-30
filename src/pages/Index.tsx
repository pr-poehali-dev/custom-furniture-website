
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AdvantageSection from "@/components/home/AdvantageSection";
import RoomCategorySection from "@/components/home/RoomCategorySection";
import WorkProcessSection from "@/components/home/WorkProcessSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="home" />
      
      <main className="flex-1">
        <HeroSection />
        <AdvantageSection />
        <RoomCategorySection />
        <WorkProcessSection />
        <PortfolioSection />
        <CallToAction />
      </main>
      
      <Footer />
      
      <ContactBar 
        telegramLink="https://t.me/yourusername"
        whatsappNumber="79991234567"
        telegramGroupLink="https://t.me/yourgroup"
      />
    </div>
  );
};

export default Index;
