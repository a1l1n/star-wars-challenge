import React from 'react';
import Table from './table/table';
import Styles from "./Characters.module.css";


export default function Characters() {
  
  return (
    <div className={Styles.characters_container}>
      <Table />
    </div>
  )
}
