import React, { Component } from "react";
import DateForm from "../Electric/DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";
import config from "../config";

export class Cdetails extends Component {
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
        `http://localhost:8000/api/1/workday/?date__lte=${to}&date__gte=${from}&mode=bike`
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
        `${config.apiUrl.classic}${this.props.match.params.pk}/`
      );
      const movie = await res.json();
      console.log(movie);
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
          <a href="/classicbike" style={{ color: "black", fontSize: "16px" }}>
            {" "}
            <i
              class="fa fa-arrow-left fa-1x"
              aria-hidden="true"
              style={{ color: "#CCEFDC", height: "20px" }}
            ></i>{" "}
            {movie.username}
          </a>
          <table class="table table-hover " style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col">Lp</th>
                <th scope="col">Data</th>
                <th scope="col">Dystans</th>
                {/* <th scope="col" style={{ width: "140px" }}>
                  
                </th> */}
                <th scope="col">Średnia prędkość</th>
                <th scope="col">Ilość przesylek listiwych</th>
                <th scope="col">Masa przesylek listiwych</th>
                <th scope="col">Ilość paczek</th>
                <th scope="col">Masa paczek</th>
                <th scope="col">Liczba dobrań przesylek</th>
              </tr>
            </thead>
            {movie.detail.map(item => (
              <tbody>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.timestamp} </td>
                  {item.worday.map(cc => (
                    <td>{cc.bike_mileage} km</td>
                  ))}
                  {/* <td>{item.movingtime}</td> */}
                  <td>{item.averagespeed} km/hr</td>
                  <td>{item.letters_number}</td>
                  <td>{item.packaged_weight} kg</td>
                  <td>{item.packages_number}</td>
                  {item.worday.map(cc => (
                    <td>{cc.weight} kg</td>
                  ))}
                  <td>{item.additionalbox}</td>
                </tr>
              </tbody>
            ))}

            <thead>
              <tr className="thead">
                <th scope="col"></th>
                <th scope="col" className="text-dark th">
                  <strong>SUMA</strong>
                </th>
                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "100px" }}
                >
                  {movie.summery.total_milage
                    ? `${movie.summery.total_milage}`
                    : 0}{" "}
                  Km
                </th>

                <th scope="col" className="text-dark th">
                  {movie.summery.total_averagespeed
                    ? `${movie.summery.total_averagespeed}`
                    : 0}{" "}
                  km/hr
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_letter
                    ? `${movie.summery.total_letter}`
                    : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_ship_weight
                    ? `${movie.summery.total_ship_weight}`
                    : 0}{" "}
                  kg
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_pack ? `${movie.summery.total_pack}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_kg ? `${movie.summery.total_kg}` : 0} kg
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_boxes
                    ? `${movie.summery.total_boxes}`
                    : 0}
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default Cdetails;
