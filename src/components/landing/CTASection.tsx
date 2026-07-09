import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "@/lib/site";
import heroImg from "@/assets/novo1.png";

export function CTASection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <img src={heroImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover object-top opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative container-x text-center max-w-3xl"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Chegou a sua vez</p>
        <h2 className="mt-4 text-5xl sm:text-7xl leading-[0.95]">
          Está na hora de <br />
          <span className="text-gradient-gold">renovar seu visual.</span>
        </h2>
        <p className="mt-6 text-lg text-foreground/75">
          Os melhores horários voam. Garanta o seu agora e sinta a diferença de
          um atendimento pensado nos mínimos detalhes.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold hover:btn-gold-hover mt-10 text-base px-8 py-4"
        >
          <FaWhatsapp className="text-2xl" /> Agendar agora pelo WhatsApp
        </a>
        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-foreground/50">
          Resposta rápida · Horário marcado
        </p>
      </motion.div>
    </section>
  );
}
