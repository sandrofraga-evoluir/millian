"use client";

import { reopenConsentPrompt } from "@/lib/consent";

export function ManageCookiesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={reopenConsentPrompt} className={className}>
      Gerenciar cookies
    </button>
  );
}
