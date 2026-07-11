import type { Metadata } from "next";
import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { hotel, localizacao } from "@/lib/content";

export const metadata: Metadata = {
  title: "Localização",
  description:
    "O Millian Hotel fica na Av. Nove de Julho, em Jundiaí-SP, a 400m do Jundiaí Shopping e perto dos principais parques da região.",
  alternates: { canonical: "/localizacao" },
};

export default function LocalizacaoPage() {
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    hotel.endereco.mapsQuery
  )}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    hotel.endereco.mapsQuery
  )}`;

  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-6xl px-6 pt-8 pb-16 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Localização"
            title="No coração de Jundiaí, perto de tudo."
            description={localizacao.intro}
          />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] ring-1 ring-foreground/5">
            <iframe
              title="Mapa do Millian Hotel"
              src={mapsUrl}
              className="h-[420px] w-full grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="text-2xl text-foreground">Endereço</h3>
            <p className="mt-3 flex items-start gap-2.5 text-base text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass" strokeWidth={1.5} />
              {hotel.endereco.completo}
            </p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary py-2.5 pr-2.5 pl-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Traçar rota
              <span className="flex size-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                <Navigation className="size-3.5" strokeWidth={1.5} />
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-2xl text-foreground">O que há por perto</h3>
            <ul className="mt-4 space-y-3">
              {localizacao.pontos.map((ponto) => (
                <li
                  key={ponto.label}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-secondary/60 px-5 py-3.5 text-sm"
                >
                  <span className="text-foreground/80">{ponto.label}</span>
                  <span className="shrink-0 text-muted-foreground">
                    {ponto.distancia}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
