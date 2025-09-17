import type { JSX } from "react";

type ButtonLink = {
  href: `#${string}`;
  label: string;
  variant?: "solid" | "outline";
};

type HeroImage = {
  src: string;
  alt: string;
};

const HERO_BUTTONS: ReadonlyArray<ButtonLink> = [
  { href: "#explore", label: "Explore now", variant: "solid" },
  { href: "#community", label: "See community", variant: "outline" },
] as const;

const HERO_IMAGE: HeroImage = {
  src: "/images/mapamundo2b.jpg",
  alt: "Main travel image",
};

function Hero(): JSX.Element {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1 className="hero-title">Voyager</h1>
        <p className="hero-text">Discover, plan and share your trips.</p>

        <div className="hero-buttons">
          {HERO_BUTTONS.map((btn) => (
            <a
              key={btn.href}
              className={`btn${btn.variant === "outline" ? " outline" : ""}`}
              href={btn.href}
            >
              {btn.label}
            </a>
          ))}
        </div>

        <img
          className="hero-image"
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
        />
      </div>
    </section>
  );
}

export default Hero;
