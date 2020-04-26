import React from 'react'
import '../cases.css'
import { GiDeathSkull } from "react-icons/gi";
import { AiFillAlert } from "react-icons/ai";
const Main = ({totalnumber,casesname,style,icons}) => {
    return (
        <div className='totalnumber'>
            <AiFillAlert style={{fontSize:'40px', color:'#eb4559'}}/>
            <div className='cases-number' style={style}>{totalnumber}</div>
            <div className='cases-name'>{casesname}</div>
        </div>
    )
}

export default Main
