import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
export default class App extends Component {
    state={advice:''}
    componentDidMount(){
        this.fetchAdice()
    }
    fetchAdice=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then(response=>{
            const {advice} = response.data.slip;
            this.setState({advice})
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    render() {
        return (
            <div className ="App">
                <div className ="card">
                     <h1 className="heading">{this.state.advice}</h1>
                     <button className ="button" onClick={this.fetchAdice}>
                         <span>Give me an advice</span>
                     </button>
               </div>
            </div>
        )
    }
}
