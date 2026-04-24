import { Camera, Users } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian border-t border-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12 text-center md:text-left">
          
          {/* Wordmark e Descrição */}
          <div className="max-w-sm flex flex-col items-center md:items-start">
            <a href="#inicio" className="font-serif text-3xl font-bold text-sand hover:text-amber transition-colors inline-block mb-4">
              Mundo Animal
            </a>
            <p className="text-cream/60 font-light text-sm leading-relaxed">
              Cuidando do seu melhor amigo com o amor e a dedicação que ele merece. Petshop, Clínica, Estética e SPA em Santos.
            </p>
          </div>

          {/* Links de Navegação */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <nav className="flex flex-col gap-3">
              <a href="#servicos" className="text-cream/80 hover:text-amber text-sm font-medium transition-colors">Serviços</a>
              <a href="#produtos" className="text-cream/80 hover:text-amber text-sm font-medium transition-colors">Produtos</a>
              <a href="#depoimentos" className="text-cream/80 hover:text-amber text-sm font-medium transition-colors">Depoimentos</a>
            </nav>
            <nav className="flex flex-col gap-3">
              <a href="#localizacao" className="text-cream/80 hover:text-amber text-sm font-medium transition-colors">Localização</a>
              <a href="#faq" className="text-cream/80 hover:text-amber text-sm font-medium transition-colors">FAQ</a>
            </nav>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-cream/80 text-sm font-medium">Acompanhe-nos</span>
            <div className="flex items-center gap-4">
              {/* TODO: Substituir href pelos links reais das redes sociais */}
              <a href="#" className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center text-cream hover:bg-sand hover:text-obsidian transition-all duration-300">
                <Camera size={20} aria-label="Instagram" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center text-cream hover:bg-sand hover:text-obsidian transition-all duration-300">
                <Users size={20} aria-label="Facebook" />
              </a>
            </div>
          </div>
          
        </div>

        {/* Direitos Autorais */}
        <div className="pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-cream/40 font-light">
          <p>© {currentYear} Mundo Animal. Todos os direitos reservados.</p>
          <p>Feito com carinho para os pets.</p>
        </div>
        
      </div>
    </footer>
  );
}