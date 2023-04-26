import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Accordion from './accordion/Accordion';
import Styles from "./Films.module.css";
import { getFilms, getCharacters } from '../../redux/actions';

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
