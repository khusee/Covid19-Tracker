import React from 'react'
import './card.css'
import Countup from 'react-countup'
const Card = ({title,text,data,date}) => {
    return(
        <div className='card-one'>
            <div className='card-title'>{title}</div>
            <div className='card-data'>Real data: <Countup className='card-data' start='0' end={data} duration={2} sep=','/></div>
            <div className='card-date'>Real date: {date}</div>
            <div className='card-name'>{text}</div>
        </div>
    )
}

export default Card