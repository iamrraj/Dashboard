import React, { Component } from 'react'

export class DeatilSummery extends Component {
    constructor(props){
        super(props)
        this.state={
            dash:[],
        }
    }

    async componentDidMount(){
        try{
            const res = await fetch(`http://localhost:8000/api/dswalk`);
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
                <th scope="col" className="text-dark"><strong>Summery</strong></th>
                <th scope="col" className="text-primary">{c.total_milage} Km</th>
                <th scope="col" className="text-primary">{c.total_movingtime}</th>
                <th scope="col" className="text-primary">{c.total_kg} kgs</th>
                <th scope="col" className="text-primary">{c.total_boxes}</th>
                </tr>
            )}
            </thead>
        );
    }
}

export default DeatilSummery
