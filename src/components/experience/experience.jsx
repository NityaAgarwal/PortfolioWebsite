import React from "react";
import styles from "./experience.module.css";
import { getImageURL } from "../../utils";
import skills from "../../data/skills.json"; //now this becomes like an array object
import history from "../../data/history.json"; //now this becomes like an array object
//that we can use as per our convinience

export const Experience = () => {
    return ( <section className={styles.container} id="experience">
        {/* since area is very change intensive, it can
        change over time alot, so we will use json this time
        all such data is stored in json files usually as array of objects
        and you can add these objects easily in the json file overtime, without 
        messing around with your react components */}
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {/* herein we want to use the data, so first we will import the 
                data above (you'll see that in first few lines of this code above) */}
                {
                   skills.map((skill, id) => {
                    return <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            {/* instead of hardcoding the values, we will use json here */}
                            <img src={getImageURL(skill.imageSrc)} alt={skill.title}/>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                   }) 
                }
            </div>
            <ul className={styles.history}>
                {
                    history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                            <img 
                                src={getImageURL(historyItem.imageSrc)}
                                alt={`${historyItem.organisation} Logo`} 
                                />
                                <div className={styles.historyItemDetails}>
                                    {/* <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3> */}
                                    <h3>{`${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.role}`}</p>
                                    <h4>{`${historyItem.startDate} - ${historyItem.endDate}`}</h4>
                                    <ul>{historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>;
                                    
                                    })}</ul>
                                </div>
                        </li>
                        );
                    })
                }
            </ul>
        </div>
    
    </section>
    );
};