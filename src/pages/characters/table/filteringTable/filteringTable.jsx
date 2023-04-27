import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable, useGlobalFilter, useFilters, usePagination } from 'react-table';
import { GlobalFilter } from '../globalFiter/globalFilter';
import { COLUMNS } from '../columns';
import Styles from "../filteringTable/Table.module.css";

export default function FilteringTable() {
    const characterState = useSelector((state) => state.characters);
    const columns = useMemo(() => COLUMNS, []);
    const flatArray = characterState.flat(Infinity);
    const characters = useMemo(() => flatArray, []);
    
    
    const { getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        state,
        setGlobalFilter 
    } = useTable({
            columns,
            data: characters
        }, useFilters, 
        useGlobalFilter, 
        usePagination, 
        );

    const { globalFilter } = state;
  

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table className={Styles.table_container} {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}
                                <div>{column.canFilter ? column.render("Filter") : null}</div>
                            </th>
                            ))
                        }
                  </tr>
                ))
            } 
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                page?.map(row => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()}>
                        {
                            row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            })
                        }
                    </tr>
                    )
                })
            }
        </tbody>
    </table>
    <div className={Styles.table_div_buttons}>
        <button onClick={()=> previousPage()} disabled={!canPreviousPage}>Previus</button>
        <button onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>
    </div>
  </>
  )
}
