import React, { Component } from "react";
// import DeatilSummery from "./DeatilSummery";
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

  // Get Data from filter date
  getData = async e => {
    try {
      const from = e.target.elements.from.value;
      const to = e.target.elements.to.value;
      e.preventDefault();
      const res = await fetch(
        `http://localhost:8000/api/1/deliveries/data/?too__lte=${to}&fromm__gte=${from}`
      );
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `http://localhost:8000/api/1/bikes/electric/${this.props.match.params.pk}/`
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
            &nbsp;{movie.label}
          </a>
          <table class="table table-hover " style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col" className="t">
                  Id
                </th>
                <th scope="col" className="t" style={{ width: "250px" }}>
                  Data
                </th>
                <th scope="col" className="t">
                  User
                </th>
                <th scope="col" className="t">
                  Dystans
                </th>
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
            {movie.results.map(item => (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.timestamp}</td>
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
            <thead>
              <tr className="thead">
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col" className="text-dark th">
                  <strong>SUMMERY</strong>
                </th>
                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "120px" }}
                >
                  {movie.summery.total_milage} Km
                </th>
                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "160px" }}
                >
                  {movie.summery.total_movingtime} hr
                </th>

                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "170px" }}
                >
                  {movie.summery.total_averagespeed} Km/hr
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_letter}
                </th>
                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "120px" }}
                >
                  {movie.summery.total_ship_weight} kgs
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_pack}
                </th>
                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "170px" }}
                >
                  {movie.summery.total_kg} kgs
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_co2_save}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_boxes}
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default Edetails;
