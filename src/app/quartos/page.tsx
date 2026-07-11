import type { Metadata } from "next";
import { Check, Users, BedDouble } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Carousel } from "@/components/carousel";
import { WhatsappButton } from "@/components/whatsapp-button";
import { quartos, comodidadesQuarto } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quartos",
  description:
    "Conheça os quartos Standard e Suíte do Millian Hotel, em Jundiaí-SP: ar-condicionado, TV, frigobar, Wi-Fi, cofre e secador de cabelo.",
  alternates: { canonical: "/quartos" },
};

export default function QuartosPage() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-6xl px-6 pt-8 pb-16 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Acomodações"
            title="Duas categorias, o mesmo cuidado em cada detalhe."
            description="Todos os quartos do Millian vêm com ar-condicionado, TV, frigobar, Wi-Fi, cofre, telefone e secador de cabelo."
          />
        </Reveal>
      </section>

      {quartos.map((quarto, i) => (
        <section
          key={quarto.slug}
          className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8"
        >
          <div
            className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <Carousel images={quarto.imagens} priority={i === 0} />
            </Reveal>
            <Reveal delay={0.1}>
              <span className="inline-flex rounded-full bg-accent px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase">
                Categoria {i + 1}
              </span>
              <h2 className="mt-4 text-4xl leading-[1.1] text-foreground sm:text-5xl">
                {quarto.nome}
              </h2>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users className="size-4 text-brass" strokeWidth={1.5} />
                  {quarto.capacidade}
                </span>
                <span className="flex items-center gap-1.5">
                  <BedDouble className="size-4 text-brass" strokeWidth={1.5} />
                  {quarto.camas}
                </span>
              </div>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                {quarto.diferencial}
              </p>
              <div className="mt-8">
                <WhatsappButton
                  label={`Reservar ${quarto.nome}`}
                  message={`Olá! Gostaria de reservar um quarto ${quarto.nome} no Millian Hotel.`}
                />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <div className="rounded-[2.5rem] bg-secondary/60 p-10 sm:p-14">
          <Reveal>
            <SectionHeading
              eyebrow="Comodidades"
              title="O que tem em todo quarto do Millian."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
              {comodidadesQuarto.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-foreground/80"
                >
                  <span className="flex size-6 items-center justify-center rounded-full bg-brass/20 text-brass">
                    <Check className="size-3.5" strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
