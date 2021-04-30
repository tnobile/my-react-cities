//import styles from './City.module.css'

const City = ({ city }) => {
    return (
        <>
            <tr>
                <td>{city.city}</td>
                <td>{city.admin_name}</td>
                <td>{city.lng}</td>
                <td>{city.lat}</td>
                <td>{city.country}</td>
                <td>{city.iso2}</td>
                <td>{city.capital}</td>
                <td>{city.population}</td>
                <td>{city.population_proper}</td>
            </tr>
        </>
    )
}

export default City;