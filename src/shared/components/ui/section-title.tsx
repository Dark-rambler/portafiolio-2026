type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <header className="reveal-up space-y-3">
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--brand-3)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="max-w-2xl text-muted">{description}</p> : null}
    </header>
  );
}
