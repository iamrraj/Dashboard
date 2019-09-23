import React, { Component } from 'react'
import Summery from './summery'
import DateForm from '../Electric/DateForm'


export class user extends Component {
    constructor(props){
        super(props);
        this.state={
            value: props.value,
            user:[],
        };

    }
    async componentDidMount(){
        try{
            const res = await fetch(`http://localhost:8000/api/user`);
            const user = await res.json();
            console.log(user)
            this.setState({
                user: user
            });
        }catch(e){
            console.log(e)
        }
    }

    // Get Data from filter date
    getData = async(e) =>{
        try{
            const from = e.target.elements.from.value;
            const to = e.target.elements.to.value;
            e.preventDefault();   
            const res = await fetch(`http://localhost:8000/api/user?fromm__gte=${from}&too_lte=${to}`);
            const user= await res.json();
            console.log(user);
            this.setState({
                user: user
        });
        } catch(e){
            console.log(e);
        }
    }


   

    render() {
        return (
            <div className="container" style={{marginTop:"20px"}}>
                <DateForm loaddata={this.getData}/>

                {/* <h3 className="text-center" style={{marginTop:"10px"}}> User Details: &nbsp;<strong> POSTMAN NAME</strong> </h3> */}
                <div className="bg-white"  style={{padding:"15px",borderTop: "2px solid #CCEFDC"}}>
                    <table class="table " style={{marginTop:"20px"}}>
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">User</th>
                        <th scope="col">Traveled by walk</th>
                        <th scope="col">Distributed by Wal</th>
                        <th scope="col">Traveld By CB</th>
                        <th scope="col">Distributed by CB</th>
                        <th scope="col">Traveld By EB</th>
                        <th scope="col">Distributed by EB</th>
                        <th scope="col">Total Milage</th>
                        <th scope="col">Total Weight Transported</th>
                        </tr>
                    </thead>
                {this.state.user.map(c=>
                    <tbody key={c.pk}>
                        <tr >
                        <th scope="row">{c.pk}</th>
                        <td ><a href={'uoverview/'+ c.pk} style={{color:"#13B760"}}  class="font-weight-bold">{c.user}</a></td>
                        <td>{c.trwalk} Km</td>
                        <td>{c.Dtwalk} Kg</td>
                        <td>{c.trclassic} Km</td>
                        <td>{c.Dtclassic} Kg</td>
                        <td>{c.trelectric} Km</td>
                        <td>{c.Dtelectric} Kg</td>
                        <td>{c.totalMilage} Km</td>
                        <td>{c.totalweight} Kg</td>
                        </tr>
                    </tbody>
                )}
                <Summery />
                 {/* <thead>
                    <tr className="thead">
                    <th scope="col"></th>
                    <th scope="col" className="font-weight-bold">Summery</th>
                    <th scope="col">12 Km</th>
                    <th scope="col" className="text-primary">13 Kg</th>
                    <th scope="col" className="text-primary">34 km</th>
                    <th scope="col" className="text-primary">234 kg</th>
                    <th scope="col">45 km</th>
                    <th scope="col">123 Kg</th>
                    <th scope="col">13 Km</th>
                    <th scope="col">453 Kgs</th>
                    </tr>
                </thead> */}
                
                

                    </table>
                </div>
           </div>
        )
    }
}

export default user;
