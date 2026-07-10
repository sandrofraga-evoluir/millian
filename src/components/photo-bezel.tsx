import Image from "next/image";
import { cn } from "@/lib/utils";

export function PhotoBezel({
  src,
  alt,
  className,
  imgClassName,
  priority,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[2rem] bg-foreground/5 p-2 ring-1 ring-foreground/5",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
          className={cn("object-cover", imgClassName)}
        />
      </div>
    </div>
  );
}
