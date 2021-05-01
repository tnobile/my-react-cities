import { getData } from '../../services/CityService'
import React, { useState, useEffect } from 'react'
import City from '../City/City'
//import styles from './Home.module.css'

const Home = () => {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState("gb")
    useEffect(() => {
        // getData().then(d => {
        //     console.log("got", d);
        //     setData(d);
        // }).catch(e => { console.log("failed in fetch", e.message) });
        const fetchData = async () => {
            try {
                const result = await getData(country);
                console.log(`got ${result.length}`)
                setData(result);
            } catch (e) {
                setData([]);
                console.log(`${e.name}:${e.message}`);
            }
        }

        fetchData();
    }, [country])
    const handleCountryChange = (evt) => {
        setCountry(evt.target.value);
    }

    return (
        <>
            <div>
                <h1>Country/City Data</h1>
                <select name='country' onChange={handleCountryChange}>
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
            <table>
                <tbody>
                    {data && data.map((d, i) => <City key={i} row={i} city={d}></City>)}
                    {data && data.length === 0 && <h2>No data for {country}</h2>}
                </tbody>
            </table>
        </>
    )
}

export default Home;