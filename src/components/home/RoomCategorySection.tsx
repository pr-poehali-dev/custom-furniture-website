
import React from "react";
import RoomCategory from "@/components/RoomCategory";
import { roomCategories } from "@/data/roomCategories";

const RoomCategorySection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-wood-dark mb-12">Наши решения для разных помещений</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomCategories.map((category, index) => (
            <RoomCategory 
              key={index}
              title={category.title}
              description={category.description}
              image={category.image}
              icon={category.icon}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCategorySection;
