import { MessageCircle, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { hotel } from "@/lib/content";

export function WhatsappButton({
  label = "Reservar pelo WhatsApp",
  message,
  variant = "primary",
  icon: Icon = MessageCircle,
  className,
}: {
  label?: string;
  message?: string;
  variant?: "primary" | "brass" | "outline";
  icon?: LucideIcon;
  className?: string;
}) {
  const url = message
    ? `${hotel.whatsapp.url}?text=${encodeURIComponent(message)}`
    : hotel.whatsapp.url;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex w-fit items-center gap-3 rounded-full py-2 pr-2 pl-6 text-sm font-medium transition-all duration-300 active:scale-[0.98]",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "brass" && "bg-brass text-brass-foreground hover:bg-brass/90",
        variant === "outline" &&
          "border border-foreground/15 bg-transparent text-foreground hover:bg-foreground/5",
        className
      )}
    >
      {label}
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105",
          variant === "outline" ? "bg-foreground/10" : "bg-black/10"
        )}
      >
        <Icon className="size-4" strokeWidth={1.5} />
      </span>
    </a>
  );
}
