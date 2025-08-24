type Props = { title: string; description?: string };

export default function SectionHeader({ title, description }: Props) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">{title}</h2>
      {description && (
        <p className="mt-3 text-gray-dark dark:text-gray-medium max-w-2xl">{description}</p>
      )}
    </div>
  );
}