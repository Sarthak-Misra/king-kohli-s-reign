import portraitImage from "@/assets/kohli-portrait.jpg";
import { useInView } from "@/hooks/useInView";

const stats = [
  { label: "International Matches", value: "500+" },
  { label: "Total Runs", value: "27,000+" },
  { label: "Centuries", value: "80+" },
  { label: "Average (ODI)", value: "58+" },
];

const BioSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="bio" className="py-24 md:py-32 navy-gradient-bg" ref={ref}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={portraitImage}
                alt="Virat Kohli portrait"
                loading="lazy"
                width={800}
                height={600}
                className="w-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 border border-primary/20 rounded-sm" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-sm" />
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
              The Man Behind the Legend
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Virat Kohli
            </h2>
            <div className="section-divider !mx-0 mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Born on November 5, 1988, in Delhi, Virat Kohli rose from the streets of
              Indian cricket to become one of the greatest batsmen the world has ever
              witnessed. His relentless hunger for runs, unmatched fitness standards, and
              fiery passion on the field set him apart from every generation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              From leading India to the U-19 World Cup triumph to becoming the backbone
              of Indian batting across all formats, Kohli's journey is nothing short of
              extraordinary.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-sm p-4 hover-gold-glow">
                  <p className="font-display text-2xl md:text-3xl font-bold gold-gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
