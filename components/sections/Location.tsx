import SectionWrapper from "@/components/ui/SectionWrapper";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Location() {
  return (
    <SectionWrapper id="localizacao" className="bg-ivory">
      <div className="container mx-auto px-6">

        <div className="mb-12">
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">Onde estamos</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3">
            Venha nos visitar
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Informações */}
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-border">
              <div className="w-10 h-10 bg-tealLight rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-teal" />
              </div>
              <div>
                <p className="font-semibold text-ink text-sm mb-1">Endereço</p>
                <p className="text-muted text-sm leading-relaxed">
                  Av. Conselheiro Nébias, 460 — Paquetá<br />
                  Santos – SP, 11045-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-border">
              <div className="w-10 h-10 bg-tealLight rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-teal" />
              </div>
              <div>
                <p className="font-semibold text-ink text-sm mb-1">Horário de funcionamento</p>
                <p className="text-muted text-sm leading-relaxed">
                  Segunda a Sábado: <strong className="text-ink">8h às 19h</strong><br />
                  Domingo: <strong className="text-ink">9h às 14h</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-border">
              <div className="w-10 h-10 bg-tealLight rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-teal" />
              </div>
              <div>
                <p className="font-semibold text-ink text-sm mb-1">WhatsApp</p>
                {/* TODO: Substituir pelo número real */}
                <a
                  href="https://wa.me/5513991560814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal text-sm font-semibold hover:text-tealDark transition-colors"
                >
                  (13) 99156-0814
                </a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="w-full h-80 lg:h-full min-h-[320px] rounded-3xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="Localização do Mundo Animal"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.5!2d-46.3349!3d-23.9618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03b5b8e4f5f5%3A0x0!2sAv.+Conselheiro+N%C3%A9bias%2C+460+-+Paquet%C3%A1%2C+Santos+-+SP%2C+11045-000!5e0!3m2!1spt-BR!2sbr!4v1680000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
