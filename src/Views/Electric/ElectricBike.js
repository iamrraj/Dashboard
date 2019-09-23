import React, { Component } from 'react'
import Summery from './Summery'
import DateForm from './DateForm'

class ElectricBike extends Component {
    constructor(props){
        super(props);
        this.state ={
            movies:[],
        }
    }

    // Get Data from filter date
    getData = async(e) =>{
        try{
            const from = e.target.elements.from.value;
            const to = e.target.elements.to.value;
            e.preventDefault();   
            const res = await fetch(`http://localhost:8000/api/ebike?fromm__gte=${from}&too_lte=${to}`);
            const movies = await res.json();
            console.log(movies);
            this.setState({
                movies: movies
        });
        } catch(e){
            console.log(e);
        }
    }

    async componentDidMount(){
        try{
            const res = await fetch(`http://localhost:8000/api/ebike`);
            const movies = await res.json();
            // console.log(movies);
            this.setState({
                movies: movies
            });
        } catch(e){
            console.log(e);
        }
    }
    render() {
        return (
            <div className="container" style={{marginTop:"20px"}}>
               <DateForm loaddata={this.getData}/>
               
                <div className="bg-white"  style={{padding:"15px",borderTop: "2px solid #CCEFDC"}}>
                    <table class="table table-hover table-lg " style={{marginTop:"20px"}}>
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">Bike Id</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">Avgerage Speed</th>
                        <th scope="col">Kg Transported</th>
                        <th scope="col">CO2 Saved</th>
                        <th scope="col">Additional Boxes</th>
                        <th scope="col">No Of User</th>
                        </tr>
                    </thead>
            {/* 
             */}

                {this.state.movies.map( c => 
                    <tbody key={c.id} >
                        <tr>
                        <td>{c.pk}</td>
                        <td ><a href={'eoverview/'+ c.pk} style={{color:"#13B760"}} class="font-weight-bold">{c.bikeid}</a></td>
                        <td>{c.milage} Km</td>
                        <td>{c.movingtime}</td>
                        <td >{c.averagespeed} km/hr</td>
                        <td>{c.kgtrasported} Kg</td>
                        <td>{c.co2} mg </td>
                        <td>{c.additionalbox}</td>
                        <td>{c.nouser}</td>
                        </tr> 
                    </tbody>
                )}
                <Summery />
                    </table>
            </div>        
            </div>
        )
    }
}

export default ElectricBike;
