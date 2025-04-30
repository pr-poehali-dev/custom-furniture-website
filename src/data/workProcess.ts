
import { WorkStepProps } from "@/components/home/WorkStep";

export const workSteps: WorkStepProps[] = [
  {
    number: 1,
    title: "Консультация",
    description: "Обсуждаем ваши идеи и пожелания, помогаем выбрать оптимальное решение",
    showConnector: true
  },
  {
    number: 2,
    title: "Проектирование",
    description: "Создаем детальный проект мебели с учетом всех технических требований",
    showConnector: true
  },
  {
    number: 3,
    title: "Производство",
    description: "Изготавливаем мебель на собственном производстве из качественных материалов",
    showConnector: true
  },
  {
    number: 4,
    title: "Монтаж",
    description: "Доставляем и устанавливаем готовую мебель, проверяя каждую деталь",
    showConnector: false
  }
];
