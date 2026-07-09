import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { CalendarClock, MessageCircle, Scissors } from "lucide-react";
import heroImg from "@/assets/hero-barber.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";

const steps = [
  { Icon: CalendarClock, t: "Escolha o horário", d: "Veja os horários disponíveis e escolha o que combina com sua rotina.", img: g3 },
  { Icon: MessageCircle, t: "Confirme pelo WhatsApp", d: "Um clique. Resposta rápida. Sem burocracia.", img: heroImg },
  { Icon: Scissors, t: "Chegue e aproveite", d: "Relaxe na cadeira. Deixe o resultado com a gente.", img: g1 },
];

function StickyImage({ src, index, total, progress }: { src: string; index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total;
  const end = (index + 1) / total;
  
  // Limita os valores matematicamente para nunca serem menores que 0 ou maiores que 1
  const fadeStart = Math.max(0, start - 0.05);
  const fadeStartEnd = Math.min(1, start + 0.05);
  const fadeEndStart = Math.max(0, end - 0.05);
  const fadeEnd = Math.min(1, end + 0.05);

  const opacity = useTransform(
    progress, 
    [fadeStart, fadeStartEnd, fadeEndStart, fadeEnd], 
    [0, 1, 1, 0]
  );
  const scale = useTransform(progress, [start, end], [1.1, 1]);
  
  return (
    <motion.img
      src={src}
      alt=""
      style={{ opacity, scale }}
      className="absolute inset-0 h-full w-full object-cover will-change-transform"
    />
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Como funciona</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Simples <span className="text-gradient-gold">como deve ser.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Sticky visual */}
          <div className="hidden lg:block">
            <div className="sticky top-24 aspect-[4/5] rounded-3xl overflow-hidden border border-white/5">
              {steps.map((s, i) => (
                <StickyImage key={s.t} src={s.img} index={i} total={steps.length} progress={scrollYProgress} />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-24 lg:py-24">
            {steps.map(({ Icon, t, d }, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[color:var(--ink)] border border-[color:var(--gold)]/40 text-gold">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="font-display text-6xl text-gradient-gold leading-none">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-3xl sm:text-4xl">{t}</h3>
                <p className="mt-3 text-base text-foreground/70 max-w-md">{d}</p>
                <div className="mt-6 h-px w-24 bg-gradient-to-r from-[color:var(--gold)]/60 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
