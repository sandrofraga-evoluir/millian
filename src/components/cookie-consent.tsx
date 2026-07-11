"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import {
  CONSENT_EVENT,
  getStoredConsent,
  setStoredConsent,
} from "@/lib/consent";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

function getSnapshot() {
  return getStoredConsent() === null;
}

function getServerSnapshot() {
  return false;
}

export function CookieConsent() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-[1.5rem] bg-ink/95 p-5 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-brass/20 text-brass">
            <Cookie className="size-4" strokeWidth={1.5} />
          </span>
          <p className="text-xs leading-relaxed text-white/70 sm:text-sm">
            Usamos cookies para melhorar sua experiência e entender como você
            usa o site.{" "}
            <Link
              href="/politica-de-cookies"
              className="underline underline-offset-2 hover:text-white"
            >
              Saiba mais
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-2 pl-12 sm:pl-0">
          <button
            type="button"
            onClick={() => setStoredConsent("rejected")}
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium whitespace-nowrap text-white/80 transition hover:bg-white/10"
          >
            Somente essenciais
          </button>
          <button
            type="button"
            onClick={() => setStoredConsent("accepted")}
            className="rounded-full bg-brass px-4 py-2 text-xs font-medium whitespace-nowrap text-brass-foreground transition hover:bg-brass/90"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
