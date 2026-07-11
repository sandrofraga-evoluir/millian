import type { Metadata } from "next";
import { Mail, Phone, Building2, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsappButton } from "@/components/whatsapp-button";
import { empresas, hotel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Empresas",
  description:
    "Contas corporativas e operadoras: conheça as condições B2B do Hotel Millian, em Jundiaí-SP, e fale com nossa equipe comercial.",
  alternates: { canonical: "/empresas" },
};

export default function EmpresasPage() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-4xl px-6 pt-8 pb-16 text-center sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Para empresas"
            title="A escolha certa para hospedar sua equipe."
            description={empresas.intro}
            align="center"
          />
          <div className="mt-8 flex justify-center">
            <WhatsappButton
              label="Falar com o comercial"
              message="Olá! Represento uma empresa e gostaria de saber mais sobre as condições corporativas do Hotel Millian."
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {empresas.canais.map((canal, i) => {
            const Icon = i === 0 ? Mail : i === 1 ? Phone : Building2;
            return (
              <Reveal key={canal.label} delay={i * 0.08}>
                <div className="h-full rounded-[2rem] bg-foreground/5 p-1.5 ring-1 ring-foreground/5">
                  <div className="flex h-full flex-col items-center gap-3 rounded-[calc(2rem-0.375rem)] bg-card p-8 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                    <span className="flex size-12 items-center justify-center rounded-full bg-accent text-foreground/70">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <p className="text-sm font-medium text-foreground">
                      {canal.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {canal.valor}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
        <div className="rounded-[2.5rem] bg-ink p-10 text-white sm:p-14">
          <Reveal className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-brass">
                <ShieldCheck className="size-5" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-xl text-white">Tarifário corporativo</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/60">
                  {empresas.tarifario}
                </p>
              </div>
            </div>
            <a
              href={`tel:${hotel.telefones[0].replace(/\D/g, "")}`}
              className="shrink-0 text-sm font-medium text-brass underline-offset-4 hover:underline"
            >
              {hotel.telefones[0]}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
