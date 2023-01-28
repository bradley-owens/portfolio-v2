import styles from "./Contact.module.css";
import phoneIcon from "../../IMG/Icons/phone.png";
import emailIcon from "../../IMG/Icons/email.png";
import linkedInIcon from "../../IMG/Icons/linkedIn.png";
import githubIcon from "../../IMG/Icons/github.png";
import { motion } from "framer-motion";

const Contact = () => {
  const hStyle = { color: "#ffd60a" };

  return (
    <div className={styles["contact-container"]} id="contact">
      <motion.div
        className={styles.information}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            x: -40,
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            x: 40,
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0,
            },
          },
        }}
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
      <div className={styles["contact-links_container"]}>
        {/* <h3>Get in contact</h3> */}
        <div className={styles["links-container"]}>
          <motion.div
            className={styles.link}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                x: 40,
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                x: -40,
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              },
            }}
          >
            <img src={emailIcon}></img>
            <p>bradowens17@hotmail.com</p>
          </motion.div>
          <motion.div
            className={styles.link}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                x: 40,
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                x: -40,
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.3,
                },
              },
            }}
          >
            <img src={phoneIcon}></img>
            <p>0428-835-477</p>
          </motion.div>
          <motion.div
            className={styles.link}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                x: 40,
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                x: -40,
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              },
            }}
          >
            <img src={linkedInIcon}></img>
            <p>LinkedIn</p>
          </motion.div>
          <motion.div
            className={styles.link}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                x: 40,
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                x: -40,
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.9,
                },
              },
            }}
          >
            <img src={githubIcon}></img>
            <p>Github</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
