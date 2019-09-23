import React, { Component } from 'react';


export default class Summery extends Component {
    constructor(props){
        super(props)
        this.state={
            dash:[],
        }
    }

    async componentDidMount(){
        try{
            const res = await fetch(`http://localhost:8000/api/scbike`);
            const dash = await res.json();
            // console.log(dash)
            this.setState({
                dash: dash
            });
        }catch(e){
            console.log(e)
        }
    }
    render() {
        return (
            <thead > 
            {this.state.dash.map(c=>
                <tr className="thead ">
                <th scope="col"></th>
                <th scope="col" className="text-dark th"><strong>SUMMERY</strong></th>
                <th scope="col" className="text-dark th">{c.total_milage} Km</th>
                <th scope="col" className="text-dark th">{c.total_movingtime}</th>
                <th scope="col" className="text-dark th">{c.total_averagespeed} km/hr</th>
                <th scope="col" className="text-dark th">{c.total_kg} Kg</th>
                <th scope="col" className="text-dark th">{c.total_co2_save} Mg</th>
                <th scope="col" className="text-dark th">{c.total_boxes}</th>
                </tr>
            )}
            </thead >
        )
    }
}

