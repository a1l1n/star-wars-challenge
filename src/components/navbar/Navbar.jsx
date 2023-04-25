import React from 'react';
import { Link } from 'react-router-dom';
import SwLogo from "../../assets/svgs/star-wars-logo.svg";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={Styles.nav}>
        <div className={Styles.nav_container}>
            <img src={SwLogo} alt="Star Wars Logo" className={Styles.nav_logo}/>
            <div className={Styles.nav_links_container}>
                <Link to="/" className={Styles.nav_links}>Films</Link>
                <Link to="/characters" className={Styles.nav_links}>Characters</Link>
            </div>
        </div>
    </div>
  )
}
