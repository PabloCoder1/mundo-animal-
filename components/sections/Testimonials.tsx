import SectionWrapper from "@/components/ui/SectionWrapper";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <SectionWrapper id="depoimentos" className="bg-obsidian">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
            Histórias de <span className="text-sand italic">Amor e Cuidado</span>
          </h2>
          <p className="text-cream/60 text-lg font-light max-w-2xl mx-auto">
            Não somos apenas nós que dizemos. Veja o que os tutores que confiam no Mundo Animal têm a dizer sobre nossa dedicação.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-muted/10 border border-muted/30 p-8 rounded-3xl flex flex-col relative"
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                ))}
              </div>

              {/* Texto do Depoimento */}
              <p className="text-cream/80 italic font-light leading-relaxed mb-8 flex-grow">
                "{item.text}"
              </p>

              {/* Identificação do Tutor */}
              <div className="flex items-center gap-4 pt-6 border-t border-muted/30">
                <div className="w-12 h-12 rounded-full bg-sand/20 border border-sand/30 flex items-center justify-center text-sand font-bold text-lg">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-cream font-semibold leading-none mb-1">
                    {item.name}
                  </h4>
                  <span className="text-sand text-xs font-medium uppercase tracking-wider">
                    {item.petName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}