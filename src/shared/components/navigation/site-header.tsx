"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/shared/config/site";
import {
  ThemeSwitcher,
  ThemeSwitcherMobile,
} from "@/shared/components/theme/theme-switcher";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    function syncHash() {
      setHash(window.location.hash);
    }

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, [pathname]);

  function isActiveHref(href: string) {
    if (href.startsWith("/#")) {
      const targetHash = href.slice(1);

      if (targetHash === "#inicio") {
        return pathname === "/" && (hash === "" || hash === "#inicio");
      }

      return pathname === "/" && hash === targetHash;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--brand-2)]/20 bg-[var(--overlay-bg)] backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/#inicio"
          className="text-sm font-black uppercase tracking-[0.11em] text-foreground transition hover:text-[var(--brand)] sm:text-base"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="hidden rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-bold text-[var(--on-brand)] transition hover:bg-[#00b2db] md:inline-flex"
          >
            Contactame
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[var(--brand-2)]/45 bg-[var(--panel-soft)] px-4 py-2 text-xs font-bold text-[var(--brand-2)] transition hover:border-[var(--brand)] hover:text-[var(--brand)] md:inline-flex"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.cvFile}
            download
            className="hidden rounded-full border border-[var(--brand-2)]/45 bg-[var(--panel-soft)] px-4 py-2 text-xs font-bold text-[var(--brand-2)] transition hover:border-[var(--brand)] hover:text-[var(--brand)] lg:inline-flex"
          >
            Descargar CV
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="glass-panel inline-flex h-10 w-10 flex-col items-center justify-center rounded-xl sm:hidden"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`mt-1 h-0.5 w-5 rounded-full bg-foreground transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`mt-1 h-0.5 w-5 rounded-full bg-foreground transition ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="mx-auto w-full max-w-5xl px-6 pb-4 sm:hidden">
          <div className="glass-panel reveal-up space-y-3 rounded-2xl p-3">
            <nav className="grid gap-2 text-sm font-semibold text-muted">
              {siteConfig.navigation.map((item) => {
                const isActive = isActiveHref(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 transition ${
                      isActive
                        ? "bg-[var(--panel-strong)] text-white shadow-[0_6px_16px_rgb(3_10_24_/_0.45)]"
                        : "hover:bg-[var(--panel-soft)] hover:text-[var(--brand)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="grid gap-2">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="rounded-xl bg-[var(--brand)] px-4 py-3 text-center text-sm font-bold text-[var(--on-brand)]"
              >
                Contactame
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[var(--brand-2)]/45 bg-[var(--panel-soft)] px-4 py-3 text-center text-sm font-bold text-[var(--brand-2)]"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.cvFile}
                download
                className="rounded-xl border border-[var(--brand-2)]/45 bg-[var(--panel-soft)] px-4 py-3 text-center text-sm font-bold text-[var(--brand-2)]"
              >
                Descargar portafolio
              </a>
            </div>
            <ThemeSwitcherMobile />
          </div>
        </div>
      ) : null}
    </header>
  );
}
