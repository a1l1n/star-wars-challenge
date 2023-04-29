import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilteringTable from './table/filteringTable/filteringTable';
import Loading from '../../components/loading/Loading';
import Styles from "./Characters.module.css";
import { getCharacters } from '../../redux/actions';

export default function Characters() {
  const characterState = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters())
  }, [])
  
  return (
    <div className={Styles.characters_container}>
      {
        characterState.length === 0 ? <Loading />
        : <FilteringTable />
      }
    </div>
  )
}
