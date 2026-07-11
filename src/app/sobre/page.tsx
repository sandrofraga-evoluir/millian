import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Carousel } from "@/components/carousel";
import { WhatsappButton } from "@/components/whatsapp-button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { historia, imagens, faq } from "@/lib/content";
import { getFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A história do Hotel Millian: fundado em 2008 em Jundiaí-SP por uma família no ramo hoteleiro há mais de 40 anos.",
  alternates: { canonical: "/sobre" },
};

const marcos = [
  { numero: "40+", legenda: "anos de tradição da família no ramo hoteleiro" },
  { numero: "2008", legenda: "ano de fundação, após reforma completa do prédio" },
  { numero: "100%", legenda: "gestão familiar, do início até hoje" },
  { numero: "1", legenda: "nome só: Millian, herdado da fazenda da família" },
];

export default function SobrePage() {
  const faqJsonLd = getFaqJsonLd();

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pt-8 pb-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Nossa história"
            title="Um nome que vem de longe."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>{historia.fundacao}</p>
            <p>{historia.origem}</p>
            <p>{historia.tradicao}</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Carousel images={imagens.sobre} className="aspect-[4/5]" priority />
        </Reveal>
      </section>

      <section className="bg-ink py-16">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <p className="font-heading text-2xl leading-snug text-white italic sm:text-3xl">
            &ldquo;{historia.frase}&rdquo;
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Em números" title="Uma trajetória de família." />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {marcos.map((marco, i) => (
            <Reveal key={marco.numero} delay={i * 0.08}>
              <div className="h-full rounded-[2rem] bg-foreground/5 p-1.5 ring-1 ring-foreground/5">
                <div className="flex h-full flex-col items-center gap-2 rounded-[calc(2rem-0.375rem)] bg-card p-8 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                  <span className="font-heading text-4xl text-primary">{marco.numero}</span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {marco.legenda}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Perguntas que todo hóspede faz."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-[2rem] bg-card p-6 ring-1 ring-foreground/5 sm:p-8">
            <Accordion>
              {faq.map((item) => (
                <AccordionItem key={item.pergunta}>
                  <AccordionTrigger className="text-base text-foreground">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-secondary/60 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-foreground/80">
              Não achou o que procurava? Fale direto com a recepção.
            </p>
            <WhatsappButton
              label="Chamar no WhatsApp"
              message="Olá! Tenho uma dúvida sobre o Hotel Millian."
              className="shrink-0"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
