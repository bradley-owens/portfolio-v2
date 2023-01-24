import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.links}>
        <p className={styles.link}>Home</p>
        <p className={styles.link}>About</p>
      </div>
      <h3>Bradley Owens</h3>
      <div className={styles.links}>
        <p className={styles.link}>Projects</p>
        <p className={styles.link}>Contact</p>
      </div>
    </div>
  );
};

export default Navigation;
