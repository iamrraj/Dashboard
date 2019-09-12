import React, { Component } from 'react'
// import { MDBDataTable } from 'mdbreact';

class Udetails extends Component {
    render() {
        // const data = {
        //     columns: [
        //     {
        //         label: 'Id',
        //         field: 'id',
        //         sort: 'asc',
        //         width: 150
        //         },
        //       {
        //         label: 'Name',
        //         field: 'name',
        //         sort: 'asc',
        //         width: 150
        //       },
        //       {
        //         label: 'Walk Milage',
        //         field: 'wmilage',
        //         sort: 'asc',
        //         width: 270
        //       },
        //       {
        //         label: 'Walk Bosex Weight',
        //         field: 'wweight',
        //         sort: 'asc',
        //         width: 200
        //       },
        //       {
        //         label: 'Electric Bike Milage',
        //         field: 'emilage',
        //         sort: 'asc',
        //         width: 150
        //       },
        //       {
        //         label: 'Weight Boxes Of Electric Bike',
        //         field: 'ebox',
        //         sort: 'asc',
        //         width: 100
        //       },
        //       {
        //         label: 'Classic Bike Milage',
        //         field: 'cmilage',
        //         sort: 'asc',
        //         width: 150
        //       },
        //       {
        //         label: 'Classic Bike Of Weight Box',
        //         field: 'cweight',
        //         sort: 'asc',
        //         width: 100
        //       },
        //       {
        //         label: 'Total Distance',
        //         field: 'distance',
        //         sort: 'asc',
        //         width: 150
        //       },
        //       {
        //         label: 'Total Weight',
        //         field: 'tweight',
        //         sort: 'asc',
        //         width: 100
        //       },
              
        //     ],
        //     rows: [
        //       {
        //         id: '1',
        //         name: 'Anybody',
        //         wmilage: '12',
        //         wweight: '2 Kg',
        //         emilage: '14',
        //         ebox: '2 Kg',
        //         cmilage:'12',
        //         cweight:'1 kg',
        //         distance:'12',
        //         tweight:'5 kg'
        //       },

        //       {
        //         id: '2',
        //         name: 'Anybody',
        //         wmilage: '09',
        //         wweight: '2.5 Kg',
        //         emilage: '12',
        //         ebox: '1.5 Kg',
        //         cmilage:'12',
        //         cweight:'1 kg',
        //         distance:'10',
        //         tweight:'5 kg'
        //       },

        //       {
        //         id: '3',
        //         name: 'Anybody',
        //         wmilage: '15',
        //         wweight: '1 Kg',
        //         emilage: '17',
        //         ebox: '2.5 Kg',
        //         cmilage:'11',
        //         cweight:'1.5 kg',
        //         distance:'08',
        //         tweight:'5 kg'
        //       },

        //       {
        //         id: '4',
        //         name: 'Anybody',
        //         wmilage: '07',
        //         wweight: '3 Kg',
        //         emilage: '16',
        //         ebox: '1.5 Kg',
        //         cmilage:'11',
        //         cweight:'0.5 kg',
        //         distance:'16',
        //         tweight:'5 kg'
        //       },
              
        //     ]
        //   };        
        return (
        <div className="container" >
        
        
            {/* <MDBDataTable
            striped
            bordered
            hover
            data={data} */}
         <div className="bg-white"  style={{padding:"15px",borderTop: "2px solid #CCEFDC"}}>
          <a href="/user" style={{color:"black", fontSize:"16px"}}>
               <i class="fa fa-arrow-left fa-1x" aria-hidden="true" style={{color:"#CCEFDC",height:"29px"}}></i>
                 Anyone &nbsp; <i className="fa fa-mobile-alt fa-2x" style={{color:"rgba(19, 183, 96, 1.0)",opacity:"0.6"}}></i>
          </a>
                    <table class="table " style={{marginTop:"20px"}} >
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">Date</th>
                        <th scope="col">Distribution Type</th>
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
                        <td>RE</td>
                        <td>45 Km</td>
                        <td>10 Kg</td>
                        <td>5hr 11min</td>
                        <td>8</td>
                        <td><i className="fa fa-map" style={{color:"rgba(19, 183, 96, 1.0)",opacity:"0.6", fontSize:"19px"}}></i></td>
                        </tr>

                        <tr >
                        <th scope="row">2</th>
                        <td >12-09-2019 </td>
                        <td>DP</td>
                        <td>45 Km</td>
                        <td>10 Kg</td>
                        <td>5hr 11min</td>
                        <td>8</td>
                        <td><i className="fa fa-map" style={{color:"rgba(19, 183, 96, 1.0)",opacity:"0.6", fontSize:"19px"}}></i></td>
                        </tr>
                        
                        <tr >
                        <th scope="row">3</th>
                        <td >12-09-2019 </td>
                        <td>CK</td>
                        <td>45 Km</td>
                        <td>16 Kg</td>
                        <td>5hr 11min</td>
                        <td>8</td>
                        <td><i className="fa fa-map" style={{color:"rgba(19, 183, 96, 1.0)",opacity:"0.6", fontSize:"19px"}}></i></td>
                        </tr>

                        
                        <tr >
                        <th scope="row">4</th>
                        <td >12-09-2019 </td>
                        <td>MP</td>
                        <td>45 Km</td>
                        <td>11 Kg</td>
                        <td>5hr 11min</td>
                        <td>8</td>
                        <td><i className="fa fa-map" style={{color:"rgba(19, 183, 96, 1.0)",opacity:"0.6", fontSize:"19px"}}></i></td>
                        </tr>

                        <tr >
                        <th scope="row">5</th>
                        <td >12-09-2019 </td>
                        <td>CM</td>
                        <td>45 Km</td>
                        <td>14 Kg</td>
                        <td>5hr 11min</td>
                        <td>8</td>
                        <td><i className="fa fa-map" style={{color:"rgba(19, 183, 96, 1.0)",opacity:"0.6", fontSize:"19px"}}></i></td>
                        </tr>

                    </tbody>

                    <thead>
                        <tr className="thead">
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col" className="text-dark"><strong>Summery</strong></th>
                        <th scope="col" className="text-primary">45 Km</th>
                        <th scope="col" className="text-primary">14 Kgs</th>
                        <th scope="col" className="text-primary">5h 11min</th>
                        <th scope="col" className="text-primary">8</th>
                        <th scope="col" className="text-primary"></th>
                        </tr>
                    </thead>

                    </table>
                </div>
         
        </div>
        )
    }
}


export default Udetails;
