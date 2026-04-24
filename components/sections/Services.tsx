import SectionWrapper from "@/components/ui/SectionWrapper";
import { services } from "@/data/services";

export default function Services() {
  return (
    <SectionWrapper id="servicos" className="bg-obsidian">
      <div className="container mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="mb-16 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
            Nossos <span className="text-sand italic">Serviços</span>
          </h2>
          <p className="text-cream/70 text-lg font-light leading-relaxed">
            Oferecemos um portfólio completo de cuidados para garantir a saúde, a beleza e o bem-estar do seu pet em todas as fases da vida.
          </p>
        </div>

        {/* Bento Grid Assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            // Lógica para criar a assimetria (Bento Box) dependendo do índice
            let cardClasses = "bg-muted/10 border border-muted/30 rounded-3xl p-8 hover:bg-muted/30 transition-colors duration-500 group flex flex-col";
            
            if (index === 0) {
              // 1º Card: Largo no Tablet e Desktop
              cardClasses += " md:col-span-2 lg:col-span-2";
            } else if (index === 1) {
              // 2º Card: Alto no Desktop (ocupa 2 linhas)
              cardClasses += " md:col-span-1 lg:col-span-1 lg:row-span-2";
            } else if (index === 2) {
              // 3º Card: Tamanho padrão em todas as telas
              cardClasses += " md:col-span-1 lg:col-span-1";
            } else if (index === 3) {
              // 4º Card: Largo no Tablet, padrão no Desktop
              cardClasses += " md:col-span-2 lg:col-span-1";
            }

            return (
              <div key={service.id} className={cardClasses}>
                <div className="w-14 h-14 rounded-2xl bg-sand/10 border border-sand/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-sand/20 group-hover:border-sand/40 transition-all duration-500">
                  <Icon className="w-7 h-7 text-sand" />
                </div>
                
                <div className="mt-auto">
                  <h3 className="font-serif text-2xl font-semibold text-cream mb-4">
                    {service.title}
                  </h3>
                  <p className="text-cream/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}