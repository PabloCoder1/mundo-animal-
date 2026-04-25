import SectionWrapper from "@/components/ui/SectionWrapper";
import { services } from "@/data/services";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Scissors, Stethoscope, Sparkles, Heart } from "lucide-react";

export default function Services() {
  const waLink = getWhatsAppLink("Olá! Gostaria de saber mais sobre os serviços do Mundo Animal.");

  return (
    <SectionWrapper id="servicos" className="bg-sand">
      <div className="container mx-auto px-6">

        {/* Cabeçalho */}
        <div className="max-w-xl mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">Nossos Serviços</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3 leading-tight">
            Tudo que seu pet precisa, em um só lugar.
          </h2>
        </div>

        {/* Layout assimétrico */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-3xl p-8 flex flex-col gap-4 transition-shadow hover:shadow-md ${
                index === 0
                  ? "bg-teal text-white md:col-span-2 lg:col-span-1"
                  : "bg-white border border-border"
              }`}
            >
              <span className="text-4xl">
                {service.icon === Scissors ? <Scissors size={40} /> : service.icon === Stethoscope ? <Stethoscope size={40} /> : service.icon === Sparkles ? <Sparkles size={40} /> : <Heart size={40} />}
              </span>
              <h3 className={`font-serif text-2xl font-bold ${index === 0 ? "text-white" : "text-ink"}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed flex-1 ${index === 0 ? "text-white/80" : "text-muted"}`}>
                {service.description}
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center text-sm font-semibold mt-2 transition-colors ${
                  index === 0
                    ? "text-white/90 hover:text-white"
                    : "text-teal hover:text-tealDark"
                }`}
              >
                Agendar →
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
