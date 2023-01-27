import styles from "./One.module.css";
import imgSrc from "../../../IMG/moka-bar.png";
import { motion } from "framer-motion";

const One = () => {
  return (
    <div className={styles.container}>
      <motion.div
        // className={styles.about}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            x: -80,
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <img src={imgSrc}></img>
      </motion.div>
      <motion.div
        className={styles["project-info_container"]}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            x: 80,
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <h4>Freelance Project</h4>
        <h3>Moka Bar</h3>
        <div className={styles["project-technologies_container"]}>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>NextJS</p>
        </div>
        <div className={styles["info-background"]}>
          <div className={styles.info}>
            <p>
              Moka Bar is a website made for the moka bar cafe in Cairns QLD.
              This website was built with NextJS to optimize server side
              rendering and routes to the multiple pages it provides.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default One;
