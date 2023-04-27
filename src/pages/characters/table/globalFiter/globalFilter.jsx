import React from 'react';
import Styles from "./globalFilter.module.css";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className={Styles.global_filter_container}>
        Search:{" "}
        <input value={ filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  )
};
