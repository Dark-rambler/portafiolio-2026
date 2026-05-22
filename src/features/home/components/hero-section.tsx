"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/shared/config/site";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export function HeroSection() {
  return (
    <motion.section
      id="inicio"
      variants={container}
      initial="hidden"
      animate="show"
      className="glass-panel tech-detail shimmer-edge rounded-3xl px-7 py-10 sm:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
        <div className="space-y-6">

          <motion.h1
            variants={item}
            className="glow-text max-w-3xl text-4xl font-black tracking-tight text-foreground sm:text-6xl"
          >
            Desarrollo soluciones web modernas, rapidas y con enfoque en resultados.
          </motion.h1>

          <motion.p variants={item} className="max-w-2xl text-lg text-muted">
            Soy Edwin Ramiro Garcia Chambilla, ingeniero de software. Diseno y
            construyo productos digitales escalables, con codigo limpio, buena
            arquitectura y una experiencia visual que genera impacto.
          </motion.p>
        </div>

        <motion.aside
          variants={item}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.26, ease: "easeOut" }}
        >
          <div className="tech-detail relative overflow-hidden rounded-3xl border border-[var(--brand-2)]/28 bg-[linear-gradient(160deg,rgb(11_23_46_/_0.82),rgb(9_19_38_/_0.74))] p-3 shadow-[0_26px_46px_rgb(2_8_20_/_0.5)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--brand-2)]/28 bg-[var(--panel-soft)]">
              <Image
                src={siteConfig.avatar.src}
                alt={siteConfig.avatar.alt}
                fill
                sizes="(min-width: 1024px) 32vw, 80vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}
