"use client";

import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const waLink = getWhatsAppLink("Olá! Gostaria de agendar um horário para o meu pet.");

  // Extraímos o logo para um mini-componente
  const BrandLogo = () => (
    <a href="#inicio" className="flex flex-col items-center group shrink-0">
      <div className="flex items-center gap-1.5">
        <span className="font-serif text-2xl font-black text-teal tracking-tight group-hover:text-tealDark transition-colors">
          MUNDO ANIMAL
        </span>
        <PawPrint className="w-6 h-6 text-teal group-hover:text-tealDark transition-colors" fill="currentColor" />
      </div>
      <span className="text-[9px] font-bold tracking-[0.25em] text-teal/80 uppercase mt-0.5">
        Petshop
      </span>
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-ivory border-b border-border shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* MOBILE: Logo fica à esquerda no celular */}
        <div className="md:hidden flex-1">
          <BrandLogo />
        </div>

        {/* DESKTOP: Espaçador invisível (Garante centralização) */}
        <div className="hidden md:block flex-1" />

        {/* DESKTOP: Bloco Central (Links reais do projeto abraçando o Logo) */}
        <nav className="hidden md:flex items-center gap-10 shrink-0">
          {/* Lado Esquerdo */}
          <a href="#servicos" className="text-ink hover:text-teal text-sm font-medium transition-colors">Serviços</a>
          <a href="#produtos" className="text-ink hover:text-teal text-sm font-medium transition-colors">Produtos</a>
          
          <BrandLogo />
          
          {/* Lado Direito */}
          <a href="#localizacao" className="text-ink hover:text-teal text-sm font-medium transition-colors">Localização</a>
          <a href="#faq" className="text-ink hover:text-teal text-sm font-medium transition-colors">Dúvidas (FAQ)</a>
        </nav>

        {/* DIREITA: Botão Agendar (Desktop) e Menu Hamburguer (Mobile) */}
        <div className="flex flex-1 justify-end items-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-teal text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-tealDark transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Agendar agora
          </a>

          <button
            className="md:hidden text-ink hover:text-teal transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* MENU MOBILE (Animado) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-ivory border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              <a href="#servicos" onClick={toggleMenu} className="text-ink hover:text-teal text-lg font-medium transition-colors">Serviços</a>
              <a href="#produtos" onClick={toggleMenu} className="text-ink hover:text-teal text-lg font-medium transition-colors">Produtos</a>
              <a href="#depoimentos" onClick={toggleMenu} className="text-ink hover:text-teal text-lg font-medium transition-colors">Depoimentos</a>
              <a href="#localizacao" onClick={toggleMenu} className="text-ink hover:text-teal text-lg font-medium transition-colors">Localização</a>
              <a href="#faq" onClick={toggleMenu} className="text-ink hover:text-teal text-lg font-medium transition-colors">Dúvidas (FAQ)</a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="bg-teal text-white px-6 py-3 rounded-full text-center font-semibold hover:bg-tealDark transition-colors mt-2"
              >
                Agendar agora
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}