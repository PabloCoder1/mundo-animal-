export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faq: FAQItem[] = [
  {
    id: "faq-1",
    question: "Preciso agendar o banho e tosa com antecedência?",
    answer: "Sim! Para garantirmos o melhor atendimento e um ambiente tranquilo para o seu pet, trabalhamos com horários agendados. Você pode marcar rapidamente pelo nosso WhatsApp.",
  },
  {
    id: "faq-2",
    question: "Quais os horários de funcionamento do Mundo Animal?",
    answer: "Estamos de portas abertas para receber seu pet de Segunda a Sábado, das 8h às 19h, e aos Domingos, das 9h às 14h.",
  },
  {
    id: "faq-3",
    question: "Vocês atendem gatos?",
    answer: "Com certeza! Temos profissionais especializados no manejo felino e preparamos o ambiente para que seja o menos estressante possível para o seu gato, tanto no banho quanto na clínica.",
  },
  {
    id: "faq-4",
    question: "Como funciona o serviço de SPA Pet?",
    answer: "Nosso SPA inclui um banho de ofurô quentinho, cromoterapia e massagem relaxante. É ideal para pets idosos, ansiosos ou simplesmente para dar aquele mimo especial que eles merecem.",
  },
  {
    id: "faq-5",
    question: "Onde vocês estão localizados?",
    answer: "Ficamos na Av. Conselheiro Nébias, 460 - Paquetá, em Santos - SP. Temos um espaço de fácil acesso para você deixar e buscar o seu melhor amigo com segurança.",
  },
];