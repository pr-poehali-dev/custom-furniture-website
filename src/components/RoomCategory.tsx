
import React from "react";
import Icon from "@/components/ui/Icon";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

interface RoomCategoryProps {
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
}

const RoomCategory: React.FC<RoomCategoryProps> = ({ 
  title, 
  description, 
  image, 
  icon, 
  link 
}) => {
  return (
    <div className="portfolio-card rounded-lg overflow-hidden bg-white shadow-md">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300"></div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Icon name={icon} className="text-brown-500" />
          <h3 className="text-xl font-bold text-wood-dark">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={link}>
          <Button variant="outline" className="w-full border-brown-300 text-brown-700 hover:bg-brown-50">
            Подробнее
            <Icon name="ArrowRight" size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RoomCategory;
