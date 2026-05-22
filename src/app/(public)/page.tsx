import { AboutSection } from "@/features/about/components/about-section";
import { ContactCta } from "@/features/contact/components/contact-cta";
import { ExperienceTimeline } from "@/features/experience/components/experience-timeline";
import { RelevantProjectsSection } from "@/features/experience/components/relevant-projects-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { MeasurableResultsSection } from "@/features/results/components/measurable-results-section";
import { ServicesSection } from "@/features/services/components/services-section";
import { SkillsSection } from "@/features/skills/components/skills-section";

export default async function HomePage() {

  return (
    <div className="space-y-14">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MeasurableResultsSection />
      <SkillsSection />
      <RelevantProjectsSection />
      <ExperienceTimeline />
      <div className="reveal-up">
        <ContactCta />
      </div>
    </div>
  );
}
