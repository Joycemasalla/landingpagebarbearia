export const SITE = {
  name: "Barbearia do Romário",
  city: "Miraí, MG",
  address: "Rua Principal, 123 — Centro, Miraí - MG",
  phone: "(32) 99999-0000",
  whatsappNumber: "5532999990000", // placeholder — substituir pelo número real
  whatsappMessage: "Olá Romário! Quero agendar um horário na barbearia.",
  instagram: "https://www.instagram.com/barbeariadoromariomirai/",
  hours: [
    { d: "Terça a Sexta", h: "09h — 20h" },
    { d: "Sábado", h: "08h — 18h" },
    { d: "Domingo e Segunda", h: "Fechado" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Mirai+MG&output=embed",
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
