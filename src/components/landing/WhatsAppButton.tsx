import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { waLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-[color:var(--whatsapp)] text-white shadow-[0_10px_40px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--whatsapp)] opacity-60 animate-ping" />
      <FaWhatsapp className="relative text-2xl sm:text-3xl" />
    </motion.a>
  );
}
