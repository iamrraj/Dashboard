import React, { Component } from 'react'

class ElectricBike extends Component {
    constructor(props){
        super(props);
        this.state ={
            movies:[],
        }
    }

    async componentDidMount(){
        try{
            const res = await fetch(`http://softbike.herokuapp.com/api/ebike`);
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
                <form >
                    <div className="row">
                        <div className="col-sm-4">
                            <div class="form-group">
                                From 
                                <input type="date" name="from"  class="form-control datepicker" style={{ width:"150px",color:"#13B760"}} />
                            
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div class="form-group">
                                To
                                <input type="date" name="from"  class="form-control datepicker" style={{ width:"150px",color:"#13B760"}} />
                            
                            </div>
                        </div>
                    </div>
                </form>

                {/* <h3 className="text-center" style={{marginTop:"20px"}}>All Electric Bike list </h3> */}
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
                        <td  >{c.pk}</td>
                        <td ><a href={'eoverview/'+ c.pk} style={{color:"#13B760"}} class="font-weight-bold">{c.bikeid}</a></td>
                        <td>{c.mileage} Km</td>
                        <td>{c.movingtime}</td>
                        <td >{c.averagespeed} km/hr</td>
                        <td>{c.kgtrasported} Kg</td>
                        <td>{c.co2} mg </td>
                        <td>{c.additionalbox}</td>
                        <td>{c.nouser}</td>
                        </tr> 
                    </tbody>
                )}

                    <thead className="thead">
                        <tr >
                        <th scope="col"></th>
                        
                        <th scope="col" className="text-dark"><strong>Summery</strong></th>
                        <th scope="col" className="text-primary">45 Km</th>
                        <th scope="col" className="text-primary">5h 56min</th>
                        <th scope="col" className="text-primary">14 km/hr</th>
                        <th scope="col" className="text-primary">67 kg</th>
                        <th scope="col" className="text-primary">190 mg</th>
                        <th scope="col" className="text-primary">12</th>
                        <th scope="col" className="text-primary">5</th>
                        </tr>
                    </thead>
                    </table>
</div>

                
            </div>
        )
    }
}

export default ElectricBike;
