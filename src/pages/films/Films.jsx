import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms, getCharacters } from '../../redux/actions';
import Accordion from './accordion/Accordion';
import Loading from '../../components/loading/Loading';
import Styles from "./Films.module.css";

export default function Films(){
  const filmsState = useSelector((state) => state.films);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
    dispatch(getCharacters());
  }, []);

  return (
    <div className={Styles.films_container}>
      {
        filmsState.length === 0 ? <Loading />
        : <Accordion/>
      }
    </div>
  )
};
