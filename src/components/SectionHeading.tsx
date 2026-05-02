interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <div className={`mb-14 ${center ? "text-center mx-auto max-w-2xl" : ""} animate-fade-up`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
