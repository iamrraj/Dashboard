import React, { Component } from 'react'

export class Cdetails extends Component {
    constructor(props){
        super(props)
        this.state={
            movie:null,
        };
    }

    async componentDidMount(){
        try{
            const res =await fetch(`http://softbike.herokuapp.com/api/cbike/${this.props.match.params.pk}`);
            const movie = await res.json();
            console.log(movie);
            this.setState({
                movie,
            });
        }catch(e){
            console.log(e)
        }
    }

    onClickRecomendation = async(id) => {
        this.props.history.push('/overview/'+id);
        window.location.reload();
    }

    render() {
        const { movie } = this.state;
        if (movie === null) return <p>Loading ....</p>;
        return (
        <div className="container" >
        
        <div className="bg-white"  style={{padding:"15px",borderTop: "2px solid #CCEFDC"}}>
          <a href="/classicbike" style={{color:"black", fontSize:"16px"}}> <i class="fa fa-arrow-left fa-1x" aria-hidden="true" style={{color:"#CCEFDC",height:"20px"}}></i>  {movie.bikeid}</a>
                    <table class="table table-hover " style={{marginTop:"20px"}} >
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">Date</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">Average Speed</th>
                        <th scope="col">KG Transported</th>
                        <th scope="col">Additional Boxex</th>

                        </tr>
                    </thead>
                {movie.items.map(item => ( 
                    <tbody>
                        <tr >
                        <th scope="row">{item.id}</th>
                        <td >{item.date} </td>
                        <td>{item.milage} Km</td>
                        <td>{item.movingtime}</td>
                        <td>{item.averagespeed} km/hr</td>
                        <td>{item.kgtrasported} Kg</td>
                        <td>{item.additionalbox}</td>
                        </tr>
                    </tbody>
                ))}

                    <thead>
                        <tr className="thead">
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

export default Cdetails;
