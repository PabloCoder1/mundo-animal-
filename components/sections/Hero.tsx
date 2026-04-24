import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Star } from "lucide-react";

export default function Hero() {
  const waLink = getWhatsAppLink("Olá! Gostaria de saber mais e agendar um horário para o meu pet.");

  return (
    <SectionWrapper id="inicio" className="relative min-h-[calc(100vh-80px)] flex items-center">
      {/* Background Decorativo Sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-muted/30 via-obsidian to-obsidian -z-10"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12">
        
        {/* Coluna de Texto */}
        <div className="flex flex-col items-start space-y-8 z-10">
          
          {/* Badge de Prova Social */}
          <div className="flex items-center gap-3 bg-muted/40 border border-muted rounded-full px-4 py-2 w-fit backdrop-blur-sm">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-sand border-2 border-obsidian"></div>
              <div className="w-7 h-7 rounded-full bg-amber border-2 border-obsidian"></div>
              <div className="w-7 h-7 rounded-full bg-cream border-2 border-obsidian"></div>
            </div>
            <div className="flex items-center gap-1.5 ml-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber text-amber" />
                ))}
              </div>
              <span className="text-xs font-medium text-cream/90 ml-1">
                Amado por +1.000 tutores
              </span>
            </div>
          </div>

          {/* Headline & Subheadline */}
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-cream">
              O cuidado que seu melhor amigo <span className="text-sand italic">merece.</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/70 max-w-lg font-light leading-relaxed">
              Mais que um petshop. Um espaço acolhedor com clínica, estética e SPA, dedicado à saúde e felicidade de quem você mais ama.
            </p>
          </div>

          {/* CTAs (Call to Actions) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 bg-amber text-obsidian font-semibold rounded-lg hover:bg-sand transition-all duration-300 shadow-lg shadow-amber/10 hover:shadow-amber/20 hover:-translate-y-0.5"
            >
              Agendar Horário
            </a>
            <a
              href="#servicos"
              className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-muted text-cream font-medium rounded-lg hover:bg-muted/50 transition-colors duration-300"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>

        {/* Coluna da Imagem */}
        <div className="relative w-full h-[450px] lg:h-[600px] rounded-2xl overflow-hidden border border-muted/50 shadow-2xl group">
          {/* Overlay escurecido para não quebrar o contraste do tema dark */}
          <div className="absolute inset-0 bg-obsidian/20 z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
          
          <Image
            src="/images/hero-pet.jpg" // TODO: Adicionar imagem real na pasta public/images/
            alt="Cachorro feliz e bem cuidado no Mundo Animal"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}