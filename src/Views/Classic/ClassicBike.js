import React, { Component } from 'react'

class ClassicBike extends Component {
    constructor(props){
        super(props);
        this.state={
            movies:[],
        }
    }

    async componentDidMount(){
        try{
            const res = await fetch(`http://softbike.herokuapp.com/api/cbike`);
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
                        <td ><a href={'coverview/'+ c.pk} style={{color:"#13B760"}} class="font-weight-bold">{c.bikeid}</a></td>
                        <td>{c.mileage} Km</td>
                        <td>{c.movingtime}</td>
                        <td>{c.averagespeed} Km/hr</td>
                        <td>{c.kgtrasported}Kg</td>
                        <td>{c.co2} Mg </td>
                        <td>{c.additionalbox}</td>
                        </tr>      
                    </tbody>
                )}

                    <thead>
                        <tr className="thead">
                        <th scope="col"></th>
                        <th scope="col" className="text-dark"><strong>Summery</strong></th>
                        <th scope="col" className="text-primary">45 Km</th>
                        <th scope="col" className="text-primary">4h 11min</th>
                        <th scope="col" className="text-primary">14 km/hr</th>
                        <th scope="col" className="text-primary">67 Kg</th>
                        <th scope="col" className="text-primary">190 Mg</th>
                        <th scope="col" className="text-primary">14</th>
                        </tr>
                    </thead>

                    </table>
</div>

                
            </div>
        )
    }
}

export default ClassicBike;
