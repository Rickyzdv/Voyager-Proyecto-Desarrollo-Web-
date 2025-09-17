import "./styles.css";
import type { JSX } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Trips from "./components/Trips";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Footer from "./components/Foooter";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Explore />
        <Trips />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default App;