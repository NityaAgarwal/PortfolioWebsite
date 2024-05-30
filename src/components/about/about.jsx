import React from "react";
import styles from "./about.module.css";
import { getImageURL } from "../../utils";
export const About = () => {
    return <section id="about" className={styles.container}>
        <h1 className={styles.title}>
            ABOUT</h1>
        <div className={styles.content}>
            <img 
                src={getImageURL("about/aboutImage22.png")}
                alt="About image"
                className={styles.aboutImg}>
            </img>
            <div  className={styles.information}>

                <div className={styles.infoItems}>
                <img
                    src={getImageURL("about/cursorIcon.png")}
                    alt="cursor image"
                    className={styles.infoImg}
                ></img>
                <div className={styles.infoItemsText}>
                    <p className={styles.infoTitles}>Web Development</p>
                    <p>I have experience building responsive and optimised sites</p>
                </div>
                </div>

                <div className={styles.infoItems}>
                <img
                    src={getImageURL("about/serverIcon.png")}
                    alt="cursor image"
                    className={styles.infoImg}
                ></img>
                <div className={styles.infoItemsText}>
                    <p className={styles.infoTitles}>Volunteering</p>
                    <p>I am an NSS member and have volunteered in several of their public service drives</p>
                </div>
                </div>

                <div className={styles.infoItems}>
                <img
                    src={getImageURL("about/uiIcon.png")}
                    alt="cursor image"
                    className={styles.infoImg}
                ></img>
                <div className={styles.infoItemsText}>
                    <p className={styles.infoTitles}>Leadership</p>
                    <p>I have held various positions of leadership in student organisations both in college and school</p>
                </div>
                </div>
                
                
                
            </div>
        </div>
        
    </section>
};

