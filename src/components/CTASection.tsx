import { useState, FormEvent } from "react";
import { useInView } from "@/hooks/useInView";
import { toast } from "sonner";

const CTASection = () => {
  const { ref, isVisible } = useInView();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for celebrating with King Kohli! 🏏");
    setName("");
    setMessage("");
  };

  return (
    <section className="py-24 md:py-32 bg-background relative" ref={ref}>
      <div
        className={`container max-w-2xl mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
          Join the Tribute
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Celebrate the King
        </h2>
        <div className="section-divider mb-8" />
        <p className="text-muted-foreground mb-10">
          Leave a message honoring the legacy of Virat Kohli.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label htmlFor="name" className="text-sm text-muted-foreground font-body mb-1.5 block">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-muted-foreground font-body mb-1.5 block">
              Your Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
              placeholder="Share your tribute to King Kohli..."
            />
          </div>
          <button
            type="submit"
            className="w-full gold-gradient-bg text-primary-foreground font-body font-semibold py-4 rounded-sm uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
          >
            Send Tribute
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
