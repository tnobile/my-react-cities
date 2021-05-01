import { getData } from '../../services/CityService'
import React, { useState, useEffect, useMemo } from 'react'
import Table from '../Table/Table'
import styles from './Home.module.css'

const toFlag = (code) => {
    switch (code) {
        case "ES": return "🇪🇸";
        case "JP": return "🇯🇵";
        case "GB": return "🇬🇧";
        case "AR": return "🇦🇷";
        case "CN": return "🇨🇳";
        case "CH": return "🇨🇭";
        case "IT": return "🇮🇹";
        case "FR": return "🇫🇷";
        case "US": return "🇺🇸";
        case "DE": return "🇩🇪";
        default: return code;
    }
}
const nf = new Intl.NumberFormat();

const Home = () => {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState("gb")
    useEffect(() => {
        // 1. with then
        // getData().then(d => {
        //     console.log("got", d);
        //     setData(d);
        // }).catch(e => { console.log("failed in fetch", e.message) });

        // 2. with function
        // const fetchData = async () => {
        //     try {
        //         const result = await getData(country);
        //         console.log(`got ${result.length}`)
        //         setData(result);
        //     } catch (e) {
        //         setData([]);
        //         console.log(`${e.name}:${e.message}`);
        //     }
        // }
        // fetchData();

        // 3. immediately executed function for async purpose
        (async () => {
            //try {
            const result = await getData(country, 1000);
            console.log(`got ${result.length}  for ${country}`)
            setData(result);
            //} catch (e) {
            //    setData([]);
            //    console.log(`${e.name}:${e.message}`);
            //}
        })().catch(e => {
            setData([]);
            console.error(`${e.name}:${e.message}`)
        });
    }, [country])
    const handleCountryChange = (evt) => {
        setCountry(evt.target.value);
    }
    const columns = useMemo(() => [
        {
            Header: "Cities",
            columns: [
                {
                    Header: "Name",
                    accessor: "city"
                },
                {
                    Header: "Name(admin)",
                    accessor: "admin_name"
                },
                {
                    Header: "Country",
                    accessor: "country"
                },
                {
                    Header: "Code",
                    accessor: "iso2",
                    id: "flag",
                    Cell: ({ cell: { value } }) => <span className="badge">{value}</span>
                },
                {
                    Header: "Flag",
                    accessor: "iso2",
                    Cell: ({ cell: { value } }) => toFlag(value)
                },
                {
                    Header: "Capital",
                    accessor: "capital"
                }
            ]
        },
        {
            Header: "Details",
            columns: [{
                Header: "Population",
                accessor: "population",
                style: { "text-align": "right", color: "pink", background: "green" },
                Cell: ({ cell: { value } }) => { return nf.format(value) }
            },
            {
                Header: "Population(Proper)",
                accessor: "population_proper",
                Cell: props => {
                    //console.log(props.cell);
                    return <div style={{ "textAlign": 'right', "color": "purple", "background": "lightblue" }}>
                        {nf.format(props.cell.value)}</div>
                }
            },
            {
                Header: "Latitude",
                accessor: "lat"
            },
            {
                Header: "Longitudo",
                accessor: "lng"
            }]
        }
    ], [])
    return (
        <>
            <div className={styles.topRow}>
                <div className={styles.topColumn}>Country/City Data</div>
                <div className={styles.topColumn}>
                    <select className={styles.selector}
                        name='country' defaultValue={country} onChange={handleCountryChange}>
                        <option value="jp" name="jp">Japan</option>
                        <option value="gb" name="gb">UK</option>
                        <option value="ch" name="ch">Switzerland</option>
                        <option value="ar" name="ar">Argentina</option>
                        <option value="cn" name="cn">China</option>
                        <option value="de" name="de">Germany</option>
                        <option value="es" name="es">Spain</option>
                        <option value="fr" name="fr">France</option>
                    </select>
                </div>
                <div className={styles.topColumn}>
                    <a href='https://tnobile.github.io/data-world-cities/'>source</a>
                </div>
            </div>
            {
                data && data.length > 0 &&
                <Table columns={columns} data={data}></Table>
            }
            { data && data.length === 0 && <h2>No data for {country}</h2>} </>
    )
}


export default Home;