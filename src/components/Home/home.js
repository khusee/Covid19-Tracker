import React from 'react'
import './home.css'
import Main from './main-body/main'
import Totalcases from './cases/Totalcases'
const Home = () => {
    return (
       <div className='home'>
           <Main/>
           <Totalcases/>
       </div>

    )
}

export default Home
