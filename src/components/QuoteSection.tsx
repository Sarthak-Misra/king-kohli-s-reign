import { useInView } from "@/hooks/useInView";

const QuoteSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-display font-bold text-primary select-none">
          18
        </div>
      </div>

      <div
        className={`container max-w-3xl mx-auto px-4 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="text-primary text-6xl font-display mb-6">"</div>
        <blockquote className="font-display text-2xl md:text-4xl font-light text-foreground leading-relaxed italic mb-8">
          Self-belief and hard work will always earn you success. I have always believed
          in pushing myself beyond limits.
        </blockquote>
        <div className="section-divider mb-6" />
        <p className="text-primary font-body uppercase tracking-[0.2em] text-sm">
          — Virat Kohli
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
