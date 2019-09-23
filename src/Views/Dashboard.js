import React, { Component } from 'react'
import Datee from './Datee'
import walk from '../img/walk.png'
import map from '../img/map.png'
import leaf from '../img/leaf.png'
import weight from '../img/weight.png'
import classic from '../img/lol.png'
import electric from '../img/electric.png'
import DateForm from './Electric/DateForm'


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            startDate:this.props.value,
            dash:[],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate:date
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main.format('L'));
    }


    async componentDidMount(){
        try{
            const res = await fetch(`http://localhost:8000/dapi/dashboard`);
            const dash = await res.json();
            console.log(dash)
            this.setState({
                dash: dash
            });
        }catch(e){
            console.log(e)
        }
    }



    render() {
        
        return (
            <div className="container" style={{marginTop:"20px"}}>
           
                <div className="row">
                    <div className="col-sm-3" style={{marginTop:"12px"}}>
                       Hello <strong>UserName,</strong>
                       <Datee/>
                    </div>
            <div className="col-sm-8">
                       <DateForm/>
            </div>
                   
                </div>

<div style={{background:"white", padding:"25px"}} >

{this.state.dash.map(c=>
<div className="cont">
            <h4 className="text-center font-weight-bolder">SUMMERY</h4>

                <div class="row">
                <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <div className="box">
                            <div className="n">  
                            <br></br>
                                <img src={map} alt="map" className="imag" />
                                    <h5>{ c.total_milage }  Km </h5>
                                    <p id="p">Total Milage</p>
                            </div>  
                        </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <div className="box">
                            <div className=" n">
                            <br></br>
                                <img src={weight} alt="weight" className="imag" />
                                    <h5>{c.total_weight} Kgs</h5>
                                    <p id="p">Total boxes weight <br /></p>
                            </div>  
                        </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <div className="box">
                            <div className=" n">
                            <br></br>
                                <img src={leaf} alt="leaf" className="imag" />
                                    <h5>845 Mg </h5>
                                    <p id="p">Total Save Co2 <br /></p>
                            </div>  
                        </div>
                    </div>
                            
                </div>
                {/* <!-- end row --> */}

               <br></br>

               <h4 className="text-center font-weight-bolder" style={{marginTop:"45px"}}>DISTRIBUTION TYPE</h4> 

                <div className="row" >
                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <h4 className="text-center w">Walk</h4>
                            <div className="box">
                                <div className=" r">
                                <br></br>
                                       <img src={walk} alt="walk" className="imag" />
                                        <h5>{c.total_travel_walk} Km </h5>
                                        <p id="p">Traveled By Walk</p>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <h4 className="text-center w">Electric Bicycle</h4>
                            <div className="box">
                                <div className=" r" >
                                <br></br>
                                    <img src={electric} alt="electric" className="imag" />
                                        <h5>{c.total_travel_electric} Kms</h5>
                                        <p id="p">Traveled By electric bicycle</p>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <h4 className="text-center w">Classic Bike</h4>
                            <div className="box">
                                <div className=" r">
                                <br></br>
                                        <img src={classic} alt="classic" className="imag" style={{height:"30px", marginTop:"15px"}} />
                                        <h5>{c.total_travel_classic} Kms </h5>
                                        <p id="p">Traveled By classic  bicycle</p>
                                </div>  
                            </div>
                    </div>


                </div>

                {/* <!-- end row --> */}
{/* <!-- end row --> */}

               
<div className="row" style={{marginTop:"30px"}}>
                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                            <div className="box">
                                <div className=" r">
                                <br></br>
                                    <img src={walk} alt="walk" className="imag" />
                                        <h5>{c.total_distribute_walk} Kgs </h5>
                                        <p id="p">Distributed by  walk</p>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                            <div className="box">
                                <div className=" r">
                                <br></br>
                                    <img src={electric} alt="walk" className="imag" />
                                        <h5>{c.total_distribute_electric}  Kgs </h5>
                                        <p id="p">Distributed by electric bicycle</p>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                            <div className="box">
                                <div className=" r">
                                <br></br>
                                    <img src={classic} alt="walk" className="imag" style={{height:"30px", marginTop:"15px"}} />
                                        <h5>{c.total_distribute_classic} Kgs </h5>
                                        <p id="p">Distributed By classic bike</p>
                                </div>  
                            </div>
                    </div>
                </div>
                </div>
            //  {/* End Here Col-6 */}
        )}
        </div>
       
        </div>
           
        )
    }
}

export default Dashboard;
