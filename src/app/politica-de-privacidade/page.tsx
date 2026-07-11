import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { hotel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do Hotel Millian: como tratamos dados no site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/politica-de-privacidade" },
};

const atualizadoEm = "11 de julho de 2026";

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-3xl px-6 pt-8 pb-4 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Privacidade"
            title="Política de Privacidade"
            description={`Última atualização: ${atualizadoEm}`}
          />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pt-8 pb-24 sm:px-8">
        <Reveal>
          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
            <p>
              Esta política explica como o site millianhotel.com.br trata
              dados pessoais, em conformidade com a Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018 — LGPD). Ela cobre apenas a navegação
              neste site — reservas feitas por telefone, e-mail, presencialmente
              ou por meio do Booking.com seguem fluxos e políticas próprias,
              explicados abaixo.
            </p>

            <div className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">
                1. Quem trata os seus dados
              </h2>
              <p>
                O responsável pelo tratamento de dados deste site é{" "}
                {hotel.razaoSocial}, CNPJ {hotel.cnpj}, com sede em{" "}
                {hotel.endereco.completo}. Para qualquer solicitação
                relacionada aos seus dados, entre em contato pelo e-mail{" "}
                <a
                  href={`mailto:${hotel.emails.recepcao}`}
                  className="text-foreground underline underline-offset-2"
                >
                  {hotel.emails.recepcao}
                </a>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">
                2. Quais dados coletamos
              </h2>
              <p>
                Este site não possui formulário de reserva ou cadastro, e não
                coleta diretamente dados como nome, documento ou informações
                de pagamento. Os dados que coletamos são de navegação,
                obtidos automaticamente por meio de cookies e ferramentas de
                análise: endereço IP aproximado, tipo de dispositivo e
                navegador, páginas visitadas, tempo de navegação e origem do
                acesso (por exemplo, uma busca no Google).
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Se você clicar em um botão de WhatsApp, a conversa acontece
                  diretamente no WhatsApp, sob a política de privacidade da
                  Meta.
                </li>
                <li>
                  Se você for redirecionado ao Booking.com para reservar, a
                  coleta de dados da reserva (nome, documento, pagamento) é
                  feita pelo Booking.com — não temos acesso a esses dados
                  através do nosso site.
                </li>
                <li>
                  Reservas feitas por telefone, e-mail ou presencialmente são
                  tratadas diretamente pela recepção do hotel, fora do escopo
                  deste site.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">
                3. Para que usamos esses dados
              </h2>
              <p>
                Usamos os dados de navegação para entender como os visitantes
                usam o site, melhorar sua experiência e, quando houver
                campanhas de marketing ativas, medir sua efetividade. Mais
                detalhes sobre os cookies usados para isso estão na nossa{" "}
                <Link
                  href="/politica-de-cookies"
                  className="text-foreground underline underline-offset-2"
                >
                  Política de Cookies
                </Link>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">
                4. Com quem compartilhamos dados
              </h2>
              <p>
                Ferramentas de terceiros usadas no site podem processar dados
                de navegação, incluindo Google Analytics e Meta Pixel (e,
                futuramente, Google Ads, caso venhamos a rodar campanhas
                pagas). Essas empresas podem transferir dados para servidores
                fora do Brasil, sob suas próprias políticas de privacidade e
                salvaguardas. O Booking.com, quando usado para reservas, é
                uma plataforma independente com sua própria política de
                privacidade.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">
                5. Base legal
              </h2>
              <p>
                Tratamos dados de navegação com base no seu consentimento
                (para cookies de análise e marketing, conforme escolha feita
                no banner de cookies do site) e no legítimo interesse do
                hotel em manter o funcionamento básico e seguro do site
                (art. 7º da LGPD).
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">
                6. Seus direitos
              </h2>
              <p>
                Conforme o art. 18 da LGPD, você pode solicitar a qualquer
                momento: confirmação da existência de tratamento, acesso aos
                dados, correção de dados incompletos ou desatualizados,
                anonimização ou eliminação de dados desnecessários,
                portabilidade, informação sobre com quem compartilhamos seus
                dados, e revogação do consentimento. Para exercer qualquer
                desses direitos, escreva para{" "}
                <a
                  href={`mailto:${hotel.emails.recepcao}`}
                  className="text-foreground underline underline-offset-2"
                >
                  {hotel.emails.recepcao}
                </a>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">
                7. Segurança e retenção
              </h2>
              <p>
                Adotamos medidas técnicas razoáveis para proteger os dados
                tratados neste site. Os dados de navegação são mantidos pelo
                tempo indicado na nossa Política de Cookies, ou até que você
                revogue o consentimento.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">
                8. Alterações desta política
              </h2>
              <p>
                Podemos atualizar esta política periodicamente. A data no
                topo desta página indica a versão mais recente.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
