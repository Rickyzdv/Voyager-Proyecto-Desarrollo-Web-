import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// --- Arreglo o estructura para los luagres ---
type Place = {
  id: number;
  name: string;
  country: string;
  coords: [number, number]; 
};

const PLACES: Place[] = [
  { id: 1, name: "Kyoto", country: "Japan",  coords: [35.0116, 135.7681] },
  { id: 2, name: "Tulum", country: "Mexico", coords: [20.2110, -87.4650] },
  { id: 3, name: "Paris", country: "France", coords: [48.8566, 2.3522] },
];

// --- Manejo de pines y pop ups ---
const defaultIcon = new L.Icon({
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).toString(),
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).toString(),
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).toString(),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Explore() {
  return (
    <section id="explore" className="section">
      <div className="container">
        <h2>Explore by map</h2>
        <p className="section-text">
          Move around the map and click a marker to open a community guide.
        </p>

        {/* Mapa interactivo */}
        <div className="map-frame">
          <MapContainer
            center={[25, 0]}     
            zoom={2}              
            style={{ height: 420, width: "100%" }}
            
          >
            {/* Capa base (OpenStreetMap) */}
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Marcadores desde el arreglo */}
            {PLACES.map((p) => (
              <Marker key={p.id} position={p.coords} icon={defaultIcon}>
                <Popup>
                  <strong>{p.name}</strong> — {p.country}
                  <br />
                  <a className="btn small" href="#community">View guide</a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* “Popular now” */}
        <h3 className="subhead mt-24">Popular now</h3>
        <ul className="strip">
          <li className="tile">
            <img src="/images/kyoto.jpg" alt="Kyoto" />
            <div>
              <h4>Kyoto</h4>
              <p>Japan · City</p>
            </div>
          </li>
          <li className="tile">
            <img src="/images/tulum1.jpg" alt="Tulum" />
            <div>
              <h4>Tulum</h4>
              <p>Mexico · Beach</p>
            </div>
          </li>
          <li className="tile">
            <img src="/images/paris.jpg" alt="Paris" />
            <div>
              <h4>Paris</h4>
              <p>France · City</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Explore;