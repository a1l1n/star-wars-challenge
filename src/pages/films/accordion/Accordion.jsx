import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../../redux/actions';
import { AiOutlinePlusCircle } from "react-icons/ai";
import Styles from "./Acordeon.module.css";

export default function Accordion() {
    const dispatch = useDispatch();
    const films = useSelector(state => state.films);
    console.log(films)
    useEffect(() => {
      dispatch(getFilms())
    }, []);
  
  return (
    <div className={Styles.accordion_container}>
      <div className={Styles.accordion_header}>FILMS</div>
      {
        films?.map((f) => (
          <div className={Styles.accordion_item} key={f.episode_id}>
            <div className={Styles.accordion_title}>
              <span>EPISODE {f.episode_id}</span>
              <AiOutlinePlusCircle className={Styles.accordion_title_icon} />
            </div>
            <div className={Styles.accordion_info}>
              <span>Title: {f.title}</span>
              <span>Episode: {f.episode_id}</span>
              <span>Director: {f.director}</span>
              <span>Characters: {f.characters}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}
