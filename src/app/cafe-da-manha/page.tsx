import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PhotoBezel } from "@/components/photo-bezel";
import { WhatsappButton } from "@/components/whatsapp-button";
import { cafeDaManha, imagens } from "@/lib/content";

export const metadata: Metadata = {
  title: "Café da manhã | Hotel Millian",
  description:
    "Café da manhã estilo continental, self-service, com comidas frescas preparadas no próprio Hotel Millian, em Jundiaí-SP.",
};

export default function CafeDaManhaPage() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pt-8 pb-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Café da manhã"
            title="Mesa farta, todo santo dia."
            description={cafeDaManha.intro}
          />
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-muted-foreground">
            {cafeDaManha.itens.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-brass" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <PhotoBezel
            src={imagens.cafe[0].src}
            alt={imagens.cafe[0].alt}
            className="aspect-[4/5] w-full"
            priority
          />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Galeria" title="Um gostinho do nosso café." />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {imagens.cafe.slice(1).map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06}>
              <PhotoBezel
                src={img.src}
                alt={img.alt}
                className={`w-full ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center px-6 text-center">
          <h2 className="text-3xl leading-[1.1] text-white sm:text-4xl">
            Alguma restrição alimentar? Fale com a recepção.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Nossa equipe está pronta para ajudar você a aproveitar o café da
            manhã do jeito que for melhor para você.
          </p>
          <div className="mt-8">
            <WhatsappButton variant="brass" label="Falar com a recepção" />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
