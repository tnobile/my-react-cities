import { getData } from '../../services/CityService'
import React, { useState, useEffect } from 'react'
import City from '../City/City'
//import styles from './Home.module.css'

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // getData().then(d => {
        //     console.log("got", d);
        //     setData(d);
        // }).catch(e => { console.log("failed in fetch", e.message) });
        const fetchData = async () => {
            const result = await getData();
            setData(result);
        }
        fetchData();
    }, [])

    return (
        <>
            <h1>Country/City Data</h1>
            <table>
                {data && data.map((d,i) => <City key={i} city={d}></City>)}
            </table>
        </>
    )
}

export default Home;