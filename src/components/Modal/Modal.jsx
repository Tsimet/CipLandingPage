import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className={styles.modal__backdrop} onClick={onClose}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close__btn} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal__root")
  );
}
