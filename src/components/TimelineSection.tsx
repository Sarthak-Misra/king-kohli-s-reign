import { useInView } from "@/hooks/useInView";

const events = [
  { year: "2008", title: "U19 World Cup Champion", desc: "Won the ICC Under-19 Cricket World Cup as captain, announcing himself on the world stage." },
  { year: "2008", title: "International Debut", desc: "Made ODI debut against Sri Lanka at 19 years old." },
  { year: "2011", title: "ODI World Cup Winner", desc: "Won the ICC Cricket World Cup with India, ending a 28-year wait for the trophy." },
  { year: "2013", title: "Champions Trophy Winner", desc: "Won the ICC Champions Trophy with India, cementing his place among the greats." },
  { year: "2013", title: "No. 1 ODI Batsman", desc: "Reached the top of ICC ODI batting rankings for the first time." },
  { year: "2014", title: "Test Captaincy", desc: "Appointed captain of the Indian Test cricket team." },
  { year: "2017", title: "ODI & Test Captain", desc: "Led India to the No. 1 ranking in both Tests and ODIs." },
  { year: "2018", title: "ICC Player of the Year", desc: "Won the prestigious Sir Garfield Sobers Trophy." },
  { year: "2023", title: "ODI World Cup Record", desc: "Broke Sachin's record for most ODI World Cup centuries." },
  { year: "2024", title: "T20 World Cup Champion", desc: "Lifted the T20 World Cup trophy with India." },
  { year: "2025", title: "Champions Trophy Winner", desc: "Won the ICC Champions Trophy again, adding another ICC title to his illustrious career." },
];

const TimelineSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
            Journey of a Champion
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Career Timeline
          </h2>
          <div className="section-divider" />
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          {events.map((event, i) => (
            <div
              key={event.year}
              className={`relative flex items-start mb-12 last:mb-0 md:justify-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`flex items-start gap-6 md:gap-0 w-full ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <span className="font-display text-2xl font-bold gold-gradient-text">{event.year}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{event.desc}</p>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full gold-gradient-bg border-2 border-background shadow-lg shadow-primary/30 md:mx-auto" />
                </div>

                <div className="md:w-1/2 md:hidden pl-6">
                  <span className="font-display text-xl font-bold gold-gradient-text">{event.year}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{event.desc}</p>
                </div>

                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pl-12" : "pr-12"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
