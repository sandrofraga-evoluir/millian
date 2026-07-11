"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/nav";
import { hotel } from "@/lib/content";

const EASE = [0.32, 0.72, 0, 1] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div className="flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-border/70 bg-card/80 py-1.5 pr-1.5 pl-4 shadow-[0_8px_30px_-12px_rgba(24,34,84,0.25)] backdrop-blur-xl">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/logo.png"
              alt="Millian Hotel"
              width={92}
              height={44}
              className="h-7 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-[13px] font-medium whitespace-nowrap text-foreground/70 transition-colors duration-300 hover:text-foreground",
                    active && "bg-accent text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={hotel.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-full bg-primary py-1.5 pr-1.5 pl-4 text-[13px] font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.98] sm:flex"
            >
              Reservar
              <span className="flex size-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                <MessageCircle className="size-3.5" strokeWidth={1.5} />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
              className="flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent lg:hidden"
            >
              <Menu className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col bg-ink/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Image
                src="/logo.png"
                alt="Millian Hotel"
                width={92}
                height={44}
                className="h-7 w-auto brightness-0 invert"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="flex size-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-8 pb-24">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-white/10 py-3.5 font-heading text-2xl text-white/90 transition-colors hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.08 * navLinks.length,
                  ease: EASE,
                }}
                href={hotel.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-fit items-center gap-2 rounded-full bg-brass py-3 pr-3 pl-6 text-sm font-medium text-brass-foreground"
              >
                Reservar pelo WhatsApp
                <span className="flex size-8 items-center justify-center rounded-full bg-black/10">
                  <MessageCircle className="size-4" strokeWidth={1.5} />
                </span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
