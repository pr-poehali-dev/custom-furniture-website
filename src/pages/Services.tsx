
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  imageSrc: string;
  popular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  price, 
  features, 
  imageSrc, 
  popular 
}) => {
  return (
    <Card className={`relative overflow-hidden ${popular ? 'border-wood-medium border-2' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-wood-medium text-white px-3 py-1 text-sm font-medium">
          Популярное
        </div>
      )}
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
        />
      </div>
      <CardHeader>
        <CardTitle className="text-wood-dark">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-wood-dark mb-4">от {price}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Icon name="Check" className="mr-2 text-wood-medium shrink-0 mt-1" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-wood-medium hover:bg-wood-dark">
          Заказать услугу
        </Button>
      </CardFooter>
    </Card>
  );
};

const Services: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Кухни на заказ",
      description: "Функциональные и стильные решения для кухни",
      price: "80 000 ₽",
      features: [
        "Индивидуальный проект",
        "Качественная фурнитура",
        "Срок изготовления от 2 недель",
        "Установка и монтаж"
      ],
      imageSrc: "https://images.unsplash.com/photo-1556912173-3bb406ef7e97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      popular: true
    },
    {
      title: "Шкафы и гардеробные",
      description: "Практичные решения для хранения вещей",
      price: "60 000 ₽",
      features: [
        "Максимальное использование пространства",
        "Удобные системы хранения",
        "Различные варианты фасадов",
        "Бесплатная доставка"
      ],
      imageSrc: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Мебель для гостиной",
      description: "Стильные решения для комфортного отдыха",
      price: "70 000 ₽",
      features: [
        "Современный дизайн",
        "Эргономичные решения",
        "Долговечные материалы",
        "Гарантия 24 месяца"
      ],
      imageSrc: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Мебель для ванной",
      description: "Влагостойкие решения для ванных комнат",
      price: "45 000 ₽",
      features: [
        "Специальные влагостойкие материалы",
        "Компактные решения",
        "Различные варианты раковин",
        "Быстрая установка"
      ],
      imageSrc: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const additionalServices = [
    {
      icon: "Ruler",
      title: "Замер помещения",
      description: "Бесплатный выезд специалиста для точного замера"
    },
    {
      icon: "Pencil",
      title: "Дизайн-проект",
      description: "Профессиональная разработка дизайна с 3D-визуализацией"
    },
    {
      icon: "Truck",
      title: "Доставка и сборка",
      description: "Быстрая доставка и профессиональная сборка на месте"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="services" />
      
      <main className="flex-1">
        <section className="py-10 bg-brown-50">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold text-wood-dark mb-2">Наши услуги</h1>
            <p className="text-lg text-gray-600 mb-8">
              Изготавливаем мебель любой сложности по индивидуальным заказам с учетом ваших пожеланий
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            
            <h2 className="text-3xl font-bold text-wood-dark mb-8">Дополнительные услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-wood-medium" />
                  </div>
                  <h3 className="text-xl font-bold text-wood-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-br from-wood-light to-brown-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-wood-dark mb-4">Индивидуальный подход к каждому заказу</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Мы предлагаем полный цикл услуг: от замера помещения и разработки дизайн-проекта 
                  до доставки и монтажа готовой мебели. Наши специалисты учтут все ваши пожелания и 
                  помогут выбрать оптимальное решение для вашего интерьера.
                </p>
                <Button size="lg" className="bg-wood-medium hover:bg-wood-dark">
                  <Icon name="CalendarPlus" size={18} />
                  Записаться на консультацию
                </Button>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Процесс работы" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ContactBar 
        telegramLink="https://t.me/yourusername"
        whatsappNumber="79991234567"
        telegramGroupLink="https://t.me/yourgroup"
      />
    </div>
  );
};

export default Services;
