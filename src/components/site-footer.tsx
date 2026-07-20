import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { hotel } from "@/lib/content";
import { navLinks } from "@/lib/nav";
import { ManageCookiesButton } from "@/components/manage-cookies-button";
import { PetFriendlyBadge } from "@/components/pet-friendly-badge";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-heading text-2xl text-white">Millian Hotel</p>
            <div className="mt-4 flex flex-wrap items-start gap-6">
              <p className="max-w-sm text-sm leading-relaxed text-white/60">
                Há 18 anos na principal avenida de Jundiaí, o Millian Hotel
                carrega o cuidado e a tradição de mais de quatro décadas no
                ramo hoteleiro.
              </p>
              <PetFriendlyBadge />
            </div>
          </div>

          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-brass uppercase">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-brass uppercase">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
                <span>{hotel.endereco.completo}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
                <span>{hotel.telefones.join(" · ")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
                <span>{hotel.emails.recepcao}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
                <span>{hotel.horarioRecepcao}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:gap-1">
            <p>
              {hotel.razaoSocial} · CNPJ {hotel.cnpj}
            </p>
            <p>
              © {new Date().getFullYear()} Millian Hotel. Todos os direitos
              reservados.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/politica-de-privacidade"
              className="transition-colors hover:text-white/70"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/politica-de-cookies"
              className="transition-colors hover:text-white/70"
            >
              Política de Cookies
            </Link>
            <ManageCookiesButton className="transition-colors hover:text-white/70" />
          </div>
        </div>
      </div>
    </footer>
  );
}
