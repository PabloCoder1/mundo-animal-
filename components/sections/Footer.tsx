import { getWhatsAppLink } from "@/lib/whatsapp";

const navLinks = [
  { name: "Serviços",    href: "#servicos" },
  { name: "Produtos",    href: "#produtos" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Localização", href: "#localizacao" },
  { name: "FAQ",         href: "#faq" },
];

export default function Footer() {
  const waLink = getWhatsAppLink("Olá! Vim pelo site e quero mais informações.");

  return (
    <footer className="bg-teal text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Marca */}
          <div>
            <a href="#" className="font-serif text-2xl font-bold text-white hover:text-gold transition-colors">
              Mundo Animal
            </a>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mt-1 mb-4">Petshop</p>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Cuidando com amor de quem você mais ama, em Santos/SP.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">Menu</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">Contato</p>
            <div className="flex flex-col gap-2 text-white/70 text-sm">
              <p>Av. Conselheiro Nébias, 460</p>
              <p>Paquetá — Santos/SP</p>
              {/* TODO: Substituir pelo número real */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-white transition-colors font-semibold mt-2"
              >
                (13) 99156-0814
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Mundo Animal. Todos os direitos reservados.</p>
          <p>Feito com 🐾 em Santos/SP</p>
        </div>
      </div>
    </footer>
  );
}
