import SectionWrapper from "@/components/ui/SectionWrapper";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function ConversionBanner() {
  const waLink = getWhatsAppLink("Olá! Estava navegando pelo site e quero agendar um horário para o meu pet no Mundo Animal.");

  return (
    <SectionWrapper id="conversao" className="bg-sand py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-obsidian mb-6 max-w-3xl leading-tight">
          Pronto para proporcionar o melhor para o seu melhor amigo?
        </h2>
        
        <p className="text-obsidian/80 text-lg md:text-xl font-medium mb-10 max-w-2xl">
          Nossa equipe está pronta para receber seu pet com todo o carinho e segurança que ele merece. Fale conosco e garanta um horário na nossa agenda.
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center gap-3 px-10 py-5 bg-obsidian text-cream text-lg font-bold rounded-xl hover:bg-muted transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <MessageCircle className="w-6 h-6 text-amber" />
          Falar com Atendimento
        </a>

      </div>
    </SectionWrapper>
  );
}