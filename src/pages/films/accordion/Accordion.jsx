import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Styles from "./Acordeon.module.css";

export default function Accordion() {
    const [ selected, setSelected ] = useState(null);
    const films = useSelector(state => state.films);

    const toggle = (i) => {
      if (selected === i) {
        return setSelected(null);
      }
      setSelected(i);
    }

    function episodeToRoman(episode) {
      if (episode === 1) return "I";
      if (episode === 2) return "II";
      if (episode === 3) return "III";
      if (episode === 4) return "IV";
      if (episode === 5) return "V";
      if (episode === 6) return "VI";
    }
  
  return (
    <div className={Styles.accordion_container}>
      <div className={Styles.accordion_header}>FILMS</div>
      {
        films?.map((f, i) => (
          <div className={Styles.accordion_item} key={f.episode_id}>
            <div className={Styles.accordion_title} onClick={() => toggle(i)}>
              <span>EPISODE {episodeToRoman(f.episode_id)}</span>
              {
                selected === i ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />
              }              
            </div>
            {
              selected === i ?             
              <div className={Styles.accordion_info}>
                <div className={Styles.accordion_info_item}><span>TITLE</span>{f.title}</div>
                <div className={Styles.accordion_info_item}><span>EPISODE </span>{f.episode_id}</div>
                <div className={Styles.accordion_info_item}><span>DIRECTOR</span> {f.director}</div>
                <div className={Styles.accordion_info_item}><span>CHARACTERS</span><Link to="/characters" className={Styles.acordion_link}>Go to Characters</Link></div>
              </div> 
              : null
            }
          </div>
        ))
      }
    </div>
  )
}
