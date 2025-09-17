import type { JSX } from "react";

function Footer(): JSX.Element {
  const year: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Voyager</p>
      </div>
    </footer>
  );
}

export default Footer;
