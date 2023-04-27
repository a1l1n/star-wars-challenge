import React from 'react';
import FilteringTable from './table/filteringTable/filteringTable';
import Styles from "./Characters.module.css";


export default function Characters() {

  return (
    <div className={Styles.characters_container}>
      <FilteringTable />
    </div>
  )
}
