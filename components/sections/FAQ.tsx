"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { faq } from "@/data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper id="faq" className="bg-obsidian">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
            Dúvidas <span className="text-sand italic">Frequentes</span>
          </h2>
          <p className="text-cream/60 text-lg font-light">
            Tudo o que precisa de saber para trazer o seu melhor amigo ao Mundo Animal.
          </p>
        </div>

        {/* Lista de Accordions */}
        <div className="space-y-4">
          {faq.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div 
                key={item.id}
                className="border border-muted/30 rounded-2xl overflow-hidden bg-muted/5 transition-colors duration-300 hover:bg-muted/10"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-sand' : 'text-cream'}`}>
                    {item.question}
                  </span>
                  <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-sand' : 'text-cream/40'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-cream/70 leading-relaxed font-light border-t border-muted/20">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}