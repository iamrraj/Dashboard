import React, { Component } from 'react'
import DeatilSummery from './DeatilSummery'


export class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            walk:null,
        }
    }

    async componentDidMount(){
        try{
            const res = await fetch(`http://localhost:8000/api/walk/${this.props.match.params.pk}`)
            const walk = await res.json();
            console.log(walk);
            this.setState({
                walk
            });
        }catch(e){
            console.log(e);
        }
    }
    render() {      
        const { walk } = this.state;
        if (walk === null) return <p>Loading ....</p>;
        return (
        <div className="container" >
        
        <div className="bg-white"  style={{padding:"15px",borderTop: "2px solid #CCEFDC"}}>
          <a href="/walk" style={{color:"black"}}> <i class="fa fa-arrow-left fa-1x" aria-hidden="true" style={{color:"#CCEFDC",height:"20px"}}></i>  Anybody</a>
                    <table class="table " style={{marginTop:"20px"}} >
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">Date</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">KG Transported</th>
                        <th scope="col">Additional Boxex</th>
                        </tr>
                    </thead>
                {walk.items.map(item => ( 
                    <tbody >
                        <tr>
                        <td >{item.id}</td>
                        <td >{item.date} </td>
                        <td>{item.milage} Km</td>
                        <td>{item.movingtime}</td>
                        <td>{item.kgtransported} Kg</td>
                        <td>{item.additionalbox}</td>
                        </tr>
                    </tbody>
                ))}

                <DeatilSummery/>

                    </table>
                </div>

        </div>
        )
    }
}

export default Details;

