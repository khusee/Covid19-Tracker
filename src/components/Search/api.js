import React from 'react'
import axios from 'axios'

const url ='https://covid19.mathdro.id/api'
export const fetchData = async(country) =>{

    let changeableurl = url
    if(country){
        changeableurl =`${url}/countries/${country}`
    }

    const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableurl)
    return {confirmed, recovered, deaths, lastUpdate}
}

export const fetchDailyDate = async() =>{
    const {data} = await axios.get('https://covid19.mathdro.id/api/daily')  
    const modifieddata = data.map((dailyData)=>({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate
    }))
    return modifieddata
}

 export const countries = async() =>{
    const {data:{countries}} = await axios.get('https://covid19.mathdro.id/api/countries')
    return countries.map((country)=>country.name)
}

