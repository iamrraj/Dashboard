import React, { Component } from 'react'

class Summery extends Component {
    constructor(props){
        super(props)
        this.state={
            dash:[],
        }
    }

    async componentDidMount(){
        try{
            const res = await fetch(`http://localhost:8000/api/sduser`);
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
    
 
        <thead>
        {this.state.dash.map(c=>
            <tr className="thead">
            <th scope="col" className="font-weight-bold"></th>
            <th scope="col" className="font-weight-bold">SUMMERY</th>
            <th scope="col" className="text-dark th">{c.total_travel_walk} Km</th>
            <th scope="col" className="text-dark th" >{c.total_distribute_walk} Kg</th>
            <th scope="col" className="text-dark th" >{c.total_travel_classic} km</th>
            <th scope="col" className="text-dark th" >{c.total_distribute_classic} kg</th>
            <th scope="col" className="text-dark th">{c.total_travel_electric} km</th>
            <th scope="col" className="text-dark th">{c.total_distribute_electric} Kg</th>
            <th scope="col" className="text-dark th">{c.total_milage} Km</th>
            <th scope="col" className="text-dark th">{c.total_weight} Kgs</th>
            
            </tr>
        )}
        </thead>
        )
    }
}

export default Summery;
