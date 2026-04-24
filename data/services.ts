    import { Scissors, Stethoscope, Sparkles, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "banho-e-tosa",
    title: "Banho e Tosa",
    description: "Higiene completa e cortes padronizados ou personalizados, respeitando a pelagem e a estrutura do seu pet.",
    icon: Scissors,
  },
  {
    id: "consulta-veterinaria",
    title: "Consulta Veterinária",
    description: "Atendimento clínico de excelência, focado em prevenção, diagnóstico e tratamento humanizado.",
    icon: Stethoscope,
  },
  {
    id: "estetica-especializada",
    title: "Estética Especializada",
    description: "Hidratação profunda, penteados, trimming e cuidados visuais premium para o seu companheiro.",
    icon: Sparkles,
  },
  {
    id: "spa-pet",
    title: "SPA Pet",
    description: "Momentos de puro relaxamento com ofurô, cromoterapia e massagens para aliviar o estresse do animal.",
    icon: Heart,
  },
];