import React, { Component } from 'react'

class ElectricBike extends Component {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         movies:[],
    //     }
    // }

    // async componentDidMount(){
    //     try{
    //         const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US`);
    //         const movies = await res.json();
    //         console.log(movies);
    //         this.setState({
    //             movies: movies.results
    //         });
    //     } catch(e){
    //         console.log(e);
    //     }
    // }
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
                    <table class="table  " style={{marginTop:"20px"}}>
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
     
                    <tbody  >
                        <tr >
                        <th scope="row" >1</th>
                        <td ><a href="/overview/e" style={{color:"#13B760"}} class="font-weight-bold">RE01</a></td>
                        <td>45 Km</td>
                        <td>5h 56min</td>
                        <th >14 km/hr</th>
                        <td>67 Kg</td>
                        <td>190 mg </td>
                        <td>12</td>
                        <td>5</td>
                        </tr>   


                        <tr >
                        <th scope="row" >2</th>
                        <td  ><a href="/overview/e"className="font-weight-bold" style={{color:"#13B760"}}>RE01</a></td>
                        <td>45 Km</td>
                        <td>5h 56min</td>
                        <th >14 km/hr</th>
                        <td>67 Kg</td>
                        <td>190 mg </td>
                        <td>12</td>
                        <td>5</td>
                        </tr>   


                        <tr >
                        <th scope="row" >3</th>
                        <td  ><a href="/overview/e" className="font-weight-bold" style={{color:"#13B760"}}>RE01</a></td>
                        <td>45 Km</td>
                        <td>5h 56min</td>
                        <th >14 km/hr</th>
                        <td>67 Kg</td>
                        <td>190 mg </td>
                        <td>12</td>
                        <td>5</td>
                        </tr>   


                        <tr >
                        <th scope="row" >4</th>
                        <td  ><a href="/overview/e" className="font-weight-bold" style={{color:"#13B760"}}>RE01</a></td>
                        <td>45 Km</td>
                        <td>5h 56min</td>
                        <th >14 km/hr</th>
                        <td>67 Kg</td>
                        <td>190 mg </td>
                        <td>12</td>
                        <td>5</td>
                        </tr>   


                        <tr >
                        <th scope="row" >5</th>
                        <td  ><a href="overview/electric" className="font-weight-bold" style={{color:"#13B760"}}>RE01</a></td>
                        <td>45 Km</td>
                        <td>5h 56min</td>
                        <th >14 km/hr</th>
                        <td>67 Kg</td>
                        <td>190 mg </td>
                        <td>12</td>
                        <td>5</td>
                        </tr>   
                    </tbody>

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
