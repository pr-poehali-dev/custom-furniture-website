
import React from "react";

export interface WorkStepProps {
  number: number;
  title: string;
  description: string;
  showConnector: boolean;
}

const WorkStep: React.FC<WorkStepProps> = ({ number, title, description, showConnector }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mx-auto mb-4 relative">
        <span className="text-white font-bold text-xl">{number}</span>
        {showConnector && (
          <div className="absolute -right-8 top-1/2 h-0.5 w-8 bg-brown-200 hidden md:block"></div>
        )}
      </div>
      <h3 className="text-xl font-bold text-wood-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WorkStep;
