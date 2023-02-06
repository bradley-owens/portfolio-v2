import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
  const hStyle = { color: "#ffd60a" };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <motion.div
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
                delay: 0,
              },
            },
          }}
        >
          <h1>
            Hi I'm <span style={hStyle}>Bradley</span>
          </h1>
        </motion.div>
        <motion.div
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
          <h2>Frontend Developer</h2>
        </motion.div>
      </div>
      <div className={styles.x}>
        <p> background-circle</p>
      </div>
      <div className={styles.y}>
        <p>background-circle</p>
      </div>
    </div>
  );
};

export default Hero;
