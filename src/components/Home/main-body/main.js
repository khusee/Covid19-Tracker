import React from 'react'
import './main.css'
import Covid from '../../../assests/covid.gif'
const Main = () => {
    return (
        <div className='main'>
            <div className='left-main'>
                <div className='left-title'>Covid-19 Alert</div>
                <div className='left-subtitle'>
                    <span>Stay At Home Quarantine </span>
                    <span>To Stop Corona Virus</span>
                </div>
                <div className='left-description'>
                    There is no specific medicine to prevent or treat coronavirus disease (Covid-19)
                    People may nedd suportive care to.
                </div>
                <div>
                    <button>Check Symptoms</button>
                </div>
                
            </div>
            <div className='right-main'>
                <img src={Covid}/>
            </div>
        </div>
    )
}

export default Main
