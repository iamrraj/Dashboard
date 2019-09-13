import React, { Component } from 'react'
// import { MDBDataTable } from 'mdbreact';


export class Edetails extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     movie:null,
  //   };
  // }

  // async componentDidMount(){
  //   try {
  //     const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&append_to_response=videos,details,similar,credits,recommendations`);
  //     const movie = await res.json();
  //     console.log(movie);
  //     this.setState({
  //       movie,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // onClickRecomendation = async(id) => {
    
  //   this.props.history.push('/overview/'+id);
  //   window.location.reload();

  // }

  
    render() {
      
        return (
        <div className="container" >
         <div className="bg-white"  style={{padding:"15px",borderTop: "2px solid #CCEFDC"}}>
          <a href="/electricbike" style={{color:"black", fontSize:"16px"}}> <i class="fa fa-arrow-left fa-1x" aria-hidden="true" style={{color:"#CCEFDC",height:"20px"}}></i>RE01</a>
                    <table class="table " style={{marginTop:"20px"}} >
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">Date</th>
                        <th scope="col">User</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">Average Speed</th>
                        <th scope="col">KG Transported</th>
                        <th scope="col">Additional Boxex</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                        <th scope="row">1</th>
                        <td >12-09-2019 </td>
                        <td ><a href="/user" style={{color:"#13B760"}} class="font-weight-bold">CB(Anna Joly)</a></td>
                        <td>45 Km</td>
                        <td>3h 45min</td>
                        <td>14 km/hr</td>
                        <td>67Kg</td>
                        <td>14</td>
                        </tr>

                        <tr >
                        <th scope="row">3</th>
                        <td >12-09-2019 </td>
                        <td ><a href="/user" style={{color:"#13B760"}} class="font-weight-bold">CB(Anna Joly)</a></td>
                        <td>45 Km</td>
                        <td>3h 45min</td>
                        <td>14 km/hr</td>
                        <td>67Kg</td>
                        <td>14</td>
                        </tr>

                        <tr >
                        <th scope="row">3</th>
                        <td >12-09-2019 </td>
                        <td ><a href="/user" style={{color:"#13B760"}} class="font-weight-bold">CB(Anna Joly)</a></td>
                        <td>45 Km</td>
                        <td>3h 45min</td>
                        <td>14 km/hr</td>
                        <td>67Kg</td>
                        <td>14</td>
                        </tr>

                        <tr >
                        <th scope="row">4</th>
                        <td >12-09-2019 </td>
                        <td ><a href="/user" style={{color:"#13B760"}} class="font-weight-bold">CB(Anna Joly)</a></td>
                        <td>45 Km</td>
                        <td>3h 45min</td>
                        <td>14 km/hr</td>
                        <td>67Kg</td>
                        <td>14</td>
                        </tr>

                    </tbody>

                    <thead>
                        <tr className="thead">
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col" className="text-dark"><strong>Summery</strong></th>
                        <th scope="col" className="text-primary">45 Km</th>
                        <th scope="col" className="text-primary">3h 45min</th>
                        <th scope="col" className="text-primary">14 km/hr</th>
                        <th scope="col" className="text-primary">67 Kg</th>
                        <th scope="col" className="text-primary">14</th>
                        </tr>
                    </thead>

                    </table>
                </div>
        </div>
        )
    }
}

export default Edetails;
