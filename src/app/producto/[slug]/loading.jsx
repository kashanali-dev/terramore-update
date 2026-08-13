export default function Loading() {
  return (
    <section className="relative w-full min-h-screen pt-32 bg-[#0a0f0a]">
      <div className="max-w-[min(85.5%,100rem)] mx-auto w-full">
        <div className="h-4 w-48 bg-white/10 rounded-full animate-pulse mb-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div className="aspect-square rounded-3xl bg-white/5 animate-pulse" />
          <div className="flex flex-col gap-5">
            <div className="h-10 w-3/4 bg-white/10 rounded-full animate-pulse" />
            <div className="h-4 w-1/2 bg-white/10 rounded-full animate-pulse" />
            <div className="h-14 w-40 bg-white/10 rounded-full animate-pulse" />
            <div className="h-24 w-full bg-white/5 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}