import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Mundo Animal | O melhor para o seu pet",
  description: "Petshop completo com Banho e Tosa, Consulta Veterinária, Estética Especializada e SPA Pet. Cuidamos do seu melhor amigo com carinho e profissionalismo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema Markup para SEO Local (LocalBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: "Mundo Animal",
    image: "https://mundoanimal.com.br/logo.png", // TODO: Atualizar para URL real do logo
    "@id": "https://mundoanimal.com.br",
    url: "https://mundoanimal.com.br",
    telephone: "+5513991560814", // TODO: Atualizar para o número real
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Conselheiro Nébias, 460 - Paquetá",
      addressLocality: "Santos",
      addressRegion: "SP",
      postalCode: "11045-000",
      addressCountry: "BR"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "08:00",
        closes: "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "14:00"
      }
    ]
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-obsidian text-cream antialiased">
        <Navbar />
        {children}
        <WhatsAppButton />
        
        {/* Injeção do JSON-LD no cabeçalho do documento */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}