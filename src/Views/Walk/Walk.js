import React, { Component } from 'react'

class Walk extends Component {
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

                <h3 className="text-center" style={{marginTop:"10px"}}> Walk All List </h3>

                    <table class="table table-bordered table-striped" style={{marginTop:"10px"}}>
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Kilograms Transpored</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td ><a href="/overview/3443" className="text-primary">Anybody</a></td>
                        <td>14</td>
                        <td>34:00</td>
                        </tr>

                        <tr>
                        <th scope="row">2</th>
                        <td ><a href="/overview/3443" className="text-primary">Anybody</a></td>
                        <td>14</td>
                        <td>34:00</td>
                        </tr>


                        <tr>
                        <th scope="row">3</th>
                        <td ><a href="/overview/3443" className="text-primary">Anybody</a></td>
                        <td>14</td>
                        <td>34:00</td>
                        </tr>


                        <tr>
                        <th scope="row">4</th>
                        <td ><a href="/overview/3443" className="text-primary">Anybody</a></td>
                        <td>14</td>
                        <td>34:00</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col" className="text-dark"><strong>Summery</strong></th>
                        <th scope="col" className="text-primary">232</th>
                        <th scope="col" className="text-primary">34</th>
                        </tr>
                    </thead>

                    </table>
           </div>
        )
    }
}

export default Walk
