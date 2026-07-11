export type ConsentChoice = "accepted" | "rejected";

export const CONSENT_STORAGE_KEY = "millian-cookie-consent";
export const CONSENT_EVENT = "millian-consent-change";

export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setStoredConsent(choice: ConsentChoice) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}

export function reopenConsentPrompt() {
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}
