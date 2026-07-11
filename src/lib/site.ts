export const SETMORE_URL = "https://barbeariadoromario.setmore.com/";

export const SITE = {
  name: "Barbearia do Romário",
  city: "Miraí, MG",
  address: "Rua Lacerda Vernek n°200, Miraí - MG",
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29756.29136002599!2d-42.64148881523439!3d-21.210567088391212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa32c344548701d%3A0xa2d09fc1f4d75f78!2sBarbearia%20Rom%C3%A1rio!5e0!3m2!1spt-BR!2sus!4v1783689522233!5m2!1spt-BR!2sus",
  mapLink: "https://maps.app.goo.gl/Ua3mS8dcFcsmTCuYA",
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
