import React, { Component } from 'react'

class ClassicBike extends Component {
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

                <h3 className="text-center" style={{marginTop:"20px"}}> All List Of ClassicBike </h3>

                    <table class="table table-striped table-bordered" >
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
                    <tbody>
                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/4343" style={{color:"#13B760"}} class="font-weight-bold">CB(Anna Joly)</a></td>
                        <td>45 Km</td>
                        <th >4h 11min</th>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>190 Mg </td>
                        <td>14</td>
                        </tr>

                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/4343" style={{color:"#13B760"}} class="font-weight-bold">CB(Anna Joly)</a></td>
                        <td>45 Km</td>
                        <th >4h 11min</th>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>190 Mg </td>
                        <td>14</td>
                        </tr>


                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/4343" style={{color:"#13B760"}} class="font-weight-bold">CB(Anna Joly)</a></td>
                        <td>45 Km</td>
                        <th >4h 11min</th>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>190 Mg </td>
                        <td>14</td>
                        </tr>

                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/4343" style={{color:"#13B760"}} class="font-weight-bold">CB(Anna Joly)</a></td>
                        <td>45 Km</td>
                        <th >4h 11min</th>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>190 Mg </td>
                        <td>14</td>
                        </tr>                
                    </tbody>

                    <thead>
                        <tr>
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
        )
    }
}

export default ClassicBike;
