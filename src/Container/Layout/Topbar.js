import React, { Component } from 'react'
import Logout from '../Logout'

class Topbar extends Component {
  constructor(props){
    super(props);
    this.state={
      text : "Choose UserName",
    }
  }

  walk = () =>{
    this.setState({
      text:"Choose UserName"
    })
  }

  electric = () =>{
    this.setState({
      text:"Choose The Bike ID"
    })
  }

  classic = () =>{
    this.setState({
      text:"Bike Id"
    })
  }

  user = () =>{
    this.setState({
      text:"Choose UserName Of User"
    })
  }


    render() {
        return (
          <div> 
          <nav class="navbar navbar-expand-lg navbar-dark bg-white">
              <a class="navbar-brand" href="/" style={{color: "#212226"}}>Logo</a>
              <button class="navbar-toggler" style={{background:"#13B760"}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                </ul>
                <ul className="navbar-nav">
                    <li class="nav-item  active" >
                      <a class="nav-link font-weight-bolder" href="# " data-toggle="modal" data-target="#exampleModal" style={{color: "#212226"}}>< i className="fas fa-user"></i> UserName</a>
                    </li>

                   {/* For Notification */}
                   <li class="nav-item dropdown  active">
                      <a class="nav-link dropdown-toggle font-weight-bolder" href="# " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "#212226"}}>
                        Notification 
                            <p class='cadge '>21</p>
                       
                      </a>
                      <div class="dropdown-menu noti " aria-labelledby="navbarDropdown">
                      <table class="table">
                          <tbody>
                            <tr>
                              {/* <th scope="row">1</th> */}
                              <td>
                                  <a href="# " style={{fontWeight:"bold", color:"#212226"}}>There will be some details hjdfgjdfsdf hkhfjdf yueyrue ueyr</a><br></br>
                                  <span style={{fontSize:"13px",opacity:"0.6"}}>2 hours Ago </span>
                              </td>
                            </tr>

                            <tr>
                              {/* <th scope="row">1</th> */}
                              <td>
                                 <a href="# " style={{fontWeight:"bold",color:"#212226"}}>There will be some details hjdfgjdfsdf hkhfjdf yueyrue ueyr</a><br></br>
                                  <span style={{fontSize:"13px",opacity:"0.6"}}>2 hours Ago </span>
                              </td>
                            </tr>
                          </tbody>
                      </table>
                      </div>
                    </li>
                  {/* End For Notificatioj */}
                    <li class="nav-item  active">
                      <a class="nav-link font-weight-bolder" href="# " data-toggle="modal" data-target="#exampleModal" style={{color: "#212226"}}>< i className="fas fa-file" ></i> Report</a>
                    </li>
                   
                   <Logout />
                </ul>
                
              </div>
          </nav>

          <nav class="navbar navbar-expand-lg navbar-dark bg-info" >
              <a class="navbar-brand" href="/"><i class="fa fa-desktop" ></i> DASHBOARD</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="nnavbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item  active">
                      <a class="nav-link font-weight-bold" href="/walk"> <i class="fa fa-walking"></i> WALK</a>
                    </li>
                    <li class="nav-item  active">
                      <a class="nav-link font-weight-bold" href="/electricbike"><i class="fa fa-bicycle"></i> ELECTRIC BIKE </a>
                    </li>
                    <li class="nav-item  active">
                      <a class="nav-link font-weight-bold " href="/classicbike"><i class="fa fa-bicycle"></i> CLASSIC BIKE</a>
                    </li>
                    <li class="nav-item  active">
                      <a class="nav-link font-weight-bold" href="/user"><i class="fa fa-user"></i> USER</a>
                    </li>
                </ul>
               
                
              </div>
          </nav>


{/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Report Page</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <form >
                          <div className="row">
                              <div className="col-sm-6">
                                  <div class="form-group">
                                      From 
                                      <input type="date" name="from"  class="form-control datepicker" style={{ width:"150px",color:"#13B760"}} />
                                  
                                  </div>
                              </div>

                              <div className="col-sm-6">
                                  <div class="form-group">
                                      To
                                      <input type="date" name="from"  class="form-control datepicker" style={{ width:"150px", color:"#13B760"}} />
                                  
                                  </div>
                              </div>
                          </div>

                          <p>Choose the Distribution Type</p>
                          <div class="btn-group">
                            <button type="button" class="btn btn-outline-success active" onClick={this.walk}>Walk</button>
                            <button type="button" class="btn btn-outline-success" onClick={this.electric}>EB</button>
                            <button type="button" class="btn btn-outline-success" onClick={this.classic}>CB</button>
                            <button type="button" class="btn btn-outline-success" onClick={this.user}>User</button>
                          </div> 

                          <div class="form-group" style={{marginTop:"20px"}}>
                              <label for="exampleFormControlSelect2">{this.state.text}</label>
                              <select multiple class="form-control" id="exampleFormControlSelect2" style={{width:"200px", color:"#13B760"}}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                          </select>
                          </div>

                          <center><button class="btn btn-success" style={{width:"200px"}} ><i className="fas fa-file"> </i> Get Report</button></center>
                          </form>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                           
                        </div> */}
                        </div>
                    </div>
                    </div>

</div>


        )
    }
}

export default Topbar;
