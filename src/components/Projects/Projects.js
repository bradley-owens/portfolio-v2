import Project from "../UI/Project/Project";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

import project1ImgSrc from "../../IMG/moka-bar.png";
import project2ImgSrc from "../../IMG/gotya-plumbing.png";

const Projects = () => {
  const hStyle = { color: "#ffd60a" };
  const projectAlignLeft = { textAlign: "left" };
  const projectAlignRight = { textAlign: "right" };
  const projectFlexNormal = { flexDirection: "row" };
  const projectFlexReverse = { flexDirection: "row-reverse" };

  const projectInformation = [
    {
      imgSrc: project1ImgSrc,
      type: "Freelance Project",
      title: "Moka Bar",
      technologies: ["HTML", "CSS", "JavaScript", "NextJS"],
      info: " Moka Bar is a website made for the moka bar cafe in Cairns QLD.This website was built with NextJS to optimize server side rendering and routes to the multiple pages it provides.",
      animationDirectionLeft: -80,
      animationDirectionRight: 80,
      textAlign: projectAlignRight,
      flexDirection: projectFlexNormal,
    },
    {
      imgSrc: project2ImgSrc,
      type: "Freelance Project",
      title: "Gotya Plumbing Solutions",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS"],
      info: "Gotya Plumbing is a website made for the Gotya Plumbing business in QLD. This website was built with ReactJS as client only requested as a single page website. The website displays all services, reviews and contact information necessary for any client.",
      animationDirectionLeft: 80,
      animationDirectionRight: -80,
      textAlign: projectAlignLeft,
      flexDirection: projectFlexReverse,
    },
  ];

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

      {projectInformation.map((project) => {
        return (
          <Project
            key={Math.random()}
            imgSrc={project.imgSrc}
            type={project.type}
            title={project.title}
            technologies={project.technologies}
            info={project.info}
            animationDirectionLeft={project.animationDirectionLeft}
            animationDirectionRight={project.animationDirectionRight}
            textAlign={project.textAlign}
            flexDirection={project.flexDirection}
          />
        );
      })}
    </div>
  );
};

export default Projects;
