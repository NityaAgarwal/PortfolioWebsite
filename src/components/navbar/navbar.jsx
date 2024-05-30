import React, {useState} from "react";
import styles from "./navbar.module.css";
import { getImageURL } from "../../utils";
export const Navbar = () => {
    // creating statement variable - refer to video and notes for 29.29 around
    const [menuOpen, setMenuOpen] = useState(false);
    return <nav className={styles.navbar}>
        <a href="/" className={styles.title}>
            Portfolio
        </a>
        <div className={styles.menu}>
            <img 
            className={styles.menuBtn} 
            src = {
                menuOpen 
                ? getImageURL("nav/closeIcon.png")
                : getImageURL("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick = {() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={()=>{setMenuOpen(false)}} >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#hero">Home</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
};
