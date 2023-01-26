import styles from "./About.module.css";
import { motion } from "framer-motion";

const About = () => {
  const hStyle = { color: "#ffd60a" };
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.about}
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
          About <span style={hStyle}> me </span>
        </h2>
        <p>
          I'm a <span style={hStyle}> Frontend Web Developer </span> that
          designs and codes beautifully simple things, and I
          <span style={hStyle}> love </span>
          what I do.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
