import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/novo3.png";
import g2 from "@/assets/novo4.png";
import g3 from "@/assets/novo5.png";
import hero from "@/assets/novo1.png";
import about from "@/assets/novo2.png";
import g4 from "@/assets/gallery-extra.jpg";

const images = [
  { src: g1, alt: "Corte moderno finalizado", cls: "row-span-2" },
  { src: g3, alt: "Ambiente da barbearia" },
  { src: g2, alt: "Barba na navalha em detalhe" },
  { src: hero, alt: "Barbeiro em ação" },
  { src: g4, alt: "Cliente satisfeito", cls: "row-span-2" },
  { src: about, alt: "Romário, o barbeiro" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[color:var(--ink)]">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Galeria</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">
              Nosso trabalho <span className="text-gradient-gold">em detalhes.</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/barbeariadoromariomirai/"
            target="_blank" rel="noopener noreferrer"
            className="btn-ghost-gold hover:bg-white/5 text-sm"
          >
            Ver mais no Instagram →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setOpen(img.src)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 ${img.cls ?? ""}`}
              aria-label={`Ampliar: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setOpen(null)}
          >
            <button
              aria-label="Fechar"
              className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10"
              onClick={() => setOpen(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }} animate={{ scale: 1 }}
              src={open}
              alt="Ampliação"
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
