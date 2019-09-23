import React, { Component } from 'react'
import Summery from './Summery'
import DateForm from '../Electric/DateForm'

class Walk extends Component {
    constructor(props){
        super(props);
        this.state={
            value: props.value,
            walk:[],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event){
        // this.setState({ value: event.target.value});
        event.preventDefault();
    }

    async componentDidMount(){
        try{
            const res = await fetch(`http://localhost:8000/api/walk`);
            const walk = await res.json();
            this.setState({
                walk: walk
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
            const res = await fetch(`http://localhost:8000/api/walk?fromm__gte=${from}&too_lte=${to}`);
            const walk = await res.json();
            console.log(walk);
            this.setState({
                walk: walk
        });
        } catch(e){
            console.log(e);
        }
    }


    // handleChange(event) {
    //     this.setState({ value: event.target.value});
    // }
    render() {
        return (
            <div className="container" style={{marginTop:"20px"}}>
                <DateForm  loaddata={this.getData}/>

                {/* <h3 className="text-center" style={{marginTop:"10px"}}> Walk All List </h3> */}
<div className="bg-white"  style={{padding:"15px",borderTop: "2px solid #CCEFDC"}}>
                    <table class="table " style={{marginTop:"20px"}}>
                    <thead style={{background:"#CCEFDC"}}>
                        <tr >
                        <th scope="col">Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">Kg Transpored</th>
                        <th scope="col">Addition Boxex</th>


                        </tr>
                    </thead>
                {this.state.walk.map(c=>  
                    <tbody key={c.pk}>
                        <tr>
                        <th scope="row">{c.pk}</th>
                        <td ><a href={'woverview/'+ c.pk} style={{color:"#13B760"}} class="font-weight-bold">{c.username} </a></td>
                        <td>{c.milage} Km</td>
                        <td>{c.movingtime}</td>
                        <td>{c.kgtransported} Kgs</td>
                        <td>{c.additionalbox}</td>
                        </tr>
                    </tbody>
                )}
                <Summery />
                    </table>
                    </div>
           </div>
        )

    }
}

export default Walk
