import { useInView } from "@/hooks/useInView";
import { Trophy, Star, Award, Crown, Target, Flame } from "lucide-react";

const records = [
  { icon: Trophy, title: "Most Centuries in Chases", desc: "Record holder for most ODI centuries while chasing" },
  { icon: Crown, title: "Fastest to 8,000 ODI Runs", desc: "Reached the milestone in just 175 innings" },
  { icon: Star, title: "ICC Player of the Decade", desc: "Named ICC Male Player of the Decade (2011–2020)" },
  { icon: Award, title: "Rajiv Gandhi Khel Ratna", desc: "India's highest sporting honour, awarded in 2018" },
  { icon: Target, title: "Most Runs in IPL History", desc: "All-time leading run-scorer in the Indian Premier League" },
  { icon: Flame, title: "71st Century", desc: "Ended the century drought with an iconic 71st international ton" },
];

const RecordsSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-24 md:py-32 navy-gradient-bg" ref={ref}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
            Unmatched Excellence
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Records & Awards
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.map((record, i) => (
            <div
              key={record.title}
              className={`glass-card rounded-sm p-6 hover-gold-glow group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <record.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{record.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{record.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecordsSection;
