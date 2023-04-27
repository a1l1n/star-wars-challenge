import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFilms, getCharacters } from '../../redux/actions';
import Accordion from './accordion/Accordion';
import Styles from "./Films.module.css";

export default function Films(){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
    dispatch(getCharacters());
  }, []);

  return (
    <div className={Styles.films_container}>
      <Accordion/>
    </div>
  )
};
