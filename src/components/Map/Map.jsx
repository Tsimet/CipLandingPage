import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// const position = [43.23058734928281, 21.5900945099434]; // [Latitude, Longitude]

function MyFreeMap() {
  return (
    // <div style={{ height: "500px", width: "100%" }}>
    //   <MapContainer
    //     center={position}
    //     zoom={13}
    //     scrollWheelZoom={false}
    //     style={{ height: "100%" }}
    //   >
    //     <TileLayer
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />
    //     <Marker position={position}>
    //       <Popup>
    //         A free, open-source map! <br /> No API key needed.
    //       </Popup>
    //     </Marker>
    //   </MapContainer>
    // </div>
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.0041624829914!2d21.5875517758759!3d43.230372379676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755c21c2b824ee1%3A0x6c7c4c748e3f5328!2sCIP%20LTD%20PROKUPLJE!5e0!3m2!1ssr!2srs!4v1766152574337!5m2!1ssr!2srs"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MyFreeMap;

<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.0041624829914!2d21.5875517758759!3d43.230372379676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755c21c2b824ee1%3A0x6c7c4c748e3f5328!2sCIP%20LTD%20PROKUPLJE!5e0!3m2!1ssr!2srs!4v1766152574337!5m2!1ssr!2srs"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>;
