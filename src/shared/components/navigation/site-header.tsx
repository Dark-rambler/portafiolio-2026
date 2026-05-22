"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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
  const navCount = siteConfig.navigation.length;

  const activeIndex = useMemo(
    () =>
      siteConfig.navigation.findIndex((item) => {
        if (item.href === "/") {
          return pathname === "/";
        }

        return pathname.startsWith(item.href);
      }),
    [pathname],
  );

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--brand-2)]/20 bg-[var(--overlay-bg)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src={siteConfig.avatar.src}
            alt={siteConfig.avatar.alt}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border-2 border-[var(--brand-2)]/50 object-cover shadow-[0_10px_24px_rgb(3_8_21_/_0.55)]"
            priority
          />
          <Link href="/" className="group space-y-1">
            <p className="text-base font-black leading-none tracking-tight text-foreground transition group-hover:text-[var(--brand)] sm:text-lg">
              {siteConfig.name}
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-xs">
              {siteConfig.role}
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <div className="glass-panel hidden rounded-full p-1 sm:block">
            <nav
              className="relative grid min-w-60 overflow-hidden rounded-full text-sm font-semibold text-muted"
              style={{ gridTemplateColumns: `repeat(${navCount}, minmax(0, 1fr))` }}
            >
              <span
                className="pointer-events-none absolute inset-y-0 left-0 rounded-full border border-[var(--brand)]/35 bg-[var(--panel-strong)] shadow-[0_6px_16px_rgb(3_10_24_/_0.45)] transition-transform duration-300 ease-out"
                style={{
                  width: `${100 / navCount}%`,
                  transform: `translateX(${Math.max(activeIndex, 0) * 100}%)`,
                  opacity: activeIndex >= 0 ? 1 : 0,
                }}
              />
              {siteConfig.navigation.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative z-10 rounded-full px-4 py-2 text-center transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-muted hover:text-[var(--brand)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="hidden rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-bold text-[var(--on-brand)] transition hover:bg-[#00b2db] sm:inline-flex sm:text-sm"
          >
            Contactame
          </a>
          <a
            href={siteConfig.cvFile}
            download
            className="hidden rounded-full border border-[var(--brand-2)]/45 bg-[var(--panel-soft)] px-4 py-2 text-xs font-bold text-[var(--brand-2)] transition hover:border-[var(--brand)] hover:text-[var(--brand)] sm:inline-flex sm:text-sm"
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
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

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
                href={siteConfig.cvFile}
                download
                className="rounded-xl border border-[var(--brand-2)]/45 bg-[var(--panel-soft)] px-4 py-3 text-center text-sm font-bold text-[var(--brand-2)]"
              >
                Descargar CV
              </a>
            </div>
            <ThemeSwitcherMobile />
          </div>
        </div>
      ) : null}
    </header>
  );
}
