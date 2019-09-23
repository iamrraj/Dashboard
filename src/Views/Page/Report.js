import React, { Component } from 'react'
import ReactToExcel from 'react-html-table-to-excel'

class Report extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"90px", background:"white", padding:"15px"}} >
    
                <h5 className="font-weight-bold" style={{marginTop:"10px"}}> ELECTRIC BIKE DISTRIBUTION </h5>
                <p>from 23-09-2019 to 23-10-2019</p>

                <table class="table " id="table-to-xls" >
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">Bike Id</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">Avgerage Speed</th>
                        <th scope="col">Kilograms Transpored</th>
                        <th scope="col">Safe Co2</th>
                        <th scope="col">Additional Boxex</th>
                        <th scope="col">Number Of User</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/4343" style={{color:"#13B760"}} class="font-weight-bold">RE01</a></td>
                        <td>45 Km</td>
                        <th >4h 11min</th>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>190 Mg </td>
                        <td>14</td>
                        <td>4</td>
                        </tr>

                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/4343" style={{color:"#13B760"}} class="font-weight-bold">RE01</a></td>
                        <td>45 Km</td>
                        <th >4h 11min</th>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>190 Mg </td>
                        <td>14</td>
                        <td>4</td>
                        </tr>

                         <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/4343" style={{color:"#13B760"}} class="font-weight-bold">RE01</a></td>
                        <td>45 Km</td>
                        <th >4h 11min</th>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>190 Mg </td>
                        <td>14</td>
                        <td>4</td>
                        </tr>


                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/4343" style={{color:"#13B760"}} class="font-weight-bold">RE01</a></td>
                        <td>45 Km</td>
                        <th >4h 11min</th>
                        <td>14 Km/hr</td>
                        <td>67Kg</td>
                        <td>190 Mg </td>
                        <td>14</td>
                        <td>4</td>
                        </tr>


                    </tbody>

                    <thead className="thead" >
                        <tr>
                        <th scope="col"></th>
                        <th scope="col" className="text-dark"><strong>Summery</strong></th>
                        <th scope="col" className="text-primary">45 Km</th>
                        <th scope="col" className="text-primary">4h 11min</th>
                        <th scope="col" className="text-primary">14 km/hr</th>
                        <th scope="col" className="text-primary">67 Kg</th>
                        <th scope="col" className="text-primary">190 Mg</th>
                        <th scope="col" className="text-primary">14</th>
                        <th scope="col" className="text-primary">4</th>
                        </tr>
                    </thead>
                    </table>
                    <center>
                    <ReactToExcel
                        className="btn btn-success btn-lg bb"
                        table="table-to-xls"
                        filename ="excelFile"
                        sheet="sheet 1"
                        buttonText ="Export CSV"
                    />
                    </center>
              </div>

        )
    }
}

export default Report;
