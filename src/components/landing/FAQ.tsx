import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Preciso agendar horário?", a: "Sim, trabalhamos com horário marcado para garantir um atendimento tranquilo e sem espera. Basta chamar no WhatsApp." },
  { q: "Aceitam cartão de crédito e Pix?", a: "Aceitamos Pix, dinheiro, débito e crédito. À vontade." },
  { q: "Qual o horário de funcionamento?", a: "Terça a sexta das 09h às 20h e sábado das 08h às 18h. Domingo e segunda fechado." },
  { q: "Atendem crianças?", a: "Sim! Temos experiência em atender crianças de todas as idades com paciência e carinho." },
  { q: "Quanto tempo dura um atendimento?", a: "Um corte leva em torno de 30 minutos. Combo corte + barba leva cerca de 50 minutos." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container-x max-w-3xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Dúvidas</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Perguntas <span className="text-gradient-gold">frequentes.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border overflow-hidden transition ${
                  isOpen ? "border-[color:var(--gold)]/40 bg-[color:var(--ink)]" : "border-white/5 bg-[color:var(--ink)]/60"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg text-foreground">{f.q}</span>
                  <span className={`grid h-9 w-9 place-items-center rounded-full border transition ${isOpen ? "bg-gold text-[color:var(--ink)] border-gold rotate-45" : "border-white/15 text-foreground/70"}`}>
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6"
                    >
                      <p className="pb-6 text-foreground/75 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
