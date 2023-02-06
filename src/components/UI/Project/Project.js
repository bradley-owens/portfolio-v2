import styles from "./Project.module.css";
import { motion } from "framer-motion";
import useDeviceSize from "../../Hooks/useDeviceSize";
import liveIcon from "../../../IMG/Icons/live.png";
import githubIcon from "../../../IMG/Icons/github.png";

const Project = ({
  imgSrc,
  type,
  title,
  technologies,
  info,
  live,
  github,
  animationDirectionLeft,
  animationDirectionRight,
  textAlign,
  flexDirection,
  alignDirection,
}) => {
  const [width] = useDeviceSize();
  const tabletFlex = { flexDirection: "column-reverse" };

  return (
    <div
      className={styles.container}
      style={width < 1093 ? tabletFlex : flexDirection}
    >
      <motion.div
        className={styles["img-link_container"]}
        style={width < 1093 ? tabletFlex : flexDirection}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            // x: -80,
            x: animationDirectionLeft,
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
        <div className={styles["button-container"]}>
          <a href={live} target="_blank">
            <img style={{ width: "2.5rem", height: "2.5rem" }} src={liveIcon} />
          </a>
          <a href={github} target="_blank">
            <img style={{ width: "3rem", height: "3rem" }} src={githubIcon} />
          </a>
        </div>
      </motion.div>
      <motion.div
        className={styles["project-info_container"]}
        style={{ alignItems: width < 1093 ? "center" : alignDirection }}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            // x: 80,
            x: animationDirectionRight,
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
        <h4>{type}</h4>
        <h3>{title}</h3>
        <div
          className={styles["project-technologies_container"]}
          style={{ justifyContent: width < 1093 ? "center" : alignDirection }}
        >
          {technologies.map((technology) => {
            return <p key={Math.random()}>{technology}</p>;
          })}
        </div>
        <div className={styles["info-background"]}>
          <div className={styles.info}>
            <p styles={textAlign}>{info}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
