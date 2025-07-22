import styles from "./NavButtons.module.scss";

type NavButtonsProps = {
  onPrev: () => void;
  onNext: () => void;
};

export const NavButtons = ({ onPrev, onNext }: NavButtonsProps) => {
  return (
    <div className={styles.navButtons}>
      <button className={styles.navButton} onClick={onPrev}>
        &lt;
      </button>

      <button className={styles.navButton} onClick={onNext}>
        &gt;
      </button>
    </div>
  );
};
