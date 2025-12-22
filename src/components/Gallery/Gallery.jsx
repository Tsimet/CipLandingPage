import styles from "./Gallery.module.css";

function Gallery({ onSelectGallery }) {
  return (
    <section className={styles.gallerySection} id="gallery">
      <button
        onClick={() => onSelectGallery("pictures")}
        className={styles.gallery}
      >
        Our Gallery &rarr;
      </button>
      <button
        onClick={() => onSelectGallery("certificates")}
        className={styles.certificates}
      >
        Our certificates &rarr;
      </button>
    </section>
  );
}

export default Gallery;
