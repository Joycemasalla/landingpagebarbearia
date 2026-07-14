import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Barbearia do Romário" },
      {
        name: "description",
        content:
          "Política de Privacidade da Barbearia do Romário. Saiba como tratamos seus dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018).",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Política de Privacidade — Barbearia do Romário" },
      { property: "og:description", content: "Como tratamos seus dados pessoais em conformidade com a LGPD." },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://landingpagebarbearia.lovable.app/privacidade" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const updated = "14 de julho de 2026";
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container-x max-w-3xl py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Documento legal</p>
        <h1 className="mt-3 text-4xl md:text-5xl text-gradient-gold">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-foreground/60">Última atualização: {updated}</p>

        <div className="prose prose-invert mt-10 space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl text-foreground">1. Quem somos</h2>
            <p className="mt-2">
              Esta Política descreve como a <strong>{SITE.name}</strong>, situada em {SITE.address},
              trata os dados pessoais dos visitantes deste site, em conformidade com a Lei Geral de
              Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground">2. Dados que coletamos</h2>
            <p className="mt-2">
              Este site é uma página institucional e <strong>não coleta dados pessoais diretamente</strong>.
              Não utilizamos formulários próprios, cookies de rastreamento, nem armazenamos informações
              em nossa infraestrutura.
            </p>
            <p className="mt-2">
              O agendamento de horários é realizado por meio da plataforma de terceiros{" "}
              <strong>Setmore</strong>, exibida em uma janela integrada. Ao utilizá-la, você fornece
              dados (nome, telefone, e-mail e horário desejado) diretamente à Setmore, que atua como
              operadora dos dados. Consulte a política de privacidade da Setmore em{" "}
              <a
                href="https://www.setmore.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                setmore.com/privacy
              </a>
              .
            </p>
            <p className="mt-2">
              Caso opte por falar conosco via WhatsApp, os dados trocados na conversa ficam sujeitos
              à política de privacidade do WhatsApp/Meta.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground">3. Finalidade do tratamento</h2>
            <p className="mt-2">
              Os dados fornecidos por você a nossos parceiros (Setmore e WhatsApp) têm como única
              finalidade viabilizar o agendamento de serviços e o atendimento ao cliente.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground">4. Compartilhamento</h2>
            <p className="mt-2">
              Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de
              marketing. Os únicos operadores envolvidos são os prestadores de serviço mencionados
              acima (Setmore e WhatsApp), estritamente para viabilizar o agendamento e a comunicação.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground">5. Cookies</h2>
            <p className="mt-2">
              Este site não utiliza cookies de rastreamento próprios. A janela de agendamento
              incorporada pode utilizar cookies próprios da Setmore, conforme a política do
              fornecedor.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground">6. Seus direitos (LGPD)</h2>
            <p className="mt-2">Você tem direito a, entre outros:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>confirmar a existência de tratamento;</li>
              <li>acessar, corrigir ou atualizar seus dados;</li>
              <li>solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>revogar o consentimento a qualquer momento.</li>
            </ul>
            <p className="mt-2">
              Para exercer qualquer desses direitos, entre em contato com a Barbearia do Romário
              pelos canais indicados na seção “Contato”.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground">7. Segurança</h2>
            <p className="mt-2">
              Adotamos boas práticas técnicas (HTTPS, cabeçalhos de segurança, isolamento de
              conteúdo de terceiros em iframe) para proteger a integridade das informações trocadas
              neste site.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground">8. Alterações</h2>
            <p className="mt-2">
              Esta política pode ser atualizada a qualquer momento. A versão vigente estará sempre
              disponível nesta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground">9. Contato</h2>
            <p className="mt-2">
              Dúvidas sobre esta Política podem ser enviadas via WhatsApp ({SITE.phone}) ou pelo
              Instagram{" "}
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                @barbeariadoromariomirai
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="btn-ghost-gold hover:bg-white/5">
            ← Voltar para o início
          </Link>
        </div>
      </main>
    </div>
  );
}
