"use client";

import { useSyncExternalStore } from "react";
import { MessageCircle } from "lucide-react";
import { hotel } from "@/lib/content";
import { CONSENT_EVENT, getStoredConsent } from "@/lib/consent";
import { cn } from "@/lib/utils";

const MESSAGE = "Olá! Gostaria de saber mais sobre o Hotel Millian.";

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

export function WhatsappFloat() {
  const consentBannerVisible = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  const url = `${hotel.whatsapp.url}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className={cn(
        "fixed right-5 z-40 flex size-14 items-center justify-center rounded-full bg-brass text-brass-foreground shadow-[0_10px_30px_-8px_rgba(24,34,84,0.45)] transition-all duration-300 hover:scale-105 hover:bg-brass/90 active:scale-95 sm:right-6",
        consentBannerVisible ? "bottom-28 sm:bottom-24" : "bottom-5 sm:bottom-6"
      )}
    >
      <MessageCircle className="size-6" strokeWidth={1.5} />
    </a>
  );
}
