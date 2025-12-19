function MyFreeMap() {
  return (
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
