import React from "react";
import styles from  "./hero.module.css";
export const Hero = () => {
    return <section id="hero" className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nitya Agarwal</h1>
            <p className={styles.description}>I'm a Web developer. Contact to learn more!</p>
            <a href="../../../public/resume.pdf" className={styles.btn} download >Download Resume</a>
        </div>
        {/* <div className={styles.contactBtn}>Contact</div> */}
        
        {/* <img 
            src={getImageURL("hero/myPic2.png")}
            alt="my hero image"
            className={styles.heroImg}
            ></img> */}
        <div className={styles.topBlur}></div>
        {/* <div className={styles.bottomBlur}></div> */}
    </section>;
};