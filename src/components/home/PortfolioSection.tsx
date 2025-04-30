
import React from "react";
import PortfolioItem from "@/components/PortfolioItem";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { featuredWorks } from "@/data/featuredWorks";

const PortfolioSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-wood-dark">Наши работы</h2>
          <Button variant="outline" className="mt-4 md:mt-0 border-brown-300 text-brown-700">
            Смотреть все работы
            <Icon name="ArrowRight" size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredWorks.map((work, index) => (
            <PortfolioItem 
              key={index}
              title={work.title}
              category={work.category}
              image={work.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
