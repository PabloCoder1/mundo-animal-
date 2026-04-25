"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { faq } from "@/data/faq";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="bg-sand">
      <div className="container mx-auto px-6 max-w-3xl">

        <div className="text-center mb-14">
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">Dúvidas</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3">
            Perguntas frequentes
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faq.map((item, index) => (
            <div key={item.id} className="bg-white rounded-2xl border border-border overflow-hidden">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-semibold text-ink text-base">{item.question}</span>
                <span className="text-teal flex-shrink-0">
                  {open === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-border pt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
