export interface Testimonial {
  id: string;
  name: string;
  petName: string;
  initials: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "depoimento-1",
    name: "Mariana Costa",
    petName: "Tutora da Luna (Golden Retriever)",
    initials: "MC",
    text: "O atendimento no Mundo Animal é excepcional. A equipe trata a Luna com tanto amor que ela chega a abanar o rabo quando estacionamos o carro! O serviço de banho e tosa é impecável.",
  },
  {
    id: "depoimento-2",
    name: "Carlos Eduardo",
    petName: "Tutor do Thor (Bulldog Francês)",
    initials: "CE",
    text: "Sempre tive receio de deixar o Thor em petshops por conta da respiração dele, mas a equipe veterinária me passou muita segurança desde o primeiro dia. Agora só confio neles para qualquer cuidado.",
  },
  {
    id: "depoimento-3",
    name: "Ana Luiza",
    petName: "Tutora do Mingau (Gato SRD)",
    initials: "AL",
    text: "Fizemos o SPA Pet pro Mingau e foi a melhor escolha. Gatos costumam ser estressados fora de casa, mas o ambiente que eles preparam e o cuidado dos profissionais fizeram toda a diferença. Recomendo de olhos fechados!",
  },
];