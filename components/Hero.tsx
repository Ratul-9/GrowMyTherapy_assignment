'use client';

export default function Hero() {
  return (
    <section
      className="relative h-[800px] rounded-2xl bg-cover bg-center overflow-hidden flex items-center justify-center text-center font-playfair mx-5 shadow-xl"
      style={{
        backgroundImage: "url(/assessment_gif.gif)",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="z-20 text-white px-5 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)]">
          Psychological Care for Change, Insight, and Well-Being
        </h1>
        <h2 className="text-xl md:text-2xl font-normal mb-10 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] text-white/90">
          Supporting mental wellness through evidence-based therapy and a safe, compassionate space to heal and grow.
        </h2>

        <button className="px-10 py-4 text-lg font-medium bg-[#6BA6A6] rounded-full text-white shadow-lg hover:bg-[#5a9292] hover:scale-105 transition-transform duration-200">
          Book a Free Consultation
        </button>
      </div>
    </section>
  );
}
