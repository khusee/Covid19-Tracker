import React from 'react'
import './cards.css'
import Card from './Card/Card'
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return '..'
    }
    return(
        <div className='cards'>
            <Card title='Infected' date={new Date(lastUpdate).toDateString()} data={confirmed.value} text='Number of cases of Covid-19'/>
            <Card title = 'Recovered' date={new Date(lastUpdate).toDateString()} data={recovered.value} text='Number of recoveries from Covid-19'/>
            <Card title = 'Deaths' date={new Date(lastUpdate).toDateString()} data={deaths.value} text='Number of deaths cased by Covid-19'/>
        </div>
    )
}

export default Cards