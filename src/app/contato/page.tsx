import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsappButton } from "@/components/whatsapp-button";
import { hotel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Hotel Millian: telefone, WhatsApp, e-mail e endereço na Av. Nove de Julho, Jundiaí-SP. Recepção 24 horas.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const cards = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: hotel.whatsapp.display,
      href: `${hotel.whatsapp.url}?text=${encodeURIComponent(
        "Olá! Encontrei o Hotel Millian pelo site e gostaria de mais informações."
      )}`,
    },
    {
      icon: Phone,
      label: "Telefone",
      value: hotel.telefones[0],
      href: `tel:${hotel.telefones[0].replace(/\D/g, "")}`,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: (
        <>
          {hotel.emails.recepcao.split("@")[0]}
          <wbr />@{hotel.emails.recepcao.split("@")[1]}
        </>
      ),
      href: `mailto:${hotel.emails.recepcao}`,
    },
    {
      icon: Clock,
      label: "Horário",
      value: hotel.horarioRecepcao,
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-4xl px-6 pt-8 pb-12 text-center sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com a gente, a qualquer hora."
            description="Nossa recepção funciona 24 horas — resposta mais rápida pelo WhatsApp."
            align="center"
          />
          <div className="mt-8 flex justify-center">
            <WhatsappButton
              label="Chamar no WhatsApp"
              message="Olá! Gostaria de falar com a recepção do Hotel Millian."
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const content = (
              <div className="flex h-full flex-col items-center gap-3 rounded-[calc(2rem-0.375rem)] bg-card p-7 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                <span className="flex size-11 items-center justify-center rounded-full bg-accent text-foreground/70">
                  <Icon className="size-5" strokeWidth={1.5} />
                </span>
                <p className="text-[11px] font-medium tracking-[0.15em] text-muted-foreground uppercase">
                  {card.label}
                </p>
                <p className="w-full text-sm break-words text-foreground">{card.value}</p>
              </div>
            );
            return (
              <Reveal key={card.label} delay={i * 0.06}>
                <div className="h-full rounded-[2rem] bg-foreground/5 p-1.5 ring-1 ring-foreground/5">
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block h-full transition-opacity hover:opacity-80"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pt-4 pb-20 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 rounded-2xl bg-secondary/60 px-6 py-5 text-sm text-foreground/80">
            <MapPin className="size-4 shrink-0 text-brass" strokeWidth={1.5} />
            {hotel.endereco.completo}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
