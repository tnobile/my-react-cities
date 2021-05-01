import { useEffect, useState } from 'react'
import { useFilters, useGlobalFilter, useSortBy, useTable, useAsyncDebounce, usePagination } from 'react-table'
import styles from './Table.module.css'


function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    globalFilterInput,
    setGlobalFilterInput,
}) {
    const count = preGlobalFilteredRows.length
    //const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <input
            value={globalFilterInput || ""}
            onChange={e => {
                setGlobalFilterInput(e.target.value);
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

        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },

        setFilter, // useFilter Hook 
        state,
        preGlobalFilteredRows,
        setGlobalFilter
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 2 }
    },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const [filterInput, setFilterInput] = useState('');
    const [globalFilterInput, setGlobalFilterInput] = useState('');
    const [totalCount, setTotalCout] = useState(0);
    const handleFilterChange = (e) => {
        const value = e.target.value || undefined;
        setFilter("city", value);
        setFilterInput(value);
    }

    useEffect(() => {
        setFilterInput('');
        setGlobalFilterInput('');
        setTotalCout(data.length);
        console.log(`data changed with ${data.length} rows`);
    }, [data]);
    const onReset = () => {
        setFilterInput('');
        setGlobalFilterInput('');
        setFilter("city", undefined);
        setGlobalFilter(undefined);
    }

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
                        setGlobalFilterInput={setGlobalFilterInput}
                        globalFilterInput={globalFilterInput}
                    />
                </div>
                <button className={styles.btnReset} onClick={onReset}>reset</button>
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
                    {page.map((row, i) => {
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
            <div className={styles.pagination}>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page:{' '}
                    <input
                        type="number"
                        value={pageIndex + 1}
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50, totalCount].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <button onClick={e => { totalCount === pageSize ? setPageSize(10) : setPageSize(totalCount) }}>
                    {totalCount === pageSize ? 'Paginate' : 'Show All'}</button>
            </div>
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