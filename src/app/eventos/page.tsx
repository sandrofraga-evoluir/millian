import type { Metadata } from "next";
import { Users2, Briefcase, PartyPopper, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Carousel } from "@/components/carousel";
import { WhatsappButton } from "@/components/whatsapp-button";
import { eventos, pacotesLazer, imagens } from "@/lib/content";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Estrutura do Millian Hotel para reuniões corporativas e pequenos encontros em Jundiaí-SP: sala de reunião para até 10 pessoas e salão para até 60.",
  alternates: { canonical: "/eventos" },
};

export default function EventosPage() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pt-8 pb-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Eventos"
            title="Espaço sob medida para reuniões e encontros."
            description={eventos.intro}
          />
          <div className="mt-8">
            <WhatsappButton
              label="Consultar disponibilidade"
              message="Olá! Gostaria de saber mais sobre a estrutura para eventos do Millian Hotel."
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Carousel images={imagens.eventos} className="aspect-[4/5]" />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Espaços" title="Capacidade de cada ambiente." />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {eventos.espacos.map((espaco, i) => (
            <Reveal key={espaco.nome} delay={i * 0.1}>
              <div className="rounded-[2rem] bg-foreground/5 p-1.5 ring-1 ring-foreground/5">
                <div className="flex items-center gap-5 rounded-[calc(2rem-0.375rem)] bg-card p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass">
                    <Users2 className="size-6" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-3xl text-primary">{espaco.capacidade}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {espaco.nome}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-foreground/5 p-1.5 ring-1 ring-foreground/5">
              <div className="h-full rounded-[calc(2rem-0.375rem)] bg-card p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                <span className="flex size-11 items-center justify-center rounded-full bg-accent text-foreground/70">
                  <Briefcase className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-xl text-foreground">
                  Reuniões corporativas
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Sala de reunião equipada, ideal para encontros de trabalho e
                  pequenas apresentações.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-[2rem] bg-foreground/5 p-1.5 ring-1 ring-foreground/5">
              <div className="h-full rounded-[calc(2rem-0.375rem)] bg-card p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                <span className="flex size-11 items-center justify-center rounded-full bg-accent text-foreground/70">
                  <PartyPopper className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-xl text-foreground">
                  Confraternizações
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  O salão de café da manhã comporta até 60 pessoas para
                  encontros e celebrações.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
        <div className="rounded-[2.5rem] bg-secondary/60 p-10 sm:p-14">
          <Reveal className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full bg-brass/20 text-brass">
                <Sparkles className="size-5" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-xl text-foreground">
                  Pacotes de lazer também sob medida
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {pacotesLazer.intro}
                </p>
              </div>
            </div>
            <WhatsappButton
              label="Perguntar sobre pacotes"
              message="Olá! Gostaria de saber mais sobre os pacotes de lazer do Millian Hotel."
              variant="outline"
              className="shrink-0"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
