import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsappButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center sm:px-8">
      <Reveal className="flex flex-col items-center">
        <span className="font-heading text-8xl text-brass italic sm:text-9xl">
          404
        </span>
        <h1 className="mt-6 text-3xl leading-tight text-foreground sm:text-4xl">
          Essa página fez checkout mais cedo.
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          O endereço que você tentou acessar não existe ou não está mais
          disponível. Mas fica tranquilo — a recepção do Millian Hotel
          funciona 24 horas, prontos pra te ajudar a achar o caminho certo.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-primary py-2 pr-2 pl-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.98]"
          >
            Voltar para o início
            <span className="flex size-9 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </span>
          </Link>
          <WhatsappButton
            variant="outline"
            label="Falar com a recepção"
            message="Olá! Cheguei numa página que não existe no site do Millian Hotel e preciso de ajuda."
          />
        </div>
      </Reveal>
    </div>
  );
}
