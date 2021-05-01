import { useEffect, useState } from 'react'
import { useFilters, useGlobalFilter, useSortBy, useTable, useAsyncDebounce } from 'react-table'
import styles from './Table.module.css'


function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <input
            value={value || ""}
            onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
            placeholder={`Global search with ${count} records...`}
        />
    )
}

const Table = ({ columns, data }) => {
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
        setFilter, // useFilter Hook 
        state,
        preGlobalFilteredRows,
        setGlobalFilter

    } = useTable({
        columns,
        data
    },
        useFilters,
        useGlobalFilter,
        useSortBy
    );

    const [filterInput, setFilterInput] = useState('');
    const handleFilterChange = (e) => {
        const value = e.target.value || undefined;
        setFilter("city", value);
        setFilterInput(value);
    }

    useEffect(() => {
        console.log("data changed");
    }, [data]);

    return (
        <>
            <div className={styles.searchRow} >
                <div className={styles.searchColumn}>
                    <input
                        value={filterInput}
                        onChange={handleFilterChange}
                        placeholder={"Search city name"}
                    />
                </div>
                <div className={styles.searchColumn}>
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                </div>
            </div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column =>
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        column.isSorted
                                            ? column.isSortedDesc
                                                ? "sort-desc"
                                                : "sort-asc"
                                            : ""}>
                                    {column.render("Header")}
                                </th>
                            )}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
    // return (
    //     <table>
    //         <tbody>
    //             {data.map((d, i) => <City key={i} row={i} city={d}></City>)}
    //         </tbody>
    //     </table>
    // )
}

export default Table;