import { useInView } from "@/hooks/useInView";
import battingImg from "@/assets/kohli-batting.jpg";
import trophyImg from "@/assets/kohli-trophy.jpg";
import teamImg from "@/assets/kohli-team.jpg";
import centuryImg from "@/assets/kohli-century.jpg";

const images = [
  { src: battingImg, alt: "Kohli playing a powerful shot", caption: "The Cover Drive King" },
  { src: trophyImg, alt: "Kohli with trophy", caption: "World Cup Glory" },
  { src: centuryImg, alt: "Kohli celebrating a century", caption: "Century Celebration" },
  { src: teamImg, alt: "Kohli with teammates", caption: "Brotherhood on the Field" },
];

const GallerySection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-24 md:py-32 navy-gradient-bg" ref={ref}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
            Iconic Moments
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div
              key={img.caption}
              className={`group relative overflow-hidden rounded-sm transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="font-display text-lg text-foreground">{img.caption}</p>
              </div>
              <div className="absolute inset-0 border border-primary/10 rounded-sm group-hover:border-primary/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
