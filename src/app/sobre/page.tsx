import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Carousel } from "@/components/carousel";
import { historia, imagens } from "@/lib/content";

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
  return (
    <div className="flex flex-col">
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
    </div>
  );
}
