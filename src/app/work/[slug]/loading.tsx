export default function ProjectLoading() {
  return (
    <div className="min-h-screen bg-paper px-5 pt-32 sm:px-8">
      <div className="mx-auto max-w-[76rem] animate-pulse">
        <div className="h-3 w-24 rounded-full bg-ink/10" />
        <div className="mt-8 h-16 w-2/3 rounded-2xl bg-ink/10" />
        <div className="mt-4 h-6 w-1/2 rounded-full bg-ink/10" />
        <div className="mt-10 aspect-[16/8] rounded-[2rem] bg-ink/80" />
      </div>
    </div>
  );
}
