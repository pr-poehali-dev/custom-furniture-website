
import React from "react";

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, image }) => {
  return (
    <div className="portfolio-card group relative rounded-lg overflow-hidden bg-white shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <p className="text-xs text-white/80 font-medium">{category}</p>
            <h3 className="text-lg font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
