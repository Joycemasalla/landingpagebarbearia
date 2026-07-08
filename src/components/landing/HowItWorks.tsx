import { motion } from "framer-motion";
import { CalendarClock, MessageCircle, Scissors } from "lucide-react";

const steps = [
  { Icon: CalendarClock, t: "Escolha o horário", d: "Veja os horários disponíveis e escolha o que combina com sua rotina." },
  { Icon: MessageCircle, t: "Confirme pelo WhatsApp", d: "Um clique. Resposta rápida. Sem burocracia." },
  { Icon: Scissors, t: "Chegue e aproveite", d: "Relaxe na cadeira. Deixe o resultado com a gente." },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Como funciona</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Simples <span className="text-gradient-gold">como deve ser.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 relative">
          <div aria-hidden className="absolute top-10 left-[16%] right-[16%] hidden md:block h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent" />
          {steps.map(({ Icon, t, d }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-[color:var(--ink)] border border-[color:var(--gold)]/40 text-gold">
                <Icon className="h-8 w-8" />
                <span className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-gold text-[color:var(--ink)] text-xs font-bold">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-foreground/70 max-w-xs mx-auto">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
