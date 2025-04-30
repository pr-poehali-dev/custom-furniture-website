
import React from "react";
import Icon from "@/components/ui/Icon";

export interface AdvantageItemProps {
  icon: string;
  title: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mb-4">
        <Icon name={icon} className="text-brown-700" />
      </div>
      <h3 className="text-xl font-bold text-wood-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AdvantageItem;
