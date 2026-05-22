import { AboutSection } from "@/features/about/components/about-section";
import { ContactCta } from "@/features/contact/components/contact-cta";
import { ExperienceTimeline } from "@/features/experience/components/experience-timeline";
import { RelevantProjectsSection } from "@/features/experience/components/relevant-projects-section";
import { FeaturedProjectsSection } from "@/features/projects/components/featured-projects-section";
import { getProjects } from "@/features/projects/services/get-projects";
import { SkillsSection } from "@/features/skills/components/skills-section";
import { siteConfig } from "@/shared/config/site";

export default async function HomePage() {
  const featuredProjects = await getProjects({ featuredOnly: true });

  return (
    <div className="space-y-14">
      <section className="glass-panel shimmer-edge reveal-up space-y-6 rounded-3xl px-7 py-10 sm:px-10">
        <p className="inline-flex rounded-full border border-[var(--brand-3)]/35 bg-[var(--brand-3)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-3)]">
          Portafolio
        </p>
        <h1 className="glow-text max-w-3xl text-4xl font-black tracking-tight text-foreground sm:text-6xl">
          Desarrollo soluciones web modernas, rapidas y con enfoque en resultados.
        </h1>
        <p className="max-w-2xl text-lg text-muted">
          Soy Edwin Ramiro Garcia Chambilla, ingeniero de software. Diseno y
          construyo productos digitales escalables, con codigo limpio, buena
          arquitectura y una experiencia visual que genera impacto.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/projects"
            className="rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-bold text-[var(--on-brand)] transition hover:scale-[1.02] hover:bg-[#00b2db]"
          >
            Ver proyectos
          </a>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="rounded-full border border-[var(--brand-2)]/45 bg-[var(--panel-soft)] px-5 py-3 text-sm font-bold text-[var(--brand-2)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            Contactame
          </a>
        </div>
      </section>

      <div className="reveal-up delay-2">
        <FeaturedProjectsSection projects={featuredProjects} />
      </div>
      <AboutSection />
      <SkillsSection />
      <RelevantProjectsSection />
      <ExperienceTimeline />
      <div className="reveal-up">
        <ContactCta />
      </div>
    </div>
  );
}
