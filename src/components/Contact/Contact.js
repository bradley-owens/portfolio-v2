import styles from "./Contact.module.css";
import phoneIcon from "../../IMG/Icons/phone.png";
import emailIcon from "../../IMG/Icons/email.png";
import linkedInIcon from "../../IMG/Icons/linkedIn.png";
import githubIcon from "../../IMG/Icons/github.png";
import { motion } from "framer-motion";
import { AnimationStyle } from "../Hooks/AnimationStyle";

const Contact = () => {
  const hStyle = { color: "#ffd60a" };

  const contactLinks = [
    { icon: emailIcon, name: "Email", delay: 0 },
    { icon: phoneIcon, name: "Phone", delay: 0.4 },
    { icon: linkedInIcon, name: "LinkedIn", delay: 0.8 },
    { icon: githubIcon, name: "Github", delay: 0.99 },
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
            Looking for a permanent role but also take on freelance
            opportunities.
          </p>
          <p>If you think im your guy then send me an email!</p>
        </div>
      </motion.div>

      <div className={styles["links-container"]}>
        {contactLinks.map((link) => {
          return (
            <motion.div
              className={styles.link}
              initial="hidden"
              whileInView="visible"
              variants={AnimationStyle(link.delay)}
            >
              <img src={link.icon}></img>
              <a href="mailto:bradowens17@hotmail.com">{link.name}</a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
