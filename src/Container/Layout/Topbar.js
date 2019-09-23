import React, { Component } from 'react'
import Logout from '../Logout'
import head from '../../img/head.png'

class Topbar extends Component {
  constructor(props){
    super(props);
    this.state={
      text : "Choose UserName",
      value: props.value,
    }
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
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
          <nav className="navbar navbar-expand-lg navbar-dark bg-white" >
              <a className="navbar-brand" href="/" style={{color: "#212226"}}><img src={head} alt="logo" style={{height:"40px"}}></img> &nbsp; <span className= "head">SOFT BIKE</span></a>
              <button className="navbar-toggler" style={{background:"#13B760"}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <ul className="navbar-nav" style={{marginRight:"70px"}}>
                    <li className="nav-item  active" >
                      <a className="nav-link font-weight-bolder" href="# "  style={{color: "#212226"}}> UserName</a>
                    </li>

                   {/* For Notification */}
                   <li className="nav-item dropdown  ">
                      <a className="nav-link dropdown-toggle a" href="# " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "#212226"}}>
                        Notification 
                        <span class="badge badge-danger">4</span>
                       
                      </a>
                      <div className="dropdown-menu noti " aria-labelledby="navbarDropdown">
                      <table className="table tabl table-striped ">
                        <h6 className="container font-weight-bolder">NOTIFICATION  <span aria-hidden="true" className="pull-right" style={{opacity:"0.5"}}>&times;</span></h6>
                        
                          <tbody>
                            <tr>
                              <td>
                                  <a href="# " style={{fontWeight:"bold", color:"#212226"}}>Notificatio From The User on <strong style={{color:"rgba(19, 183, 96, 1.0"}}>EB01</strong> </a><br></br>
                                  <span style={{fontSize:"13px",opacity:"0.6"}}>2 hours Ago </span>
                              </td>
                            </tr>

                            <tr>
                              <td>
                              <a href="# " style={{fontWeight:"bold", color:"#212226"}}>Notificatio From The User on <strong style={{color:"rgba(19, 183, 96, 1.0"}}>EB02</strong> </a><br></br>
                                  <span style={{fontSize:"13px",opacity:"0.6"}}>2 hours Ago </span>
                              </td>
                            </tr>
                          </tbody>
<hr></hr>
                          <center><a href="# " className="head "> See All</a></center>
                      </table>
                      </div>
                    </li>
                  {/* End For Notificatioj */}
                    <li className="nav-item  ">
                      <a className="nav-link a" href="# " data-toggle="modal" data-target="#exampleModal" style={{color: "#212226"}}> Report</a>
                    </li>
                   
                   <Logout />
                </ul>
                
              </div>
          </nav>

          <nav className="navbar navbar-expand-lg navbar-dark container " >
              <a className="navbar-brand rrr" href="/" style={{color:"rgba(19, 183, 96, 1.0)"}}> Dashboard</a>
              <button className="navbar-toggler" style={{background:"#13B760"}} type="button" data-toggle="collapse" data-target="#nnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="nnavbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item  l" >
                      <a className="nav-link font-weight-bold" href="/walk" style={{color:"rgba(19, 183, 96, 1.0)"}}>  Walk</a>
                    </li>
                    <li className="nav-item   l" >
                      <a className="nav-link font-weight-bold ll" href="/electricbike" style={{color:"rgba(19, 183, 96, 1.0)"}}> Electric Bike </a>
                    </li>
                    <li className="nav-item   l" >
                      <a className="nav-link font-weight-bold ll " href="/classicbike" style={{color:"rgba(19, 183, 96, 1.0)"}}> Classic Bike</a>
                    </li>
                    <li className="nav-item   l" >
                      <a className="nav-link font-weight-bold ll" href="/user" style={{color:"rgba(19, 183, 96, 1.0)"}}> User</a>
                    </li>
                </ul>
               
                
              </div>
          </nav>


{/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel"> Report  </h6>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form >
                          <div className="row">
                              <div className="col-sm-6">
                                  <div className="form-group">
                                      From 
                                      <input type="date" name="from"  className="form-control datepicker" style={{ width:"150px",color:"#13B760"}} />
                                  
                                  </div>
                              </div>

                              <div className="col-sm-6">
                                  <div className="form-group">
                                      To
                                      <input type="date" name="to"  className="form-control datepicker" style={{ width:"150px", color:"#13B760"}} />
                                  
                                  </div>
                              </div>
                          </div>

                          <p>Choose the Distribution Type</p>
                          <div className="btn-group">
                            <button type="button" className="btn btn-outline-success  active" onClick={this.walk} style={{background:"rgba(19, 183, 96, 1.0)"}}>Walk</button>
                            <button type="button" className="btn btn-outline-success " onClick={this.electric}>EB</button>
                            <button type="button" className="btn btn-outline-success " onClick={this.classic}>CB</button>
                            <button type="button" className="btn btn-outline-success " onClick={this.user}>User</button>
                          </div> 

                          <div className="form-group" style={{marginTop:"20px"}}>
                              <label for="exampleFormControlSelect2">{this.state.text}</label>
                              {/* value={this.state.value} name={this.props.name} onChange={this.handleChange.bind(this)} */}
                              <select multiple className="form-control" id="exampleFormControlSelect2" style={{width:"200px", color:"rgba(19, 183, 96, 1.0)"}} >  
                                <option>Electric Bike</option>
                                <option>Classic Bike</option>
                                <option>Walk</option>
                                <option>User</option>
                                <option>User 1</option>
                          </select>
                          </div>

                          <center><a href="/report" className="btn btn-success" style={{width:"200px",background:"rgba(19, 183, 96, 1.0)"}} >Get Report</a></center>
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



// render() {
//   const dictionary = [
//     { value: 'grapefruit', label: 'Grapefruit' },
//     { value: 'lime', label: 'Lime' },
//     { value: 'coconut', label: 'Coconut' },
//     { value: 'mango', label: 'Mango' }
//   ];

//   return (
//       <label>
//         <select
//           className="widefat"
//           value={this.state.value}
//           name={this.props.name}
//           onChange={this.handleChange}
//         >
//           {dictionary.map(
//             // Iterating over every entry of the dictionary and converting each
//             // one of them into an `option` JSX element
//             ({ value, label }) => <option key={value} value={value}>{label}</option>
//           )}
//         </select>
//       </label>
//   );
// }