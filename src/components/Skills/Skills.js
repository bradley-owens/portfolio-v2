import styles from "./Skills.module.css";
import { motion } from "framer-motion";

const Skills = () => {
  const hStyle = { color: "#ffd60a" };

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
  ];

  let time = 0.1;
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
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
              delay: 0.3,
            },
          },
        }}
      >
        <h2>
          A few of the <span style={hStyle}>languages</span> I speak
        </h2>
        <p>
          I specialise in <span style={hStyle}>JavaScript</span> and
          <span style={hStyle}> ReactJS </span> but have a passion for learning
          new technologies and wouldn't shy away from a challenge.
        </p>
      </motion.div>

      <main>
        <div className={styles["technology-container"]}>
          {technologies.map((item) => {
            time = time + 0.2;
            return (
              <motion.div
                className={styles.technology}
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
                      delay: time,
                    },
                  },
                }}
              >
                <p>{item}</p>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Skills;
