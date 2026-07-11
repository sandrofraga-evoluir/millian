import { PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

export function PetFriendlyBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-20 shrink-0 items-center justify-center rounded-full border border-dashed border-brass/40 p-1.5",
        className
      )}
    >
      <div className="flex size-full flex-col items-center justify-center gap-1 rounded-full bg-brass/10 text-brass ring-1 ring-brass/25">
        <PawPrint className="size-4" strokeWidth={1.5} />
        <span className="text-center text-[7px] leading-tight font-medium tracking-[0.12em] uppercase">
          Pet
          <br />
          Friendly
        </span>
      </div>
    </div>
  );
}
