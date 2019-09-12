import React, { Component } from 'react'

class Walk extends Component {
    constructor(props){
        super(props);
        this.state={
            value: props.value,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event){
        // this.setState({ value: event.target.value});
        event.preventDefault();
    }

    // handleChange(event) {
    //     this.setState({ value: event.target.value});
    // }
    render() {
        return (
            <div className="container" style={{marginTop:"20px"}}>
                <form onSubmit={this.handleSubmit} >
                    <div className="row">
                        <div className="col-sm-4">
                            <div class="form-group">
                                From 
                                <input type="date" name="from"  class="form-control datepicker" value={this.state.value} style={{ width:"150px",color:"#13B760"}} />
                            
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div class="form-group">
                                To
                                <input type="date" name="to"  class="form-control datepicker" value={this.state.value} style={{ width:"150px",color:"#13B760"}} />
                            
                            </div>
                        </div>
                        {/* <input type="submit" /> */}
                    </div>
                </form>

                {/* <h3 className="text-center" style={{marginTop:"10px"}}> Walk All List </h3> */}
<div className="bg-white"  style={{padding:"15px"}}>
                    <table class="table table-bordered table-striped" style={{marginTop:"10px"}}>
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">Kg Transpored</th>
                        <th scope="col">Addition Boxex</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/3443" style={{color:"#13B760"}} class="font-weight-bold">WhatEver </a></td>
                        <td>14 Km</td>
                        <td>2hr 12min</td>
                        <td>11Kg</td>
                        <td>4</td>
                        </tr>

                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/3443" style={{color:"#13B760"}} class="font-weight-bold">Anyone </a></td>
                        <td>14 Km</td>
                        <td>2hr 12min</td>
                        <td>11Kg</td>
                        <td>4</td>
                        </tr>

                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/3443" style={{color:"#13B760"}} class="font-weight-bold">Who Cares </a></td>
                        <td>14 Km</td>
                        <td>2hr 12min</td>
                        <td>11Kg</td>
                        <td>4</td>
                        </tr>

                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/3443" style={{color:"#13B760"}} class="font-weight-bold">Does Not Matter </a></td>
                        <td>14 Km</td>
                        <td>2hr 12min</td>
                        <td>11Kg</td>
                        <td>4</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr style={{background:"#F5FAF3"}}>
                        <th scope="col"></th>
                        <th scope="col" className="text-dark"><strong>Summery</strong></th>
                        <th scope="col" className="text-primary">14 Km</th>
                        <th scope="col" className="text-primary">2hr 12min</th>
                        <th scope="col" className="text-primary">11kgs</th>
                        <th scope="col" className="text-primary">4</th>
                        </tr>
                    </thead>

                    </table>
                    </div>
           </div>
        )

    }
}

export default Walk
