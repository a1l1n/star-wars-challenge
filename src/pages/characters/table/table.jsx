import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import Styles from "./Table.module.css";

export default function Table() {
    const characterState = useSelector(state => state.characters);

    const columns = useMemo(() => COLUMNS, []);
    const charactersData = useMemo(() => characterState, []);

    const charactersTable = useTable({
        columns,
        data: charactersData
    });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = charactersTable;
  

  return (
    <table className={Styles.table_container} {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))
                        }
                  </tr>
                ))
            } 
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows?.map(row => {
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
  )
}
