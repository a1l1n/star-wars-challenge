import React from 'react';
import FilteringTable from './table/filteringTable/filteringTable';
import Styles from "./Characters.module.css";

/* 
PARA EL JUEVES: RESOLVER EL TEMA DEL SORT PARA PODER ORDENAR EL SISTEMA DE GÉNEROS, YA QUE LOS FILTROS NO FUNCIONAN
                AVERIGUAR QUÉ CARAJOS PASA CON LOS PEDIDOS DE LA API CON EL RENDERIZADO DE LOS COMPONENTES
                REORGANIZAR TODOS LOS ESTILOS X ORDEN ALFABÉTICO / FACTORIZAR CÓDIGO
*/

export default function Characters() {

  return (
    <div className={Styles.characters_container}>
      <FilteringTable />
    </div>
  )
}
