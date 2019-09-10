import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';


export class Cdetails extends Component {
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
                label: 'UserName(Postman)',
                field: 'name',
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
                label: 'Total Time',
                field: 'time',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Average Speed',
                field: 'average',
                sort: 'asc',
                width: 100
              },
              
            ],
            rows: [
              {
                id: '1',
                date: '24-02-2019',
                name: 'Anybody',
                milage: '15',
                time: '45 min',
                average: '09'
              },
              {
                id: '2',
                date: '29-02-2019',
                name: 'Anybody',
                milage: '12',
                time: '55 min',
                average: '13'
              },
              {
                id: '3',
                date: '02-02-2019',
                name: 'Anybody',
                milage: '13',
                time: '15 min',
                average: '15'
              },
              {
                id: '4',
                date: '11-02-2019',
                name: 'Anybody',
                milage: '12',
                time: '23 min',
                average: '14'
              }
              
            ]
          };        
        return (
        <div className="container" >
        
        <h1 className="text-center" style={{marginTop:"10px"}}>Classic Bike  Details <stron>66767</stron></h1>
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

export default Cdetails;
