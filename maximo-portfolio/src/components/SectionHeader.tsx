type Props = { title: string; description?: string };

export default function SectionHeader({ title, description }: Props) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-3 text-foreground/80 max-w-2xl">{description}</p>
      )}
    </div>
  );
}