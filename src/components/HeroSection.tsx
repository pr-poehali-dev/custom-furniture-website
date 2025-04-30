
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brown-50 to-brown-100 py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container relative px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-wood-dark sm:text-4xl md:text-5xl">
                Эксклюзивная мебель на заказ <br />
                от идеи до воплощения
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Создаем неповторимую мебель из натуральных материалов 
                для вашего комфорта и эстетического удовольствия.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-wood-medium hover:bg-wood-dark" size="lg">
                <Icon name="ClipboardEdit" size={18} />
                Оформить заказ
              </Button>
              <Button variant="outline" size="lg" className="border-wood-medium text-wood-dark">
                <Icon name="Album" size={18} />
                Смотреть портфолио
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span>Бесплатный замер</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span>Гарантия качества</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span>Индивидуальный подход</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Эксклюзивная мебель на заказ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
