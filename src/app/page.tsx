import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Users,
  Coffee,
  PartyPopper,
  History,
  HeartHandshake,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PhotoBezel } from "@/components/photo-bezel";
import { Carousel } from "@/components/carousel";
import { WhatsappButton } from "@/components/whatsapp-button";
import { Testimonials } from "@/components/testimonials";
import {
  diferenciais,
  quartos,
  cafeDaManha,
  cafeDestaque,
  eventos,
  localizacao,
  imagens,
  hotel,
} from "@/lib/content";

const diferenciaisIcones = [History, MapPin, Coffee, HeartHandshake];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero — Editorial Split */}
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pt-8 pb-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pt-16">
        <Reveal>
          <span className="inline-flex rounded-full bg-accent px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase">
            Jundiaí · SP
          </span>
          <h1 className="mt-6 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            Hospitalidade de família na{" "}
            <span className="italic text-primary">Nove de Julho</span>.
          </h1>
          <p className="mt-4 text-sm font-medium text-brass">{hotel.slogan}</p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Um hotel de família no coração de Jundiaí, com recepção 24 horas,
            café da manhã caseiro e o cuidado de quem trata cada hóspede como
            visita de casa.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <WhatsappButton
              label="Reservar pelo WhatsApp"
              message="Olá! Gostaria de saber mais sobre hospedagem no Hotel Millian."
            />
            <Link
              href="/quartos"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Ver quartos
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Carousel images={imagens.recepcao} className="aspect-[4/5]" priority />
        </Reveal>
      </section>

      {/* Diferenciais */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Por que o Millian"
            title="Tradição de quatro décadas no ramo hoteleiro."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {diferenciais.map((item, i) => {
            const Icon = diferenciaisIcones[i];
            return (
              <Reveal key={item.titulo} delay={i * 0.08}>
                <div className="h-full rounded-[2rem] bg-foreground/5 p-1.5 ring-1 ring-foreground/5">
                  <div className="h-full rounded-[calc(2rem-0.375rem)] bg-card p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-brass/15 text-brass">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-5 text-xl text-foreground">{item.titulo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Quartos preview */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Acomodações"
            title="Quartos pensados para descansar de verdade."
            description="Duas categorias, ambas com ar-condicionado, TV, frigobar, Wi-Fi, cofre e secador de cabelo."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {quartos.map((quarto, i) => (
            <Reveal key={quarto.slug} delay={i * 0.1}>
              <Link href="/quartos" className="group block">
                <PhotoBezel
                  src={quarto.imagemHome.src}
                  alt={quarto.imagemHome.alt}
                  className="aspect-[3/4] w-full"
                  imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                />
                <div className="mt-5 flex items-start justify-between gap-4 px-1">
                  <div>
                    <h3 className="text-2xl text-foreground">{quarto.nome}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Users className="size-3.5" strokeWidth={1.5} />
                      {quarto.capacidade} · {quarto.camas}
                    </p>
                  </div>
                  <ArrowRight className="mt-2 size-5 shrink-0 text-foreground/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground" strokeWidth={1.5} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Café da manhã */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <Carousel images={cafeDestaque} className="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase">
              <Coffee className="size-3" strokeWidth={1.5} />
              Café da manhã
            </span>
            <h2 className="mt-4 text-4xl leading-[1.1] text-foreground sm:text-5xl">
              Mesa farta, todo santo dia.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Pães, frutas e frios preparados na cozinha do hotel, servidos
              todas as manhãs para começar o dia com calma.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {cafeDaManha.itens.slice(0, 6).map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-brass" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/cafe-da-manha"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Conhecer o café da manhã
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Eventos teaser */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <div className="rounded-[2.5rem] bg-secondary/60 p-10 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase">
                <PartyPopper className="size-3" strokeWidth={1.5} />
                Eventos
              </span>
              <h2 className="mt-4 text-4xl leading-[1.1] text-foreground sm:text-5xl">
                Espaço sob medida para reuniões e encontros.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Da reunião de trabalho à confraternização de fim de ano, o
                Millian monta a estrutura certa para o seu evento.
              </p>
              <Link
                href="/eventos"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Ver estrutura para eventos
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </Reveal>
            <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
              {eventos.espacos.map((espaco) => (
                <div
                  key={espaco.nome}
                  className="rounded-3xl bg-card p-6 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]"
                >
                  <p className="text-3xl text-primary">{espaco.capacidade.split(" ")[1]}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{espaco.nome}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Localização teaser */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Localização"
            title="No coração de Jundiaí, perto de tudo."
            description="Na Av. Nove de Julho, a poucos passos do Jundiaí Shopping e a um pulo dos principais pontos da cidade."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            {localizacao.pontos.slice(0, 5).map((ponto) => (
              <div
                key={ponto.label}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80"
              >
                <MapPin className="size-3.5 text-brass" strokeWidth={1.5} />
                {ponto.label}
                <span className="text-muted-foreground">· {ponto.distancia}</span>
              </div>
            ))}
          </div>
          <Link
            href="/localizacao"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            Como chegar
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </section>

      <Testimonials />

      {/* CTA final */}
      <section className="bg-ink py-24">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
          <h2 className="text-4xl leading-[1.1] text-white sm:text-5xl">
            Pronto para se hospedar no Millian?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Fale com a nossa recepção pelo WhatsApp e garanta sua reserva —
            atendimento 24 horas.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <WhatsappButton
              variant="brass"
              label="Chamar no WhatsApp"
              message="Olá! Gostaria de fazer uma reserva no Hotel Millian."
            />
            <a
              href={hotel.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Ver no Booking.com
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
