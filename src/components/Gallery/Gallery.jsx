import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <section className={styles.gallerySection} id="gallery">
      <button className={styles.gallery}>Our Gallery &rarr;</button>
      <button className={styles.certificates}>Our certificates &rarr;</button>
    </section>
  );
}

export default Gallery;
