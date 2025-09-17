import type { JSX } from "react";

type PostId = `post-${1 | 2 | 3 | 4 | 5}`;

type GalleryItem = {
  id: PostId;
  imgSrc: string;
  imgAlt: string;
  title: string;
  author: string;
  place: string;
  rank: 1 | 2 | 3 | 4 | 5;
  featured?: boolean;
  likesText: string; 
};

const GALLERY: ReadonlyArray<GalleryItem> = [
  {
    id: "post-1",
    imgSrc: "/images/sahara.jpg",
    imgAlt: "Sahara dunes at sunset",
    title: "Sahara sunset",
    author: "@Mai",
    place: "Morocco",
    rank: 1,
    featured: true,
    likesText: "❤️ 1.2k likes",
  },
  {
    id: "post-2",
    imgSrc: "/images/emerald lake.jpg",
    imgAlt: "Emerald lake in Banff",
    title: "Emerald mirror",
    author: "@Santi",
    place: "Banff",
    rank: 2,
    likesText: "❤️ 980",
  },
  {
    id: "post-3",
    imgSrc: "/images/uyuni.jpg",
    imgAlt: "Uyuni salt flats reflections",
    title: "Uyuni reflections",
    author: "@Juan",
    place: "Bolivia",
    rank: 3,
    likesText: "❤️ 870",
  },
  {
    id: "post-4",
    imgSrc: "/images/fjords.jpg",
    imgAlt: "Norwegian fjords viewpoint",
    title: "Fjord ridge",
    author: "@Rickyzdv",
    place: "Norway",
    rank: 4,
    likesText: "❤️ 760",
  },
  {
    id: "post-5",
    imgSrc: "/images/waterfall.jpg",
    imgAlt: "Waterfall in Chiapas",
    title: "Selva & falls",
    author: "@Lau",
    place: "Chiapas, MX",
    rank: 5,
    likesText: "❤️ 650",
  },
] as const;

function Community(): JSX.Element {
  return (
    <section id="community" className="section">
      <div className="container">
        <h2>Community</h2>
        <p className="section-text">Top 5 trending photos from recent posts.</p>

        {/* Galería */}
        <ul className="gallery">
          {GALLERY.map((p) => (
            <li
              key={p.id}
              className={`photo-card ${p.featured ? "featured" : ""}`}
            >
              <a href={`#${p.id}`}>
                <img src={p.imgSrc} alt={p.imgAlt} />
                <span className="p-badge">
                  {p.rank === 1 ? "🔥 Trending #1" : `#${p.rank}`}
                </span>
                <div className="p-overlay">
                  <h4>{p.title}</h4>
                  <p>
                    by {p.author} · {p.place}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* Lightboxes (generadas desde el mismo arreglo para mantener consistencia) */}
        {GALLERY.map((p) => (
          <div id={p.id} className="lightbox" key={`lb-${p.id}`}>
            <a className="lb-close" href="#community" aria-label="Close">
              ✕
            </a>
            <img src={p.imgSrc} alt={p.imgAlt} />
            <div className="lb-caption">
              <h3>{p.title}</h3>
              <p>
                by {p.author} · {p.place} · {p.likesText}
              </p>
              {/* Nota descriptiva simple por defecto */}
              <p>
                Travel tip: check weather and light conditions; early/late hours
                give the best shots.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Community;
