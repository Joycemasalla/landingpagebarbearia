import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/site";
import { useBooking } from "@/lib/booking-context";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img src="/logo.png" alt={SITE.name} className="h-16 w-auto object-contain" />
          <span className="hidden sm:block text-sm tracking-[0.25em] uppercase text-foreground/90 ml-1">
            {SITE.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={openBooking}
          className="hidden md:inline-flex btn-gold hover:btn-gold-hover text-sm"
        >
          <FaWhatsapp className="text-lg" /> Agendar
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10 text-foreground"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-white/5">
          <ul className="container-x py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/85"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => { setOpen(false); openBooking(); }}
                className="btn-gold hover:btn-gold-hover w-full"
              >
                <FaWhatsapp /> Agendar horário
              </button>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
