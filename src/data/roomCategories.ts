
import { RoomCategoryProps } from "@/components/RoomCategory";

export const roomCategories: RoomCategoryProps[] = [
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
