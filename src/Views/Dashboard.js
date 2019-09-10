import React, { Component } from 'react'
import Datee from './Datee'


class Dashboard extends Component {
  
    

    

    render() {
        
        return (
            <div className="container" style={{marginTop:"20px"}}>
           
                <div className="row">
                    <div className="col-sm-5">
                        <Datee/>
                    </div>
                    <div className="col-sm-3">
                        <form>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Select Date</option>
                            <option value="2019-08">2019-08</option>
                            <option value="2019-07">2019-07</option>
                            <option value="2019-06">2019-06</option>
                            <option value="2019-05">2019-05</option>
                            <option value="2019-04">2019-04</option>
                            <option value="2019-03">2019-03</option>
                        </select>
                        </form>
                    </div>
                </div>
<div className="row">

            <div className="col-sm-9 bg-white"   >
            <h4 className="text-center font-weight-bolder">Summary</h4>

                <div class="row">
                <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <div style={{boxShadow: "0 9px 17px 8px #E5E8E9" }}>
                            <div className="row container">
                                <div className="col-sm-5 ">
                                    <i className="fa fa-tree text-center " style={{color:"#74EA79",fontSize:"60px",marginTop:"25px"}} ></i>
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
                                    <i className="fa fa-weight-hanging  " style={{color:"#74EA79",fontSize:"60px",marginTop:"25px"}} ></i>
                                </div>
                                <div className="col-sm-7">
                                    <h5><strong>84638 </strong></h5>
                                    <p>Total Weight</p>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <div style={{boxShadow: "0 9px 17px 8px #E5E8E9"}}>
                            <div className="row container">
                                <div className="col-sm-5 ">
                                    <i className="fa fa-tree  " style={{color:"#74EA79",fontSize:"60px",marginTop:"25px"}} ></i>
                                </div>
                                <div className="col-sm-7">
                                    <h5><strong>84638 </strong></h5>
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
                                        <i className="fa fa-boxes  " style={{color:"#577858",fontSize:"80px",marginTop:"15px"}} ></i>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4><strong>26 Kgs </strong></h4>
                                        <p>ToTal Weight Of Boxex</p>
                                    </div>
                                </div>  
                            </div>
                    </div>

                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                        <h4>Electric Bicycle</h4>
                            <div style={{boxShadow: "0 9px 17px 8px #E5E8E9"}}>
                                <div className="row container">
                                    <div className="col-sm-6 ">
                                        <i className="fa fa-boxes  " style={{color:"#577858",fontSize:"80px",marginTop:"15px"}} ></i>
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
                                        <i className="fa fa-boxes  " style={{color:"#577858",fontSize:"80px",marginTop:"15px"}} ></i>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4><strong>432Kgs </strong></h4>
                                        <p>Total Weight Boxes</p>
                                    </div>
                                </div>  
                            </div>
                    </div>


                </div>

                {/* <!-- end row --> */}
{/* <!-- end row --> */}

               
<div className="row" style={{marginTop:"20px"}}>
                    <div className="col-sm-4" style={{ marginTop:"5px"}}>
                            <div style={{boxShadow: "0 9px 17px 8px #E5E8E9"}}>
                                <div className="row container">
                                    <div className="col-sm-6 ">
                                        <i className="fa fa-walking  " style={{color:"#74EA79",fontSize:"80px",marginTop:"15px"}} ></i>
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
                                        <i className="fa fa-bicycle  " style={{color:"#74EA79",fontSize:"80px",marginTop:"15px"}} ></i>
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
                                        <i className="fa fa-bicycle  " style={{color:"#74EA79",fontSize:"80px",marginTop:"15px"}} ></i>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4><strong>84638 </strong></h4>
                                        <p>Total Milage</p>
                                    </div>
                                </div>  
                            </div>
                    </div>
                </div>
             {/* End Here Col-6 */}

        </div>

    {/* End Here Col-8 */}

    <div className="col-sm-3 " style={{boxShadow: "0 9px 17px 8px #E5E8E9"}} >
    <h6 className="text-left font-weight-bolder" > NOTIFICATION <span style={{float:"right", color:"#74EA79"}}><i className="fa fa-refresh"></i> UPDATE</span> </h6>
            <table class="table">
                {/* <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Date</th>
                    <th scope="col">Content</th>
                    <th scope="col">Activity</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>
                        <span>There will be some details</span><br></br>
                        <span style={{fontSize:"13px"}}>2 hours Ago </span>
                    </td>
                    <td><i className="fa fa-times text-danger" data-dismiss="modal" aria-label="Close" ></i></td>
                    </tr>

                    <tr>
                    <th scope="row">2</th>
                    <td>
                        <span>Notification Type</span><br></br>
                        <span style={{fontSize:"13px"}}>There wil be some details</span>
                    </td>
                    <td><i className="fa fa-times text-danger" data-dismiss="modal" aria-label="Close" ></i></td>
                    </tr>

                    <tr>
                    <th scope="row">3</th>
                    <td>
                        <span>Notification Type</span><br></br>
                        <span style={{fontSize:"13px"}}>There wil be some details</span>
                    </td>
                    <td><i className="fa fa-times text-danger" data-dismiss="modal" aria-label="Close" ></i></td>
                    </tr>

                    
                    
                </tbody>
                </table>

    </div>
    {/* End Here Col-4 */}

                {/* 




                  
 */}
</div>




            
            </div>
        )
    }
}

export default Dashboard;
