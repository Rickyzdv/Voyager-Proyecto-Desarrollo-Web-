import type { JSX } from "react";

type Chip = "All" | "Hike" | "Nature" | "Scenic" | "Budget";
const CHIPS: ReadonlyArray<Chip> = ["All", "Hike", "Nature", "Scenic", "Budget"] as const;

type ItineraryCard = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  rank: 1 | 2 | 3;
  meta: string;        
  tags: string[];      
  href: `#${string}`; 
};

const TOP_ITINERARIES: ReadonlyArray<ItineraryCard> = [
  {
    imgSrc: "/images/torres del paine.jpg",
    imgAlt: "W Trek, Torres del Paine",
    title: "W Trek — Torres del Paine",
    rank: 1,
    meta: "🇨🇱 Patagonia · 5 days · $$$",
    tags: ["Hike", "Nature", "Scenic"],
    href: "#it-wtrek",
  },
  {
    imgSrc: "/images/machupichu.jpg",
    imgAlt: "Inca Trail to Machu Picchu",
    title: "Inca Trail to Machu Picchu",
    rank: 2,
    meta: "🇵🇪 Andes · 4 days · $$",
    tags: ["Hike", "Culture", "Camping"],
    href: "#it-inca",
  },
  {
    imgSrc: "/images/trolltunga.jpg",
    imgAlt: "Trolltunga Hike",
    title: "Trolltunga day hike",
    rank: 3,
    meta: "🇳🇴 Norway · 1 day · $",
    tags: ["Hike", "Alpine", "Viewpoints"],
    href: "#it-trolltunga",
  },
] as const;

function Trips(): JSX.Element {
  return (
    <section id="trips" className="section alt">
      <div className="container">
        <h2>Recommended trips</h2>
        <p className="section-text">
          Curated by the community. Top itineraries so far.
        </p>

        <div className="trips-head">
          <h3 className="subhead">Top itineraries</h3>
          <div className="chips">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className={`chip ${chip === "All" ? "active" : ""}`}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* GRID TOP 3 */}
        <ul className="trip-grid">
          {TOP_ITINERARIES.map((it) => (
            <li className="itinerary-card" key={it.title}>
              <img
                src={it.imgSrc}
                alt={it.imgAlt}
                className="it-img"
              />
              <div className="it-body">
                <div className="it-row">
                  <h4 className="it-title">{it.title}</h4>
                  <span className="badge">#{it.rank}</span>
                </div>
                <p className="it-meta">{it.meta}</p>
                <p className="it-tags">
                  {it.tags.map((t) => <span key={t}>{t}</span>)}
                </p>
                <a className="btn small" href={it.href}>View itinerary</a>
              </div>
            </li>
          ))}
        </ul>

        {/* PANELS (se mantienen tal cual, solo HTML) */}
        <section id="it-wtrek" className="itinerary-panel">
          <div className="it-panel-inner">
            <div className="it-panel-head">
              <h3>W Trek — Torres del Paine (5 days)</h3>
              <a className="close-link" href="#trips" aria-label="Close">✕</a>
            </div>
            <p className="it-panel-meta">
              Refugios o camping · Mejor época: Nov-Mar · Nivel: Intermedio
            </p>
            <ol className="day-list">
              <li><strong>Day 1:</strong> Puerto Natales → Paine Grande · Mirador Grey (opcional).</li>
              <li><strong>Day 2:</strong> Valle Francés · Mirador Británico.</li>
              <li><strong>Day 3:</strong> Paine Grande → Refugio Cuernos/Francés.</li>
              <li><strong>Day 4:</strong> Ascenso a Base Torres.</li>
              <li><strong>Day 5:</strong> Amanecer en Base Torres · retorno.</li>
            </ol>
            <p className="it-panel-notes">
              Consejos: reserva con antelación refugios/camping, clima cambiante, corta vientos obligatorio.
            </p>
          </div>
        </section>

        <section id="it-inca" className="itinerary-panel">
          <div className="it-panel-inner">
            <div className="it-panel-head">
              <h3>Inca Trail to Machu Picchu (4 days)</h3>
              <a className="close-link" href="#trips">✕</a>
            </div>
            <p className="it-panel-meta">
              Permiso requerido · Altitud: hasta 4,200 m · Nivel: Intermedio
            </p>
            <ol className="day-list">
              <li><strong>Day 1:</strong> Km82 → Wayllabamba.</li>
              <li><strong>Day 2:</strong> Paso Warmiwañusca · Pacaymayo.</li>
              <li><strong>Day 3:</strong> Ruinas (Runkurakay, Sayacmarca) · Wiñay Wayna.</li>
              <li><strong>Day 4:</strong> Inti Punku (Puerta del Sol) → Machu Picchu.</li>
            </ol>
            <p className="it-panel-notes">
              Consejos: aclimatación previa en Cusco, bastones con puntas protegidas, impermeable ligero.
            </p>
          </div>
        </section>

        <section id="it-trolltunga" className="itinerary-panel">
          <div className="it-panel-inner">
            <div className="it-panel-head">
              <h3>Trolltunga day hike (1 day)</h3>
              <a className="close-link" href="#trips">✕</a>
            </div>
            <p className="it-panel-meta">
              28 km ida/vuelta aprox. · Desnivel 1,200 m · Nivel: Exigente
            </p>
            <ol className="day-list">
              <li><strong>Day 1:</strong> Salida temprano desde P2 Skjeggedal · cumbre y regreso.</li>
            </ol>
            <p className="it-panel-notes">
              Consejos: verano europeo, linterna/frontal, checar meteo, agua y snacks suficientes.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Trips;
