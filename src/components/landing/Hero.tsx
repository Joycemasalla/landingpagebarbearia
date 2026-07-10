import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import heroVideo from "@/assets/hero-video.mp4";
import { waLink } from "@/lib/site";
import { WordReveal } from "@/components/motion/WordReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="inicio" className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-center"
      />
      {/* Overlay premium solicitado - Escurecido para melhor leitura */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,.70), rgba(0,0,0,.90))' }} 
      />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative container-x flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-black/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Miraí — MG
          </motion.div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-foreground">
            <WordReveal text="Seu visual" />
            <br />
            <WordReveal text="começa aqui." goldFrom={0} delay={0.15} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg text-foreground/80 font-light"
          >
            Cortes modernos, barba na navalha e um atendimento pensado nos mínimos detalhes.
            A experiência premium que sua rotina merece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold hover:btn-gold-hover">
              <FaWhatsapp className="text-xl" /> Agendar pelo WhatsApp
            </MagneticButton>
            <MagneticButton href="#servicos" strength={0.2} className="btn-ghost-gold hover:bg-white/5">
              Ver serviços
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
            </div>
            <div className="text-sm text-foreground/70">
              <span className="text-foreground font-medium">+800 clientes</span> satisfeitos · Horário marcado
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#servicos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1, duration: 0.8 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/50 hover:text-gold"
        >
          role para descobrir ↓
        </motion.a>
      </motion.div>
    </section>
  );
}
