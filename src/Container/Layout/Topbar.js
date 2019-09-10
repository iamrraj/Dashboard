import React, { Component } from 'react'

class Topbar extends Component {
    render() {
        return (
          <div> 
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <a class="navbar-brand" href="/">Logo</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                </ul>
                <ul className="navbar-nav">

                   {/* For Notification */}
                   <li class="nav-item dropdown  active">
                      <a class="nav-link dropdown-toggle" href="# " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-bell badge-wrapper">
                            <span class='cadge '>21</span>
                        </i>
                      </a>
                      <div class="dropdown-menu noti " aria-labelledby="navbarDropdown">
                      <table class="table">
                          <tbody>
                            <tr>
                              {/* <th scope="row">1</th> */}
                              <td>
                                  <a href="# " style={{fontWeight:"bold"}}>There will be some details hjdfgjdfsdf hkhfjdf yueyrue ueyr</a><br></br>
                                  <span style={{fontSize:"13px",opacity:"0.6px"}}>2 hours Ago </span>
                              </td>
                            </tr>

                            <tr>
                              {/* <th scope="row">1</th> */}
                              <td>
                                 <a href="# " style={{fontWeight:"bold"}}>There will be some details hjdfgjdfsdf hkhfjdf yueyrue ueyr</a><br></br>
                                  <span style={{fontSize:"13px",opacity:"0.6px"}}>2 hours Ago </span>
                              </td>
                            </tr>
                          </tbody>
                      </table>
                      </div>
                    </li>
                  {/* End For Notificatioj */}

                  <li class="nav-item active">
                      <a class="nav-link " href="# ">Main Input <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item  active">
                      <a class="nav-link" href="# ">User PostMan</a>
                    </li>
                    <li class="nav-item  active">
                      <a class="nav-link" href="# " data-toggle="modal" data-target="#exampleModal">Report</a>
                    </li>


                    <li class="nav-item dropdown  active">
                      <a class="nav-link dropdown-toggle" href="# " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <i className="fa fa-user"></i> UserName
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="# ">Profile</a>
                        <a class="dropdown-item" href="/notification "> Notification</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="# ">Logout</a>
                      </div>
                    </li>
                </ul>
                
              </div>
          </nav>

          <nav class="navbar navbar-expand-lg navbar-dark bg-info" >
              <a class="navbar-brand" href="/"><i class="fa fa-desktop"></i> DASHBOARD</a>
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
                                      <input type="date" name="from"  class="form-control datepicker" style={{ width:"150px"}} />
                                  
                                  </div>
                              </div>

                              <div className="col-sm-6">
                                  <div class="form-group">
                                      To
                                      <input type="date" name="from"  class="form-control datepicker" style={{ width:"150px"}} />
                                  
                                  </div>
                              </div>
                          </div>

                          <div class="form-group" style={{marginTop:"10px"}}>
                              <label for="exampleFormControlSelect2">Select Your Type</label>
                              <select multiple class="form-control" id="exampleFormControlSelect2" style={{width:"200px"}}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                          </select>
                          </div>

                          <button class="btn btn-success" style={{width:"200px"}} > Get Report</button>
                          </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary" onClick={() => { this.handleReply("swingingChair49@usa.pl") }} >Save changes</button> */}
                        </div>
                        </div>
                    </div>
                    </div>





</div>


        )
    }
}

export default Topbar;
