import React,{useState,useEffect} from 'react'
import {countries} from '../api'
import search from '../../../assests/search.gif'
import './countrypicker.css'
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(()=>{
        const fetchedCountries = async() =>{
            setFetchedCountries(await countries())
        }
        fetchedCountries()
    }, [setFetchedCountries])
    return(
        <div className='country'>
            <div className='search-country'>
                <select defaultValue='' onChange = {(e)=>handleCountryChange(e.target.value)}>
                    <option>Global</option>
                    {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
                </select>
            </div>
        </div>
    )
}

export default CountryPicker