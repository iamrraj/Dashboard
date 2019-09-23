import React, { Component } from 'react'
import Summery from './Summery'
import DateForm from '../Electric/DateForm'

class ClassicBike extends Component {
    constructor(props){
        super(props);
        this.state={
            movies:[],
        }
    }

    // Get Data from filter date
    getData = async(e) =>{
        try{
            const from = e.target.elements.from.value;
            const to = e.target.elements.to.value;
            e.preventDefault();   
            const res = await fetch(`http://localhost:8000/api/cbike?fromm__gte=${from}&too_lte=${to}`);
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
            const res = await fetch(`http://localhost:8000/api/cbike`);
            const movies = await res.json();
            console.log(movies)
            this.setState({
                movies: movies
            });
        }catch(e){
            console.log(e);
        }
    }
    render() {
        return (
            <div className="container" style={{marginTop:"20px"}}>
               <DateForm loaddata={this.getData}/>
                {/* <h3 className="text-center" style={{marginTop:"20px"}}> All List Of ClassicBike </h3> */}
                <div className="bg-white"  style={{padding:"15px",borderTop: "2px solid #CCEFDC"}}>
                    <table class="table table-hover" style={{marginTop:"20px"}} >
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">Bike Id and User</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">Avgerage Speed</th>
                        <th scope="col">Kilograms Transpored</th>
                        <th scope="col">Safe Co2</th>
                        <th scope="col">Additional Boxex</th>

                        </tr>
                    </thead>
                {this.state.movies.map( c => 
                    <tbody key={c.pk}>
                        <tr >
                        <td>{c.pk}</td>
                        <td  ><a href={'coverview/'+ c.pk} style={{color:"#13B760"}} class="font-weight-bold">{c.bikeid}</a></td>
                        <td>{c.milage} Km</td>
                        <td>{c.movingtime}</td>
                        <td>{c.averagespeed} Km/hr</td>
                        <td>{c.kgtrasported} Kg</td>
                        <td>{c.co2} Mg </td>
                        <td>{c.additionalbox}</td>
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

export default ClassicBike;
