import React from 'react';
import { useSelector } from 'react-redux';
import FilteringTable from './table/filteringTable/filteringTable';
import Loading from '../../components/loading/Loading';
import Styles from "./Characters.module.css";

export default function Characters() {
  const characterState = useSelector((state) => state.characters);

  return (
    <div className={Styles.characters_container}>
      {
        characterState.length === 0 ? <Loading />
        : <FilteringTable />
      }
    </div>
  )
}
