// 📄 components/sections/Hero.tsx
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";

export default function Hero() {
  const waLink = getWhatsAppLink("Olá! Vim pelo site e gostaria de agendar um horário para o meu pet.");

  return (
    <section id="inicio" className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">

      {/* Imagem de fundo do hero */}
      <Image
        src="/images/hero-pet.png"
        alt="Profissional cuidando de um golden retriever no Mundo Animal"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay — CORRIGIDO: GRADIENTE MAIS SUTIL */}
      {/* Reduzi a opacidade de 90% para 60% e 50% para 30% para a imagem aparecer mais */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

      {/* Conteúdo de texto — esquerda */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-xl">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-ink leading-[1.15] mb-5">
          Beleza, saúde e cuidado para o seu melhor amigo.
        </h1>

        <p className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-sm">
          Banho, tosa, consultas veterinárias e SPA pet em um espaço feito com carinho para cães e gatos.
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center self-start px-8 py-3.5 bg-teal text-white font-semibold text-base rounded-full hover:bg-tealDark transition-all duration-300 shadow-md hover:-translate-y-0.5"
        >
          Agendar horário
        </a>
      </div>

      {/* Tag flutuante de horário */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 bg-white/90 backdrop-blur-sm border border-border rounded-2xl px-5 py-3 flex items-center gap-3 shadow-sm">
        <span className="text-xl">🐾</span>
        <div>
          <p className="text-[10px] text-muted font-semibold uppercase tracking-wide">Santos, SP</p>
          <p className="text-sm font-bold text-ink">Seg–Sáb 8h–19h · Dom 9h–14h</p>
        </div>
      </div>
    </section>
  );
}