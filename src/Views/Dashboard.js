import React, { Component } from 'react'
import Datee from './Datee'
import walk from '../img/walk.png'
import map from '../img/map.png'
import leaf from '../img/leaf.png'
import weight from '../img/weight.png'
import classic from '../img/lol.png'
import electric from '../img/electric.png'


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            startDate:this.props.value
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
    

  
    
    // handleDate(date){
    //     this.setState({date});
    // }
    

    render() {
        
        return (
            <div className="container" style={{marginTop:"20px"}}>
           
                <div className="row">
                    <div className="col-sm-3">
                       Hello <strong>UserName,</strong>
                       <Datee/>
                    </div>
            <div className="col-sm-8">
                <form>
                <div className="row">
                    <div className="col-sm-5">
                        <div class="form-group">
                            From 
                            <input type="date" name="from"  class="form-control datepicker" style={{ width:"170px",color:"#13B760"}} />
                        
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div class="form-group">
                            To
                            <input type="date" name="from"  class="form-control datepicker" style={{ width:"170px",color:"#13B760"}} />
                        
                        </div>
                    </div>

                    
                </div>
                </form>
            </div>
                   
                </div>

<div style={{background:"white", padding:"25px"}} >
<div className="cont">
            <h4 className="text-center font-weight-bolder">Summary</h4>

                <div class="row">
                <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <div className="box">
                            <div className="row container n">
                                <div className="col-sm-5  ">
                                <img src={map} alt="map" className="rectangle" />
                                </div>
                                <div className="col-sm-7">
                                    <h5>936 Km </h5>
                                    <p id="p">Total Milage <br /></p>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <div className="box">
                            <div className="row container n">
                                <div className="col-sm-5  ">
                                <img src={weight} alt="weight" className="rectangle" />
                                </div>
                                <div className="col-sm-7">
                                    <h5>346 Kgs</h5>
                                    <p id="p">Total boxes weight <br /></p>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <div className="box">
                            <div className="row container n">
                                <div className="col-sm-5 container ">
                                <img src={leaf} alt="leaf" className="rectangle" />
                                </div>
                                <div className="col-sm-7">
                                    <h5>845 Mg </h5>
                                    <p id="p">Total Save Co2 <br /></p>
                                </div>
                            </div>  
                        </div>
                    </div>
                            
                </div>
                {/* <!-- end row --> */}

               

                {/* <h4 className="text-center font-weight-bolder" style={{marginTop:"35px"}}>Distribution Type</h4> */}

                <div className="row" style={{marginTop:"35px"}}>
                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <h4>WALK DISTRIBUTION</h4>
                            <div className="box">
                                <div className="row container r">
                                    <div className="col-sm-5 ">
                                       <img src={walk} alt="walk" className="rectangle" />
                                    </div>
                                    <div className="col-sm-7">
                                        <h5>13 Km </h5>
                                        <p id="p">Traveled By <br />Walk</p>
                                    </div>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <h4>ELECTRIC BICYCLE</h4>
                            <div className="box">
                                <div className="row container r" >
                                    <div className="col-sm-5 ">
                                    <img src={electric} alt="electric" className="rectangle" />
                                    </div>
                                    <div className="col-sm-7">
                                        <h5>456 Kms</h5>
                                        <p id="p">Traveled By electric bicycle</p>
                                    </div>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <h4>CLASSIC BIKE</h4>
                            <div className="box">
                                <div className="row container r">
                                    <div className="col-sm-5 ">
                                        <img src={classic} alt="classic" className="rectangle" style={{height:"40px", marginTop:"45px"}} />
                                    </div>
                                    <div className="col-sm-7">
                                        <h5>178 Kms </h5>
                                        <p id="p">Traveled By classic  bicycle</p>
                                    </div>
                                </div>  
                            </div>
                    </div>


                </div>

                {/* <!-- end row --> */}
{/* <!-- end row --> */}

               
<div className="row" style={{marginTop:"30px"}}>
                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                            <div className="box">
                                <div className="row container r">
                                    <div className="col-sm-5 ">
                                    <img src={walk} alt="walk" className="rectangle" />
                                    </div>
                                    <div className="col-sm-7">
                                        <h5>34 Kg </h5>
                                        <p id="p">Distributed by <br /> walk</p>
                                    </div>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                            <div className="box">
                                <div className="row container r">
                                    <div className="col-sm-5 ">
                                    <img src={electric} alt="walk" className="rectangle" />
                                    </div>
                                    <div className="col-sm-7">
                                        <h5>234 Kgs </h5>
                                        <p id="p">Distributed by electric bicycle</p>
                                    </div>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                            <div className="box">
                                <div className="row container r">
                                    <div className="col-sm-5 ">
                                    <img src={classic} alt="walk" className="rectangle" style={{height:"40px", marginTop:"45px"}} />
                                    </div>
                                    <div className="col-sm-7">
                                        <h5>67 Kgs </h5>
                                        <p id="p">Distributed By classic bike</p>
                                    </div>
                                </div>  
                            </div>
                    </div>
                </div>
                </div>
             {/* End Here Col-6 */}
        </div>
        </div>
           
        )
    }
}

export default Dashboard;
