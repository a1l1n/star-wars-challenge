import { columnFilter } from "./columnFilter/columnFilter";

export const COLUMNS = [
    {
        Header: "Name",
        accessor: "name",
        Filter: columnFilter
    },
    {
        Header: "Eye Color",
        accessor: "eye_color",
        Filter: columnFilter
    },
    {
        Header: "Gender",
        accessor: "gender",
        Filter: columnFilter
    }
]