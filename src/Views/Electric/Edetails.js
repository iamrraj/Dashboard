import React, { Component } from "react";
import DeatilSummery from "./DeatilSummery";
import DateForm from "../Electric/DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";

// import axios from 'axios'

export class Edetails extends Component {
  // constructor(props){
  //     super(props);
  //     this.state={
  //         blog: null,
  //     };
  // }

  // async componentDidMount() {
  //     try {
  //         const { match: { params } } = this.props;
  //         const blog = (await axios.get(`http://localhost:8000/api/ebike/${params.pk}`)).data;
  //         console.log(blog)
  //         this.setState({
  //             blog,
  //         });
  //     }catch (e) {
  //         console.log(e);
  //     }
  //   }
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://softbike.herokuapp.com/api/ebike/${this.props.match.params.pk}`
      );
      const movie = await res.json();
      // console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  onClickRecomendation = async id => {
    this.props.history.push("/overview/" + id);
    window.location.reload();
  };

  render() {
    const { movie } = this.state;
    if (movie === null) return <p>Loading ....</p>;
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <DateForm loaddata={this.getData} />
        <Topbar1 />
        <div
          className="bg-white"
          style={{ padding: "15px", borderTop: "2px solid #CCEFDC" }}
        >
          <a href="/electricbike" style={{ color: "black", fontSize: "16px" }}>
            {" "}
            <i
              class="fa fa-arrow-left fa-1x"
              aria-hidden="true"
              style={{ color: "#CCEFDC", height: "20px" }}
            ></i>
            &nbsp;{movie.bikeid}
          </a>
          <table class="table table-hover " style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col">Id</th>
                <th scope="col">Data</th>
                <th scope="col">User</th>
                <th scope="col">Dystans</th>
                <th scope="col" style={{ width: "130px" }}>
                  Czas w ruchu
                </th>
                <th scope="col">Średnia prędkość</th>
                <th scope="col">Llość przesylek listiwych</th>
                {/* Adde New in api */}
                <th scope="col">Masa przesylek listiwych</th>
                {/* Adde New in api */}
                <th scope="col">Llość paczek</th>
                {/* Adde New in api */}
                <th scope="col">Masa paczek</th>
                <th scope="col">Zaoszczędzone CO2</th> {/* Adde New in api */}
                <th scope="col">Liczba dobrań przesylek</th>
              </tr>
            </thead>
            {movie.items.map(item => (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>
                    <a
                      href="/user"
                      style={{ color: "#13B760" }}
                      class="font-weight-bold"
                    >
                      {item.user}
                    </a>
                  </td>
                  <td>{item.milage} Km</td>
                  <td>{item.movingtime} hr</td>
                  <td>{item.averagespeed} km/hr</td>
                  <td>{item.letteritems}</td>
                  <td>{item.shipweight} kgs</td>
                  <td>{item.package}</td>
                  <td>{item.kgtrasported}Kg</td>
                  <td>190 mg</td>
                  <td>{item.additionalbox}</td>
                </tr>
              </tbody>
            ))}
            <DeatilSummery />
          </table>
        </div>
      </div>
    );
  }
}

export default Edetails;
