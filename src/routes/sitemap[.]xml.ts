import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://landingpagebarbearia.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          `  <url>`,
          `    <loc>${BASE_URL}/</loc>`,
          `    <lastmod>${today}</lastmod>`,
          `    <changefreq>weekly</changefreq>`,
          `    <priority>1.0</priority>`,
          `  </url>`,
          `  <url>`,
          `    <loc>${BASE_URL}/privacidade</loc>`,
          `    <lastmod>${today}</lastmod>`,
          `    <changefreq>yearly</changefreq>`,
          `    <priority>0.3</priority>`,
          `  </url>`,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
