import styles from "./Contact.module.css";
import phoneIcon from "../../IMG/Icons/phone.png";
import emailIcon from "../../IMG/Icons/email.png";
import linkedInIcon from "../../IMG/Icons/linkedIn.png";
import githubIcon from "../../IMG/Icons/github.png";
import resume from "../../IMG/Bradley_Owens_Resume (2).pdf";
import { motion } from "framer-motion";
import { AnimationStyle } from "../Hooks/AnimationStyle";

const Contact = () => {
  const hStyle = { color: "#ffd60a" };

  const contactLinks = [
    {
      icon: phoneIcon,
      name: "Resume",
      delay: 0.4,
      // href: "tel:+61428845477",
      href: resume,
    },
    {
      icon: emailIcon,
      name: "Email",
      delay: 0,
      href: "mailto:bradowens17@hotmail.com",
    },
    {
      icon: linkedInIcon,
      name: "LinkedIn",
      delay: 0.8,
      href: "https://www.linkedin.com/in/bradley-owens-8738b522a/",
    },
    {
      icon: githubIcon,
      name: "Github",
      delay: 0.99,
      href: "https://github.com/bradley-owens",
    },
  ];

  return (
    <div className={styles["contact-container"]} id="contact">
      <motion.div
        className={styles.information}
        initial="hidden"
        whileInView="visible"
        variants={AnimationStyle(0.2)}
      >
        <h2>
          Like what you see <span style={hStyle}>?</span>
        </h2>
        <div className={styles.brief}>
          <p>
            I am actively seeking both a permanent role and freelance
            opportunities.
          </p>
          <p>
            If you think I could be a valuable asset to your team, I'd love the
            chance to connect. Feel free to drop me an email anytime!
          </p>
        </div>
      </motion.div>

      <div className={styles["links-container"]}>
        {contactLinks.map(({ icon, name, href, delay }) => {
          return (
            <motion.div
              className={styles.link}
              initial="hidden"
              whileInView="visible"
              variants={AnimationStyle(delay)}
            >
              <img src={icon}></img>
              <a href={href} target="_blank">
                {name}
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
