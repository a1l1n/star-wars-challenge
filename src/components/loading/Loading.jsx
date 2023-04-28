import React from 'react';
import loading from "../../assets/gifs/loading.gif";
import Styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={Styles.loading_component}>
      <img src={loading} alt="loading gif" />
    </div>
  )
}
