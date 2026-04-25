// 📄 components/sections/Hero.tsx
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";

export default function Hero() {
  const waLink = getWhatsAppLink("Olá! Vim pelo site e gostaria de agendar um horário para o meu pet.");

  return (
    <section id="inicio" className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden flex items-center">

      {/* Imagem de fundo */}
      <Image
        src="/images/hero-pet.png"
        alt="Profissional cuidando de um golden retriever no Mundo Animal"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay — A GRANDE MUDANÇA: Gradiente claro e sutil, focado apenas na esquerda */}
      <div className="absolute inset-0 bg-gradient-to-r from-ivory/90 via-ivory/40 to-transparent" />

      {/* Conteúdo de texto */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 container mx-auto">
        <div className="max-w-2xl lg:max-w-3xl"> 
          
          {/* TÍTULO: Mais elegante, menos agressivo, e com a cor escura (tealDark) da sua paleta */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-tealDark leading-[1.1] tracking-tight mb-6">
            Beleza, saúde e cuidado para o seu melhor amigo.
          </h1>

          {/* SUBTÍTULO: Cor suave e tamanho harmonioso */}
          <p className="text-lg md:text-xl text-ink/80 leading-relaxed mb-10 max-w-xl">
            Banho, tosa, consultas veterinárias e SPA pet em um espaço feito com carinho para cães e gatos.
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center self-start px-8 py-3.5 bg-teal text-white font-semibold text-lg rounded-full hover:bg-tealDark transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            Agendar horário
          </a>
        </div>
      </div>

      {/* Tag flutuante de horário — Ajustada para o visual claro */}
      <div className="absolute bottom-10 right-10 md:right-16 lg:right-24 bg-white/90 backdrop-blur-md border border-border rounded-2xl px-6 py-4 flex items-center gap-3 shadow-xl">
        <span className="text-2xl">🐾</span>
        <div>
          <p className="text-[11px] text-muted font-semibold uppercase tracking-widest">Santos, SP</p>
          <p className="text-base font-bold text-tealDark">Seg–Sáb 8h–19h · Dom 9h–14h</p>
        </div>
      </div>
    </section>
  );
}