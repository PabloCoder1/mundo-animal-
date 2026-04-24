export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  badge?: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "racao-super-premium",
    name: "Ração Super Premium 15kg",
    description: "Nutrição completa e balanceada. Focada na longevidade e energia do seu melhor amigo.",
    price: "R$ 219,90",
    badge: "Mais Vendido",
    image: "/images/product-1.jpg",
  },
  {
    id: "shampoo-hipoalergenico",
    name: "Shampoo Hipoalergênico",
    description: "Fórmula suave desenvolvida por dermatologistas veterinários para peles sensíveis.",
    price: "R$ 54,90",
    image: "/images/product-2.jpg",
  },
  {
    id: "caminha-ortopedica",
    name: "Caminha Ortopédica Cloud",
    description: "Espuma de memória que alivia a pressão nas articulações, garantindo um sono profundo.",
    price: "R$ 189,90",
    badge: "Lançamento",
    image: "/images/product-3.jpg",
  },
  {
    id: "kit-higiene-bucal",
    name: "Kit Higiene Bucal Pet",
    description: "Escova de dedeira e pasta sabor carne para prevenção de tártaro e mau hálito.",
    price: "R$ 39,90",
    badge: "15% OFF",
    image: "/images/product-4.jpg",
  },
];