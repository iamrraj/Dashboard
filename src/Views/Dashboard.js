import React, { Component } from 'react'
import Datee from './Datee'


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
                    <div className="col-sm-5">
                       Hello <strong>UserName,</strong>
                       <Datee/>
                    </div>
                    <div className="col-sm-3">
                        <form>
                        <div class="form-group">
                        
                            <input type="date" name="from"  class="form-control datepicker"  />
                                  
                         </div>
                        </form>
                    </div>
                </div>

<div style={{background:"white", padding:"15px"}}>
            <h4 className="text-center font-weight-bolder">Summary</h4>

                <div class="row">
                <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <div style={{boxShadow: "0 9px 17px 8px #E5E8E9" }}>
                            <div className="row container">
                                <div className="col-sm-5 ">
                                    <i className="fa fa-tree text-center " style={{color:"#13B760",fontSize:"60px",marginTop:"25px"}} ></i>
                                </div>
                                <div className="col-sm-7">
                                    <h5><strong>84638 </strong></h5>
                                    <p><a href="# " className="text-dark">Total Milage</a></p>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <div style={{boxShadow: "0 9px 17px 8px #E5E8E9"}}>
                            <div className="row container">
                                <div className="col-sm-5 ">
                                    <i className="fa fa-weight-hanging  " style={{color:"#13B760",fontSize:"60px",marginTop:"25px"}} ></i>
                                </div>
                                <div className="col-sm-7">
                                    <h5><strong>84638 </strong></h5>
                                    <p>Total Weight Of Boxex</p>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <div style={{boxShadow: "0 9px 17px 8px #E5E8E9"}}>
                            <div className="row container">
                                <div className="col-sm-5 ">
                                    <i className="fa fa-tree  " style={{color:"#13B760",fontSize:"60px",marginTop:"25px"}} ></i>
                                </div>
                                <div className="col-sm-7">
                                    <h5><strong>845 Mg </strong></h5>
                                    <p>Total Safe Co2</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                            
                </div>
                {/* <!-- end row --> */}

               

                <h4 className="text-center font-weight-bolder">Distribution Type</h4>

                <div className="row" style={{marginTop:"15px"}}>
                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <h4>Walk</h4>
                            <div style={{boxShadow: "0 9px 17px 8px #E5E8E9"}}>
                                <div className="row container">
                                    <div className="col-sm-6 ">
                                        <i className="fa fa-boxes  " style={{color:"#13B760",fontSize:"80px",marginTop:"15px"}} ></i>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4><strong>26 Kgs </strong></h4>
                                        <p>Total Weight Of Boxex</p>
                                    </div>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <h4>Electric Bicycle</h4>
                            <div style={{boxShadow: "0 9px 17px 8px #E5E8E9"}}>
                                <div className="row container">
                                    <div className="col-sm-6 ">
                                        <i className="fa fa-boxes  " style={{color:"#13B760",fontSize:"80px",marginTop:"15px"}} ></i>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4><strong>234Kgs </strong></h4>
                                        <p>Total Weight Of Boxes</p>
                                    </div>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <h4>Classic Bicycle</h4>
                            <div style={{boxShadow: "0 9px 17px 8px #E5E8E9"}}>
                                <div className="row container">
                                    <div className="col-sm-6 ">
                                        <i className="fa fa-boxes  " style={{color:"#13B760",fontSize:"80px",marginTop:"15px"}} ></i>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4><strong>432Kgs </strong></h4>
                                        <p>Total Weight Of Boxes</p>
                                    </div>
                                </div>  
                            </div>
                    </div>


                </div>

                {/* <!-- end row --> */}
{/* <!-- end row --> */}

               
<div className="row" style={{marginTop:"30px"}}>
                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                            <div style={{boxShadow: "0 9px 17px 8px #E5E8E9"}}>
                                <div className="row container">
                                    <div className="col-sm-6 ">
                                        <i className="fa fa-walking  " style={{color:"#13B760",fontSize:"80px",marginTop:"15px"}} ></i>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4><strong>84638 </strong></h4>
                                        <p>ToTal Milage</p>
                                    </div>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                            <div style={{boxShadow: "0 9px 17px 8px #E5E8E9"}}>
                                <div className="row container">
                                    <div className="col-sm-6 ">
                                        <i className="fa fa-bicycle  " style={{color:"#13B760",fontSize:"80px",marginTop:"15px"}} ></i>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4><strong>84638 </strong></h4>
                                        <p>Total Milage</p>
                                    </div>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                            <div style={{boxShadow: "0 9px 17px 8px #E5E8E9"}}>
                                <div className="row container">
                                    <div className="col-sm-6 ">
                                        <i className="fa fa-bicycle  " style={{color:"#13B760",fontSize:"80px",marginTop:"15px"}} ></i>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4><strong>84638 </strong></h4>
                                        <p>Total Milage</p>
                                    </div>
                                </div>  
                            </div>
                    </div>
                </div>
                </div>
             {/* End Here Col-6 */}
        </div>
           
        )
    }
}

export default Dashboard;
