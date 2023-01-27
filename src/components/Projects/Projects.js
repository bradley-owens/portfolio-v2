import One from "./One/One";
import styles from "./Projects.module.css";
import { motion } from "framer-motion";

const Projects = () => {
  const hStyle = { color: "#ffd60a" };
  return (
    <div className={styles["projects-container"]}>
      <motion.div
        className={styles.title}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            y: 40,
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            y: -40,
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <h2>
          Check out some of my <span style={hStyle}>work</span>
        </h2>
      </motion.div>
      <One />
    </div>
  );
};

export default Projects;
