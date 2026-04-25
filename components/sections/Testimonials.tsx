import SectionWrapper from "@/components/ui/SectionWrapper";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <SectionWrapper id="depoimentos" className="bg-sand">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">Depoimentos</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3">
            O que dizem os tutores
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-3xl p-8 border border-border flex flex-col gap-5 hover:shadow-md transition-shadow">

              {/* Estrelas */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-gold text-gold" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-muted text-sm leading-relaxed flex-1">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name?.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.petName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
