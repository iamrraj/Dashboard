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
                  <li class="nav-item active">
                      <a class="nav-link float-right" href="# ">Main Input <span class="sr-only">(current)</span></a>
                    </li>
                    {/* <li class="nav-item dropdown  active">
                      <a class="nav-link dropdown-toggle disabled" href="# " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Distribution Type
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/walk"><i class="fa fa-walking"></i> Walk</a>
                        <a class="dropdown-item" href="/classicbike"><i class="fa fa-bicycle"></i> Classic Bike</a>
                        <a class="dropdown-item" href="/electricbike"><i class="fa fa-bicycle"></i> Electric Bike</a>
                        
                      </div>
                    </li> */}
                    <li class="nav-item  active">
                      <a class="nav-link" href="# ">User PostMan</a>
                    </li>
                    <li class="nav-item  active">
                      <a class="nav-link" href="/report">Report</a>
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



</div>


        )
    }
}

export default Topbar;
