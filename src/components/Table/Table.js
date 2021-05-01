import { useState } from 'react'
import { useFilters, useSortBy, useTable } from 'react-table'

const Table = ({ columns, data }) => {
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
        setFilter // useFilter Hook 
    } = useTable({
        columns,
        data
    },
        useFilters,
        useSortBy
    );
    const [filterInput, setFilterInput] = useState('');

    const handleFilterChange = (e) => {
        const value = e.target.value || undefined;
        setFilter("city", value);
        setFilterInput(value);
    }
    return (
        <>
            <input
                value={filterInput}
                onChange={handleFilterChange}
                placeholder={"Search name"}
            />
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
                                            : "" }>
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
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
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