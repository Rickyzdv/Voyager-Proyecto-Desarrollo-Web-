import type { JSX } from "react";

type NavLink = {
  href: `#${string}`;
  label: string;
};

const NAV_LINKS: ReadonlyArray<NavLink> = [
  { href: "#explore", label: "Explore" },
  { href: "#trips", label: "Trips" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
] as const;

function Navbar(): JSX.Element {
  return (
    <header className="nav">
      <div className="container">
        <a href="#home" className="brand">Home</a>
        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
