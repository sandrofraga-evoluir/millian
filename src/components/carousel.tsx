"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselImage = { src: string; alt: string };

export function Carousel({
  images,
  className,
  priority,
}: {
  images: readonly CarouselImage[];
  className?: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function go(delta: number) {
    setDirection(delta);
    setIndex((i) => (i + delta + images.length) % images.length);
  }

  const current = images[index];

  return (
    <div className="w-full">
      <div
        className={cn(
          "relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-foreground/5 p-2 ring-1 ring-foreground/5",
          className
        )}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current.src}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority={priority && index === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Foto anterior"
                className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-card/80 text-foreground shadow-md backdrop-blur transition hover:bg-card"
              >
                <ChevronLeft className="size-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próxima foto"
                className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-card/80 text-foreground shadow-md backdrop-blur transition hover:bg-card"
              >
                <ChevronRight className="size-4" strokeWidth={1.5} />
              </button>
              <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-1.5">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Ver foto ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full bg-white/60 shadow-sm transition-all",
                      i === index ? "w-5 bg-white" : "w-1.5"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
