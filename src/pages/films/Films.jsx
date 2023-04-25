import React from 'react';
import Accordion from './accordion/Accordion';
import Styles from "./Films.module.css";

export default function Films(){

  return (
    <div className={Styles.films_container}>
      <Accordion/>
      <div className={Styles.films_tilt}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={Styles.films_tilt_shape}></path>
        </svg>
      </div>
      
    </div>
  )
};
