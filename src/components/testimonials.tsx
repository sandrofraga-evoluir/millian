import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { avaliacoes, depoimentos } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <SectionHeading
            eyebrow="Avaliações"
            title="O que dizem os hóspedes."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex items-center gap-3 rounded-2xl bg-secondary/60 px-5 py-3.5">
            <div className="flex items-center gap-1 text-brass">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-4"
                  strokeWidth={1.5}
                  fill={i < Math.round(avaliacoes.notaGeral) ? "currentColor" : "none"}
                />
              ))}
            </div>
            <span className="text-sm text-foreground/80">
              {avaliacoes.notaGeral.toFixed(1)} no {avaliacoes.fonte} ·{" "}
              {avaliacoes.totalAvaliacoes} avaliações
            </span>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {depoimentos.map((dep, i) => (
          <Reveal key={dep.autor} delay={i * 0.08}>
            <div className="h-full rounded-[2rem] bg-foreground/5 p-1.5 ring-1 ring-foreground/5">
              <div className="flex h-full flex-col gap-4 rounded-[calc(2rem-0.375rem)] bg-card p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                <Quote className="size-5 text-brass" strokeWidth={1.5} />
                <p className="text-sm leading-relaxed text-foreground/80">
                  &ldquo;{dep.texto}&rdquo;
                </p>
                <p className="mt-auto text-xs text-muted-foreground">
                  {dep.autor} · {dep.fonte}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
