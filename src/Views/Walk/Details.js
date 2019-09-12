import React, { Component } from 'react'


export class Details extends Component {
    render() {      
        return (
        <div className="container" >
        
        <div className="bg-white"  style={{padding:"15px",borderTop: "2px solid #CCEFDC"}}>
          <a href="/walk" style={{color:"black"}}> <i class="fa fa-arrow-left fa-1x" aria-hidden="true" style={{color:"#CCEFDC",height:"20px"}}></i>  Anybody</a>
                    <table class="table " style={{marginTop:"20px"}} >
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">Date</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">KG Transported</th>
                        <th scope="col">Additional Boxex</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                        <th scope="row">1</th>
                        <td >12-09-2019 </td>
                        <td>45 Km</td>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>14</td>
                        </tr>

                        <tr >
                        <th scope="row">1</th>
                        <td >12-09-2019 </td>
                        <td>45 Km</td>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>14</td>
                        </tr>


                        <tr >
                        <th scope="row">1</th>
                        <td >12-09-2019 </td>
                        <td>45 Km</td>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>14</td>
                        </tr>

                        <tr >
                        <th scope="row">1</th>
                        <td >12-09-2019 </td>
                        <td>45 Km</td>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>14</td>
                        </tr>

                    </tbody>

                    <thead>
                        <tr className="thead">
                        <th scope="col"></th>
                        <th scope="col" className="text-dark"><strong>Summery</strong></th>
                        <th scope="col" className="text-primary">4h 11min</th>
                        <th scope="col" className="text-primary">14 km/hr</th>
                        <th scope="col" className="text-primary">67 Kg</th>
                        <th scope="col" className="text-primary">14</th>
                        </tr>
                    </thead>

                    </table>
                </div>

        </div>
        )
    }
}

export default Details;

