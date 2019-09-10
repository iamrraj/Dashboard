import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

class Udetails extends Component {
    render() {
        const data = {
            columns: [
            {
                label: 'Id',
                field: 'id',
                sort: 'asc',
                width: 150
                },
              {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Walk Milage',
                field: 'wmilage',
                sort: 'asc',
                width: 270
              },
              {
                label: 'Walk Bosex Weight',
                field: 'wweight',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Electric Bike Milage',
                field: 'emilage',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Weight Boxes Of Electric Bike',
                field: 'ebox',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Classic Bike Milage',
                field: 'cmilage',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Classic Bike Of Weight Box',
                field: 'cweight',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Total Distance',
                field: 'distance',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Total Weight',
                field: 'tweight',
                sort: 'asc',
                width: 100
              },
              
            ],
            rows: [
              {
                id: '1',
                name: 'Anybody',
                wmilage: '12',
                wweight: '2 Kg',
                emilage: '14',
                ebox: '2 Kg',
                cmilage:'12',
                cweight:'1 kg',
                distance:'12',
                tweight:'5 kg'
              },

              {
                id: '2',
                name: 'Anybody',
                wmilage: '09',
                wweight: '2.5 Kg',
                emilage: '12',
                ebox: '1.5 Kg',
                cmilage:'12',
                cweight:'1 kg',
                distance:'10',
                tweight:'5 kg'
              },

              {
                id: '3',
                name: 'Anybody',
                wmilage: '15',
                wweight: '1 Kg',
                emilage: '17',
                ebox: '2.5 Kg',
                cmilage:'11',
                cweight:'1.5 kg',
                distance:'08',
                tweight:'5 kg'
              },

              {
                id: '4',
                name: 'Anybody',
                wmilage: '07',
                wweight: '3 Kg',
                emilage: '16',
                ebox: '1.5 Kg',
                cmilage:'11',
                cweight:'0.5 kg',
                distance:'16',
                tweight:'5 kg'
              },
              
            ]
          };        
        return (
        <div className="container" >
        
        <h1 className="text-center" style={{marginTop:"10px"}}>User Name  Details <stron>66767</stron></h1>
            <MDBDataTable
            striped
            bordered
            hover
            data={data}
          />
        </div>
        )
    }
}


export default Udetails;
