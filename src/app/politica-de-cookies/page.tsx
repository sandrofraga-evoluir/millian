import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ManageCookiesButton } from "@/components/manage-cookies-button";
import { hotel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Quais cookies o site do Hotel Millian usa, para que servem e como gerenciar suas preferências.",
  alternates: { canonical: "/politica-de-cookies" },
};

const atualizadoEm = "11 de julho de 2026";

const categorias = [
  {
    nome: "Necessários",
    sempreAtivo: true,
    descricao:
      "Essenciais para o funcionamento do site, como lembrar a sua escolha de cookies. Não podem ser desativados.",
    exemplos: [
      {
        nome: "millian-cookie-consent",
        finalidade: "Guarda sua escolha sobre cookies",
        prazo: "6 meses",
      },
    ],
  },
  {
    nome: "Analíticos",
    sempreAtivo: false,
    descricao:
      "Nos ajudam a entender como os visitantes usam o site — páginas mais vistas, tempo de navegação — para que possamos melhorá-lo. Usamos o Google Analytics (GA4).",
    exemplos: [
      {
        nome: "_ga, _ga_*",
        finalidade: "Google Analytics — identifica visitas e sessões",
        prazo: "até 2 anos",
      },
    ],
  },
  {
    nome: "Marketing",
    sempreAtivo: false,
    descricao:
      "Usados para medir a efetividade de anúncios. Hoje usamos o Meta Pixel (Facebook/Instagram); futuramente, caso passemos a rodar campanhas pagas, também poderemos usar o Google Ads.",
    exemplos: [
      {
        nome: "_fbp, _fbc",
        finalidade: "Meta Pixel — mede a efetividade de anúncios no Facebook e Instagram",
        prazo: "até 90 dias",
      },
    ],
  },
] as const;

export default function PoliticaDeCookiesPage() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-3xl px-6 pt-8 pb-4 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Cookies"
            title="Política de Cookies"
            description={`Última atualização: ${atualizadoEm}`}
          />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pt-8 pb-10 sm:px-8">
        <Reveal>
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Cookies são pequenos arquivos guardados no seu navegador quando
              você visita um site. Usamos alguns para o funcionamento básico
              do site e, com o seu consentimento, outros para entender como
              o site é usado e medir a efetividade de eventuais campanhas de
              marketing.
            </p>
            <p>
              Ao visitar o site pela primeira vez, um banner permite aceitar
              todos os cookies ou manter apenas os necessários. Você pode
              mudar de ideia a qualquer momento clicando em &ldquo;Gerenciar
              cookies&rdquo; no rodapé do site.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-16 sm:px-8">
        <div className="space-y-4">
          {categorias.map((categoria, i) => (
            <Reveal key={categoria.nome} delay={i * 0.06}>
              <div className="rounded-[2rem] bg-foreground/5 p-1.5 ring-1 ring-foreground/5">
                <div className="rounded-[calc(2rem-0.375rem)] bg-card p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="font-heading text-lg text-foreground">
                      {categoria.nome}
                    </h2>
                    <span
                      className={
                        categoria.sempreAtivo
                          ? "rounded-full bg-brass/15 px-3 py-1 text-[10px] font-medium tracking-[0.15em] text-brass uppercase"
                          : "rounded-full bg-accent px-3 py-1 text-[10px] font-medium tracking-[0.15em] text-foreground/70 uppercase"
                      }
                    >
                      {categoria.sempreAtivo ? "Sempre ativo" : "Requer consentimento"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {categoria.descricao}
                  </p>
                  <div className="mt-5 space-y-2 border-t border-foreground/10 pt-4">
                    {categoria.exemplos.map((exemplo) => (
                      <div
                        key={exemplo.nome}
                        className="flex flex-col gap-0.5 text-xs text-muted-foreground sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                      >
                        <span className="font-medium text-foreground/80">
                          {exemplo.nome}
                        </span>
                        <span className="sm:text-right">{exemplo.finalidade}</span>
                        <span className="shrink-0 text-foreground/50">
                          {exemplo.prazo}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-24 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-secondary/60 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-foreground/80">
              Você pode mudar sua escolha de cookies a qualquer momento.
            </p>
            <ManageCookiesButton className="shrink-0 rounded-full bg-brass px-5 py-2.5 text-xs font-medium text-brass-foreground transition hover:bg-brass/90" />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Você também pode gerenciar ou bloquear cookies diretamente nas
            configurações do seu navegador. Dúvidas sobre esta política:{" "}
            <a
              href={`mailto:${hotel.emails.recepcao}`}
              className="text-foreground underline underline-offset-2"
            >
              {hotel.emails.recepcao}
            </a>
            .
          </p>
        </Reveal>
      </section>
    </div>
  );
}
