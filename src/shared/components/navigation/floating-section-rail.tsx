"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/shared/config/site";

function isActiveSection(pathname: string, hash: string, href: string) {
  if (!href.startsWith("/#")) {
    return false;
  }

  const targetHash = href.slice(1);

  if (targetHash === "#inicio") {
    return pathname === "/" && (hash === "" || hash === "#inicio");
  }

  return pathname === "/" && hash === targetHash;
}

export function FloatingSectionRail() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isNearEdge, setIsNearEdge] = useState(false);
  const [isHoveringRail, setIsHoveringRail] = useState(false);

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

  useEffect(() => {
    function onMouseMove(event: MouseEvent) {
      setIsNearEdge(event.clientX <= 96);
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const isExpanded = isNearEdge || isHoveringRail;

  if (pathname !== "/") {
    return null;
  }

  return (
    <motion.aside
      className="pointer-events-none fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isExpanded ? 1 : 0.48, x: isExpanded ? 0 : -30 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      onMouseEnter={() => setIsHoveringRail(true)}
      onMouseLeave={() => setIsHoveringRail(false)}
    >
      <nav className="glass-panel pointer-events-auto relative rounded-2xl px-2 py-3">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 left-1/2 top-3 w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgb(111_123_255_/_0.0),rgb(111_123_255_/_0.42),rgb(111_123_255_/_0.0))]"
        />
        <ul className="relative z-10 flex flex-col items-center gap-2.5">
        {siteConfig.navigation.map((item) => {
          const isActive = isActiveSection(pathname, hash, item.href);

          return (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative"
            >
              <Link
                href={item.href}
                aria-label={item.label}
                className="group relative flex h-9 w-9 items-center justify-center rounded-full"
              >
                <span
                  className={`absolute h-7 w-7 rounded-full border transition ${
                    isActive
                      ? "border-[var(--brand)]/45 bg-[var(--brand)]/16"
                      : "border-[var(--brand-2)]/28 bg-[var(--panel-soft)]/55 group-hover:border-[var(--brand)]/40"
                  }`}
                />
                <span
                  className={`relative h-2.5 w-2.5 rounded-full transition ${
                    isActive
                      ? "bg-[var(--brand)] shadow-[0_0_14px_rgb(0_209_255_/_0.75)]"
                      : "bg-[var(--brand-2)]/80 group-hover:bg-[var(--brand)]"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] transition ${
                    isActive
                      ? "border-[var(--brand)]/42 bg-[var(--panel-strong)] text-foreground opacity-100"
                      : "border-[var(--brand-2)]/28 bg-[var(--panel-card)] text-muted opacity-0 translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </motion.li>
          );
        })}
        </ul>
      </nav>
    </motion.aside>
  );
}
