
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

interface HeaderProps {
  activePage?: string;
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="Sofa" size={28} className="text-wood-medium" />
          <span className="text-xl font-semibold text-wood-dark">МебельПро</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${activePage === 'home' ? 'text-primary border-b-2 border-primary pb-1' : 'text-wood-dark'}`}
          >
            Главная
          </Link>
          <Link 
            to="/portfolio" 
            className={`text-sm font-medium transition-colors hover:text-primary ${activePage === 'portfolio' ? 'text-primary border-b-2 border-primary pb-1' : 'text-wood-dark'}`}
          >
            Портфолио
          </Link>
          <Link 
            to="/services" 
            className={`text-sm font-medium transition-colors hover:text-primary ${activePage === 'services' ? 'text-primary border-b-2 border-primary pb-1' : 'text-wood-dark'}`}
          >
            Услуги
          </Link>
          <Link 
            to="/contacts" 
            className={`text-sm font-medium transition-colors hover:text-primary ${activePage === 'contacts' ? 'text-primary border-b-2 border-primary pb-1' : 'text-wood-dark'}`}
          >
            Контакты
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="default" size="sm" className="rounded-full bg-wood-medium hover:bg-wood-dark">
            <Icon name="Phone" size={16} />
            <span className="hidden sm:inline">Заказать звонок</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" />
            <span className="sr-only">Меню</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
