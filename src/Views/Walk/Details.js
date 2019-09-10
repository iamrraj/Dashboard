import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

export class Details extends Component {
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
                label: 'Date',
                field: 'date',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Distribution Type',
                field: 'position',
                sort: 'asc',
                width: 270
              },
              {
                label: 'Milage',
                field: 'milage',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Boxes Weight',
                field: 'weight',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Addition Pickup',
                field: 'pickup',
                sort: 'asc',
                width: 100
              },
              
            ],
            rows: [
              {
                id: '1',
                date: '24-02-2019',
                position: 'Anybody',
                milage: '23',
                weight: '45min',
                pickup: '34'
              },
              {
                id: '2',
                date: '22-02-2019',
                position: 'Anybody',
                milage: '43',
                weight: '56mins',
                pickup: '34'
              },
              {
                id: '3',
                date: '25-02-2019',
                position: 'Anybody',
                milage: '33',
                weight: '1hr',
                pickup: '34'
              },
              {
                id: '4',
                date: '26-02-2019',
                position: 'Anybody',
                milage: '25',
                weight: '32min',
                pickup: '34'
              },   
            ]
          };        
        return (
        <div className="container" >
        
        <h1 className="text-center" style={{marginTop:"10px"}}>Walk  Details <stron>66767</stron></h1>
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

export default Details;

