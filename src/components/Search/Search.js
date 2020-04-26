import React from 'react'
import Cards from './Cards/Cards'
import Chart from './Chart/Chart'
import CountryPicker from './CountryPicker/CountryPicker'
import axios from 'axios'
import './search.css'
import {fetchData, countries} from './api'
class Search extends React.Component {
    state = {
        data: {},
        country : ''
    }

    async componentDidMount() {

        // axios.get('https://covid19.mathdro.id/api')
        //     .then((res) => {
        //         console.log(res.data)
        //         this.setState({
        //             data: res.data
        //         })
        //     })
        const fetchedData = await fetchData();
        this.setState({
            data:fetchedData
        })
  
    }

    handleCountryChange = async(country) =>{
        const fetchedData = await fetchData(country)
        this.setState({
            data:fetchedData,
            country:country
        })
        console.log(fetchedData)
    }

    render() {
        const {data,country} = this.state
        return (
            <div className='search'>                
                <CountryPicker handleCountryChange = {this.handleCountryChange} />
                <Cards data={data} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default Search