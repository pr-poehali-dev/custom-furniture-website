
import React from "react";
import AdvantageItem from "./AdvantageItem";
import { advantages } from "@/data/advantages";

const AdvantageSection: React.FC = () => {
  return (
    <section className="py-16 bg-brown-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-wood-dark mb-12">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageItem 
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
