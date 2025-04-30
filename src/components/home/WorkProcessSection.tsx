
import React from "react";
import WorkStep from "./WorkStep";
import { workSteps } from "@/data/workProcess";

const WorkProcessSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brown-100 to-brown-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-wood-dark mb-12">Как мы работаем</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {workSteps.map((step, index) => (
            <WorkStep 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              showConnector={step.showConnector}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
