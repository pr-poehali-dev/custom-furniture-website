
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RoomCategory from "@/components/RoomCategory";
import PortfolioItem from "@/components/PortfolioItem";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

const Index = () => {
  // Категории помещений
  const roomCategories = [
    {
      title: "Кухня",
      description: "Функциональные и стильные решения для сердца вашего дома",
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: "UtensilsCrossed",
      link: "/kitchen"
    },
    {
      title: "Гостиная",
      description: "Изысканная мебель для комфортного отдыха и встречи гостей",
      image: "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: "Sofa",
      link: "/living-room"
    },
    {
      title: "Ванная и туалет",
      description: "Практичная и элегантная мебель для ванных комнат",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: "Shower",
      link: "/bathroom"
    }
  ];

  // Избранные работы из портфолио
  const featuredWorks = [
    {
      title: "Кухня в скандинавском стиле",
      category: "Кухни",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Гардероб в стиле лофт",
      category: "Шкафы",
      image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Диван для загородного дома",
      category: "Мягкая мебель",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Тумба под ТВ в классическом стиле",
      category: "Гостиные",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="home" />
      
      <main className="flex-1">
        {/* Секция героя */}
        <HeroSection />
        
        {/* Секция преимуществ */}
        <section className="py-16 bg-brown-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-wood-dark mb-12">Почему выбирают нас</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Ruler" className="text-brown-700" />
                </div>
                <h3 className="text-xl font-bold text-wood-dark mb-2">Индивидуальный подход</h3>
                <p className="text-gray-600">Создаем мебель по вашим размерам, учитывая все особенности помещения.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Trees" className="text-brown-700" />
                </div>
                <h3 className="text-xl font-bold text-wood-dark mb-2">Экологичные материалы</h3>
                <p className="text-gray-600">Используем только качественные и безопасные материалы для вашего здоровья.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Clock" className="text-brown-700" />
                </div>
                <h3 className="text-xl font-bold text-wood-dark mb-2">Точные сроки</h3>
                <p className="text-gray-600">Соблюдаем договоренности и сдаем проекты в оговоренное время.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция категорий помещений */}
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
        
        {/* Секция процесса работы */}
        <section className="py-16 bg-gradient-to-br from-brown-100 to-brown-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-wood-dark mb-12">Как мы работаем</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white font-bold text-xl">1</span>
                  <div className="absolute -right-8 top-1/2 h-0.5 w-8 bg-brown-200 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-bold text-wood-dark mb-2">Консультация</h3>
                <p className="text-gray-600">Обсуждаем ваши идеи и пожелания, помогаем выбрать оптимальное решение</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white font-bold text-xl">2</span>
                  <div className="absolute -right-8 top-1/2 h-0.5 w-8 bg-brown-200 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-bold text-wood-dark mb-2">Проектирование</h3>
                <p className="text-gray-600">Создаем детальный проект мебели с учетом всех технических требований</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white font-bold text-xl">3</span>
                  <div className="absolute -right-8 top-1/2 h-0.5 w-8 bg-brown-200 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-bold text-wood-dark mb-2">Производство</h3>
                <p className="text-gray-600">Изготавливаем мебель на собственном производстве из качественных материалов</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-wood-dark mb-2">Монтаж</h3>
                <p className="text-gray-600">Доставляем и устанавливаем готовую мебель, проверяя каждую деталь</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция портфолио */}
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
        
        {/* Секция с призывом к действию */}
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
      </main>
      
      <Footer />
      
      {/* Контактная панель */}
      <ContactBar 
        telegramLink="https://t.me/yourusername"
        whatsappNumber="79991234567"
        telegramGroupLink="https://t.me/yourgroup"
      />
    </div>
  );
};

export default Index;
