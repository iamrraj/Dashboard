import React, { Component } from 'react'

class ClassicBike extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"20px"}}>
                    <center>
                        <form className="col-sm-3">
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Select Date</option>
                                <option value="2019-08">2019-08</option>
                                <option value="2019-07">2019-07</option>
                                <option value="2019-06">2019-06</option>
                                <option value="2019-05">2019-05</option>
                                <option value="2019-04">2019-04</option>
                                <option value="2019-03">2019-03</option>
                            </select>
                        </form>
                    </center>

                <h3 className="text-center" style={{marginTop:"20px"}}> Classic Bike All List </h3>

                    <table class="table table-striped table-bordered" >
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Bike Id</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">Avgerage Speed</th>
                        <th scope="col">Kilograms Transpored</th>
                        <th scope="col">Safe Co2</th>
                        <th scope="col">No Of User</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td ><a href="/overview/4343" className="text-primary">463643</a></td>
                        <td>14</td>
                        <td>34:00</td>
                        <th >12</th>
                        <td>34</td>
                        <td>676 </td>
                        <td>4</td>
                        </tr>

                        <tr>
                        <th scope="row">2</th>
                        <td ><a href="/overview/4343" className="text-primary">525255</a></td>
                        <td>14</td>
                        <td>34:00</td>
                        <th >12</th>
                        <td>34</td>
                        <td>676 </td>
                        <td>4</td>
                        </tr>


                        <tr>
                        <th scope="row">3</th>
                        <td ><a href="/overview/4343" className="text-primary">525225</a></td>
                        <td>14</td>
                        <td>34:00</td>
                        <th >12</th>
                        <td>34</td>
                        <td>676 </td>
                        <td>4</td>
                        </tr>


                        <tr>
                        <th scope="row">4</th>
                        <td ><a href="/overview/4343" className="text-primary">325223</a></td>
                        <td>14</td>
                        <td>34:00</td>
                        <th >12</th>
                        <td>34</td>
                        <td>676 </td>
                        <td>4</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col" className="text-dark"><strong>Summery</strong></th>
                        <th scope="col" className="text-primary">232</th>
                        <th scope="col" className="text-primary">4545</th>
                        <th scope="col" className="text-primary">5353</th>
                        <th scope="col" className="text-primary">4311</th>
                        <th scope="col" className="text-primary">32</th>
                        <th scope="col" className="text-primary">34</th>
                        </tr>
                    </thead>

                    </table>


                
            </div>
        )
    }
}

export default ClassicBike;
