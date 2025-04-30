
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-wood-medium text-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Готовы обсудить ваш проект?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Свяжитесь с нами для консультации или оставьте заявку, 
          и мы поможем воплотить вашу мечту в реальность.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-wood-dark hover:bg-gray-100">
            <Icon name="ClipboardEdit" size={18} />
            Оформить заказ
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
            <Icon name="Phone" size={18} />
            Заказать звонок
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
