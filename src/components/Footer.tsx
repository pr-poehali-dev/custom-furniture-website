
import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-800 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Icon name="Sofa" size={28} />
              <span className="text-xl font-semibold">МебельПро</span>
            </Link>
            <p className="text-brown-100 mb-4 max-w-xs">
              Создаем уникальную мебель для вашего дома, 
              с любовью к деталям и заботой о вашем комфорте.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://t.me/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-brown-200"
                aria-label="Telegram"
              >
                <Icon name="Send" />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-brown-200"
                aria-label="WhatsApp"
              >
                <Icon name="MessageCircle" />
              </a>
              <a 
                href="https://t.me/yourgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-brown-200"
                aria-label="Telegram группа"
              >
                <Icon name="Users" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-brown-100 hover:text-white transition-colors">Главная</Link>
              <Link to="/portfolio" className="text-brown-100 hover:text-white transition-colors">Портфолио</Link>
              <Link to="/services" className="text-brown-100 hover:text-white transition-colors">Услуги</Link>
              <Link to="/contacts" className="text-brown-100 hover:text-white transition-colors">Контакты</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-brown-100">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" className="text-brown-300" />
                <span>г. Москва, ул. Примерная, 123</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="text-brown-300" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="text-brown-300" />
                <span>info@mebelpro.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" className="text-brown-300" />
                <span>Пн-Пт: 9:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brown-700 mt-8 pt-6 text-center text-brown-300 text-sm">
          <p>© 2025 МебельПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
