import React, { Component } from 'react'

class DeatilSummery extends Component {
    constructor(props){
        super(props)
        this.state={
            dash:[],
        }
    }

    async componentDidMount(){
        try{
            const res = await fetch(`http://localhost:8000/api/dsebike`);
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
                <tr className="thead" >
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col" className="text-dark th"><strong>SUMMERY</strong></th>
                <th scope="col" className="text-dark th">{c.total_milage} Km</th>
                <th scope="col" className="text-dark th">{c.total_movingtime}</th>
                <th scope="col" className="text-dark th">{c.total_averagespeed}</th>
                <th scope="col" className="text-dark th">{c.total_kg} kgs</th>
                <th scope="col" className="text-dark th">{c.total_boxes}</th>
                </tr>
            )}
            </thead>
        )
    }
}

export default DeatilSummery
