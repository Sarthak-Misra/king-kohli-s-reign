import heroImage from "@/assets/hero-kohli.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Virat Kohli celebrating"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p
          className="text-primary font-body uppercase tracking-[0.3em] text-sm md:text-base mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          A Tribute to Greatness
        </p>
        <h1
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="gold-gradient-text">King Kohli</span>
          <br />
          <span className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
            The Legend of Modern Cricket
          </span>
        </h1>
        <p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          Passion. Discipline. Dominance. A journey that redefined cricket forever.
        </p>
        <a
          href="#bio"
          className="inline-block gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:opacity-90 transition-opacity opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.1s" }}
        >
          Explore His Legacy
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
