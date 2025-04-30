
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { Button } from "@/components/ui/button";
import PortfolioItem from "@/components/PortfolioItem";
import { featuredWorks } from "@/data/featuredWorks";
import Icon from "@/components/ui/Icon";

const Portfolio: React.FC = () => {
  const categories = ["Все работы", "Кухни", "Гостиные", "Спальни", "Шкафы", "Мягкая мебель"];
  const [activeCategory, setActiveCategory] = React.useState("Все работы");

  // Фильтрация работ по категории (для демонстрации)
  const filteredWorks = activeCategory === "Все работы" 
    ? featuredWorks
    : featuredWorks.filter(work => work.category === activeCategory);

  // Больше проектов для демонстрации
  const allWorks = [
    ...featuredWorks,
    {
      title: "Минималистичная спальня",
      category: "Спальни",
      image: "https://images.unsplash.com/photo-1617325247661-675ab4b64b72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Гардеробная для прихожей",
      category: "Шкафы",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Современная кухня в стиле хай-тек",
      category: "Кухни",
      image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Угловой диван для большой семьи",
      category: "Мягкая мебель",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="portfolio" />
      
      <main className="flex-1">
        <section className="py-10 bg-brown-50">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold text-wood-dark mb-2">Наше портфолио</h1>
            <p className="text-lg text-gray-600 mb-8">
              Ознакомьтесь с нашими лучшими работами и проектами, которые мы реализовали для наших клиентов
            </p>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category 
                    ? "bg-wood-medium hover:bg-wood-dark" 
                    : "border-brown-300 text-brown-700"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allWorks.map((work, index) => (
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
        
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-wood-dark mb-4">Хотите такой же проект?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Мы воплотим в жизнь любую вашу идею с учетом всех ваших пожеланий и особенностей помещения
            </p>
            <Button size="lg" className="bg-wood-medium hover:bg-wood-dark">
              <Icon name="ClipboardEdit" size={18} />
              Оформить заказ
            </Button>
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

export default Portfolio;
