import React from 'react'
import Case from './Case/Case'
import './cases.css'
import axios from 'axios'
import { GiDeathSkull } from "react-icons/gi";

class Main extends React.Component {
    state = {
        cases:[]
    }
    componentDidMount(){
        axios.get('https://api.covid19api.com/summary')
            .then((res)=>{
                console.log(res.data.Global)
                this.setState({
                    cases: res.data.Global
                })
            })
    }
    render(){
        const totalcases = this.state.cases.TotalConfirmed
        const totaldeath = this.state.cases.TotalDeaths
        const totalrecovery = this.state.cases.TotalRecovered
        const newcases = this.state.cases.NewConfirmed
        const icons = GiDeathSkull
        const colorstyle = {
            color : 'green'
        }

        const redcolor = {
            color:'#eb4559'
        }
        return (
            <div className='totalcases'>
                <div className='cases-box'>
                    <Case totalnumber = {totalcases} casesname = 'Total cases'/>
                    <Case totalnumber = {totaldeath} casesname = 'Total Death' icons={icons}/>
                    <Case totalnumber = {totalrecovery} casesname = 'Total Recovery' style={colorstyle}/>
                    <Case totalnumber = {newcases} casesname = 'New Cases'/>
                </div>
            </div>
        )
    }
}

export default Main
