const washes = [
  ["#d6ff3f", "#7f8cff"],
  ["#ffb199", "#d6ff3f"],
];

export function ProjectVisual({
  title,
  index,
  className = "",
}: {
  title: string;
  index: number;
  className?: string;
}) {
  const [a, b] = washes[index % washes.length];

  return (
    <div className={`relative overflow-hidden bg-ink text-paper ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 18% 82%, ${a}, transparent 42%), radial-gradient(circle at 82% 16%, ${b}, transparent 38%)`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-7 sm:p-8">
        <span className="eyebrow text-paper/80">0{index + 1}</span>
        <span className="max-w-[12ch] font-serif text-4xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-5xl">
          {title}
        </span>
      </div>
    </div>
  );
}
