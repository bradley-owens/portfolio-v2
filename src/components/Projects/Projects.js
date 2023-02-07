import Project from "../UI/Project/Project";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

import project1ImgSrc from "../../IMG/moka-bar.png";
import project2ImgSrc from "../../IMG/gotya-plumbing.png";
import project3ImgSrc from "../../IMG/networks.png";
import project4ImgSrc from "../../IMG/quiz.png";

const Projects = () => {
  const hStyle = { color: "#ffd60a" };
  const projectAlignLeft = { textAlign: "left" };
  const projectAlignRight = { textAlign: "right" };
  const projectFlexNormal = { flexDirection: "row" };
  const projectFlexReverse = { flexDirection: "row-reverse" };
  const projectFlexAlignStart = "flex-start";
  const projectFlexAlignEnd = "flex-end";

  const projectInformation = [
    {
      imgSrc: project1ImgSrc,
      type: "Freelance Project",
      title: "Moka Bar",
      technologies: ["HTML", "CSS", "JavaScript", "NextJS", "GoogleMaps API"],
      info: "Moka Bar's website is a digital platform showcasing the cafe in Cairns. Built with NextJS, it offers fast server-side rendering and intuitive navigation between pages, providing customers with necessary information and tools to learn about the cafe, view the menu, and more. All in a beautifully designed, accessible format.",
      live: "http://www.mokabar.com.au/",
      github: "https://github.com/bradley-owens/moka-bar",
      animationDirectionLeft: -80,
      animationDirectionRight: 80,
      textAlign: projectAlignRight,
      flexDirection: projectFlexNormal,
      alignDirection: projectFlexAlignEnd,
    },
    {
      imgSrc: project2ImgSrc,
      type: "Freelance Project",
      title: "Gotya Plumbing Solutions",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "GoogleMaps API"],
      info: "Gotya Plumbing's website is a platform for the Gotya Plumbing business based in Queensland. Crafted with ReactJS, it serves as a single-page source for all services, reviews, and contact information required by clients. The website provides a clean and concise presentation of the business, making it easy for customers to find what they need.",
      live: "https://gotya-plumbing.vercel.app/",
      github: "https://github.com/bradley-owens/gotya-plumbing",
      animationDirectionLeft: 80,
      animationDirectionRight: -80,
      textAlign: projectAlignLeft,
      flexDirection: projectFlexReverse,
      alignDirection: projectFlexAlignStart,
    },
    {
      imgSrc: project3ImgSrc,
      type: "Personal Project",
      title: "Networks",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "Firebase"],
      info: "Networks is a social networking platform for developers, allowing users to create accounts, connect with others through following and unfollowing, and accessing additional social media links. The app implements authorization, user data editing, and storage through the use of Redux and Firebase/Firebase Storage, ensuring a secure and seamless experience for all users.",
      live: " https://networks-eight.vercel.app/",
      github: "https://github.com/bradley-owens/networks",

      animationDirectionLeft: -80,
      animationDirectionRight: 80,
      textAlign: projectAlignRight,
      flexDirection: projectFlexNormal,
      alignDirection: projectFlexAlignEnd,
    },
    {
      imgSrc: project4ImgSrc,
      type: "Assessment Project",
      title: "Valearnis Quiz",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "Quiz API"],
      info: "This is a multiple choice quiz application built for a job application for Valearnis using React, Redux and React Router. The app retrieves questions from an API and presents them to the user one by one, with a quiz state management system and a question navigator for easy access to previously answered questions. The project was developed with an emphasis on efficiency and user-friendliness, and involved overcoming challenges.",
      live: "https://quiz-one-kappa.vercel.app/",
      github: "https://github.com/bradley-owens/quiz",
      animationDirectionLeft: 80,
      animationDirectionRight: -80,
      textAlign: projectAlignLeft,
      flexDirection: projectFlexReverse,
      alignDirection: projectFlexAlignStart,
    },
  ];

  return (
    <div className={styles["projects-container"]} id="projects">
      <motion.div
        className={styles.title}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            y: -40,
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            y: 40,
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
            live={project.live}
            github={project.github}
            animationDirectionLeft={project.animationDirectionLeft}
            animationDirectionRight={project.animationDirectionRight}
            textAlign={project.textAlign}
            flexDirection={project.flexDirection}
            alignDirection={project.alignDirection}
          />
        );
      })}
    </div>
  );
};

export default Projects;
