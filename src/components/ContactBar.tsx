
import React from "react";
import Icon from "@/components/ui/Icon";

interface ContactBarProps {
  telegramLink: string;
  whatsappNumber: string;
  telegramGroupLink: string;
}

const ContactBar: React.FC<ContactBarProps> = ({
  telegramLink,
  whatsappNumber,
  telegramGroupLink
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Telegram личный чат */}
      <a 
        href={telegramLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-button flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600"
        aria-label="Telegram"
      >
        <Icon name="Send" />
      </a>
      
      {/* WhatsApp */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-button flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
        aria-label="WhatsApp"
      >
        <Icon name="MessageCircle" />
      </a>
      
      {/* Telegram группа */}
      <a 
        href={telegramGroupLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-button flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600"
        aria-label="Telegram группа"
      >
        <Icon name="Users" />
      </a>
    </div>
  );
};

export default ContactBar;
