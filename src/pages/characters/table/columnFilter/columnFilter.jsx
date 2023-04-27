import React from 'react';
import Styles from "./columnFilter.module.css";

export const columnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span className={Styles.table_filter_container}>
        <input 
            value={filterValue || ""}
            onChange={(e) => setFilter(e.target.value)}
        />
    </span>
  )
}
