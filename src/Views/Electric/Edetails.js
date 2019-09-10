import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';


export class Edetails extends Component {
  constructor(props){
    super(props);
    this.state={
      movie:null,
    };
  }

  async componentDidMount(){
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&append_to_response=videos,details,similar,credits,recommendations`);
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  onClickRecomendation = async(id) => {
    
    this.props.history.push('/overview/'+id);
    window.location.reload();

  }

  
    render() {
      const { movie } = this.state;
      if (movie === null) return <p>Loading ...</p>;
      const data = {
        columns: [
        {
            label: 'Id',
            field: 'id',
            sort: 'asc',
            width: 150
            },
          {
            label: 'Date',
            field: 'date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'UserName(Postman)',
            field: 'name',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Milage',
            field: 'milage',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Total Time',
            field: 'time',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Average Speed',
            field: 'average',
            sort: 'asc',
            width: 100
          },
          
        ],
        rows: [
          {
            id: movie.runtime,
            date: movie.id,
            name: movie.title,
            milage: '12',
            time: '55 min',
            average: '14'
          }   
        ]
      };    
        return (
        <div className="container" >
        
        <h1 className="text-center" style={{marginTop:"10px"}}>Electric Bike Details <stron>{movie.id}</stron></h1>
            <MDBDataTable
            striped
            bordered
            hover
            data={data}
          />
        </div>
        )
    }
}

export default Edetails
