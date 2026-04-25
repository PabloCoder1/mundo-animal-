import SectionWrapper from "@/components/ui/SectionWrapper";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Location() {
  return (
    <SectionWrapper id="localizacao" className="bg-obsidian/40 border-y border-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna de Informações */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
                Como nos <span className="text-sand italic">Encontrar</span>
              </h2>
              <p className="text-cream/70 text-lg font-light leading-relaxed">
                Nossa estrutura foi pensada para oferecer fácil acesso e total conforto para você e seu pet. Venha nos fazer uma visita!
              </p>
            </div>

            <div className="space-y-6">
              {/* Card Endereço */}
              <div className="flex gap-4 items-start bg-muted/10 p-6 rounded-2xl border border-muted/20">
                <div className="w-12 h-12 rounded-xl bg-obsidian flex items-center justify-center shrink-0 border border-muted/50">
                  <MapPin className="text-amber w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-cream font-semibold mb-1">Endereço</h4>
                  <p className="text-cream/70 font-light leading-relaxed">
                    Av. Conselheiro Nébias, 460 - Paquetá<br />
                    Santos - SP, 11045-000
                  </p>
                </div>
              </div>

              {/* Card Horário */}
              <div className="flex gap-4 items-start bg-muted/10 p-6 rounded-2xl border border-muted/20">
                <div className="w-12 h-12 rounded-xl bg-obsidian flex items-center justify-center shrink-0 border border-muted/50">
                  <Clock className="text-amber w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-cream font-semibold mb-1">Horário de Funcionamento</h4>
                  <p className="text-cream/70 font-light leading-relaxed">
                    Segunda a Sábado: 8h às 19h<br />
                    Domingo: 9h às 14h
                  </p>
                </div>
              </div>

              {/* Card Contato */}
              <div className="flex gap-4 items-start bg-muted/10 p-6 rounded-2xl border border-muted/20">
                <div className="w-12 h-12 rounded-xl bg-obsidian flex items-center justify-center shrink-0 border border-muted/50">
                  <Phone className="text-amber w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-cream font-semibold mb-1">WhatsApp / Telefone</h4>
                  {/* TODO: Substituir pelo número real */}
                  <p className="text-cream/70 font-light leading-relaxed">
                    (13) 99156-0814
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna do Mapa */}
          <div className="w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden border border-muted/30 relative bg-muted/10 group">
            {/* Overlay escurecido que desaparece no hover para melhorar usabilidade */}
            <div className="absolute inset-0 bg-obsidian/30 pointer-events-none z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
            
            {/* Iframe do Google Maps (coordenadas reais da Av Conselheiro Nébias 460) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.0673410631525!2d-46.32624892466031!3d-23.958054077651037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03a27f6735e5%3A0xc3f631168128ea5c!2sAv.%20Conselheiro%20N%C3%A9bias%2C%20460%20-%20Paquet%C3%A1%2C%20Santos%20-%20SP%2C%2011045-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100"
            ></iframe>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}