import React, { Component } from 'react'

class ElectricBike extends Component {
    constructor(props){
        super(props);
        this.state ={
            movies:[],
        }
    }

    async componentDidMount(){
        try{
            const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US`);
            const movies = await res.json();
            console.log(movies);
            this.setState({
                movies: movies.results
            });
        } catch(e){
            console.log(e);
        }
    }
    render() {
        return (
            <div className="container" style={{marginTop:"20px"}}>
                    <center>
                        <form className="col-sm-3">
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
                    </center>

                <h3 className="text-center" style={{marginTop:"20px"}}> Electric Bike All List </h3>

                    <table class="table table-striped table-bordered" style={{marginTop:"10px"}}>
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Bike Id</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Moving Time</th>
                        <th scope="col">Avgerage Speed</th>
                        <th scope="col">Kilograms Transpored</th>
                        <th scope="col">Safe Co2</th>
                        <th scope="col">No Of User</th>

                        </tr>
                    </thead>
                {this.state.movies.map( c =>
                    <tbody key={c.id}>
                        <tr>
                        <th scope="row">{c.genre_ids}</th>
                        <td ><a href={'overview/'+ c.id} className="text-primary">{c.id}</a></td>
                        <td>{c.vote_average}</td>
                        <td>{c.popularity}</td>
                        <th >12</th>
                        <td>34</td>
                        <td>{c.vote_count} </td>
                        <td>4</td>
                        </tr>   
                    </tbody>
                )}
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col" className="text-dark"><strong>Summery</strong></th>
                        <th scope="col" className="text-primary">232</th>
                        <th scope="col" className="text-primary">4545</th>
                        <th scope="col" className="text-primary">5353</th>
                        <th scope="col" className="text-primary">4311</th>
                        <th scope="col" className="text-primary">32</th>
                        <th scope="col" className="text-primary">34</th>
                        </tr>
                    </thead>
                    </table>


                
            </div>
        )
    }
}

export default ElectricBike;
