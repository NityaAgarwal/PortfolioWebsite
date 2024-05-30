import React from "react";
import styles from "./contact.module.css";
import { getImageURL } from "../../utils";
export const Contact = () => {
    return (
        <section id="contact" className={styles.container}>
            <div className={styles.leftSection}>
                <p className={styles.contact}>Contact</p>
                <p className={styles.message}>Feel free to reach out!</p>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.links}>
                    <img
                        src={getImageURL("contact/emailIcon.png")}
                        alt="emailIcon"></img>
                    

                    <a 
                        href="mailto:nitya.agarwal02@gmail.com"
                        >
                        nitya.agarwal02@gmail.com
                    </a>

                </div>
                <div className={styles.links}>
                    <img
                        src={getImageURL("contact/linkedinIcon.png")}
                        alt="linkedinIcon"></img>
                    <a href="https://www.linkedin.com/in/nitya-agarwal-2595b623b/"
                    target="_blank">
                        linkedin.com/NityaAgarwal
                    </a>
                </div>
                <div className={styles.links}>
                    <img
                        src={getImageURL("contact/githubIcon.png")}
                        alt="githubIcon"></img>
                    <a href="https://github.com/NityaAgarwal"
                    target="_blank">
                        github.com/NityaAgarwal
                    </a>
                </div>
            </div>
        </section>
    );
};