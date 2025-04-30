
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

interface HeaderProps {
  activePage?: string;

interface HeaderProps {
  activePage?: "home" | "portfolio" | "services" | "contacts";
}

const Header: React.FC<HeaderProps> = ({ activePage = "home" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  const menuItems = [
    { title: "Главная", href: "/" },
    { title: "Портфолио", href: "/portfolio" },
    { title: "Услуги", href: "/services" },
    { title: "Контакты", href: "/contacts" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo-b.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-lg text-wood-dark">Мебель на заказ</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    (activePage === "home" && item.href === "/") ||
                    (activePage !== "home" && item.href.includes(activePage))
                      ? "text-wood-dark"
                      : "text-gray-600 hover:text-wood-medium"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}

            <span className="sr-only">Меню</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
