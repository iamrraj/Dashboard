import React, { Component } from 'react'
import DeatilSummery from './DeatilSummery'
// import head from '../../img/login.svg'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
//,LeafletMap,
// import { MDBDataTable } from 'mdbreact';
const position = [51.505, -0.09]

class Udetails extends Component {
    constructor(props){
        super(props);
        this.state={
            movie:null,
        };
    }

    async componentDidMount(){
        try {
        const res = await fetch(`http://localhost:8000/api/user/${this.props.match.params.pk}`);
        const movie = await res.json();
        // console.log(movie);
        this.setState({
            movie,
        });
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        const { movie } = this.state;
        if (movie === null) return <p>Loading ....</p>;       
        return (
        <div className="container" >
         <div className="bg-white"  style={{padding:"15px",borderTop: "2px solid #CCEFDC"}}>
          <a href="/user" style={{color:"black", fontSize:"16px"}}>
               <i class="fa fa-arrow-left fa-1x" aria-hidden="true" style={{color:"#CCEFDC",height:"29px"}}></i>
               &nbsp; {movie.user} </a> &nbsp; 
               <i className="fa fa-mobile-alt fa-2x" style={{color:"rgba(19, 183, 96, 1.0)",opacity:"0.6"}} data-toggle="modal" data-target="#exampleModalCenter"></i>
                    <br></br> 
                <span  id="span">Contact</span>
          
                    <table class="table " style={{marginTop:"20px"}} >
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">Date</th>
                        <th scope="col">Distribution Type</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">KG Transported</th>
                        <th scope="col">Additional Boxex</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                {movie.items.map(item => ( 
                    <tbody>
                        <tr>
                        <td >{item.id}</td>
                        <td >{item.date}</td>
                        <td>{item.dstrtype}</td>
                        <td>{item.milage} Km</td>
                        <td>{item.movingtime}</td>
                        <td>{item.kgtransported} Kg</td>
                        <td>{item.additionalbox}</td>
                        <td data-toggle="modal" data-target="#eexampleModal"><i className="fa fa-map" style={{color:"rgba(19, 183, 96, 1.0)",opacity:"0.6", fontSize:"19px"}}></i></td>
                        </tr>
                    </tbody>
                ))}
                    <DeatilSummery/>

                    </table>
                </div>



{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">User: <strong>{movie.user}</strong></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h3 className="text-center"> Contact Number: <strong>{movie.phone} </strong></h3>
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal End --> */}



{/* <!-- Modal For Map --> */}
                    <div className="modal fade bd-example-modal-lg" id="eexampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel"> Map </h6>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                          <div className="row" style={{marginBottom:"-40px"}}>
                              <div className="col-sm-6">
                                  <div className="form-group">
                                      User
                                      <input type="text" name="from"  className="form-control datepicker" value={movie.user} style={{ width:"150px",color:"#13B760"}} />
                                  
                                  </div>
                              </div>
                              <form >
                              <div className="col-sm-6">
                                  <div className="form-group">
                                      To
                                      <input type="date" name="to"  className="form-control datepicker" style={{ width:"150px", color:"#13B760"}} />
                                  
                                  </div>
                              </div>
                              </form>
                          </div>
                        </div>
                        
                        <Map center={position} zoom={13} style={{marginTop:"30px"}}>
                            <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />
                            <Marker position={position}>
                            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                            </Marker>
                        </Map>
                        </div>
                    </div>
                    </div>






         
        </div>
        )
    }
}


export default Udetails;
