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
                <th scope="col" className="tt">
                  Lp
                </th>
                <th scope="col" className="tt">
                  Data
                </th>
                <th scope="col">
                  Dystans<br></br>(km)
                </th>
                <th scope="col">
                  Średnia prędkość <br></br>(km/h)
                </th>
                <th scope="col">
                  Ilość przesylek <br></br> listowych
                </th>
                <th scope="col">
                  Masa przesylek <br></br> listowych(kg){" "}
                </th>
                <th scope="col" className="tt">
                  {" "}
                  Ilość paczek
                </th>
                <th scope="col">
                  Masa paczek <br></br>(kg)
                </th>
                <th scope="col">
                  Liczba dobrań <br></br> przesylek
                </th>
              </tr>
            </thead>
            {movie.detail.map(item => (
              <tbody>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.date ? `${item.date}` : 0} </td>
                  <td>{item.bike_mileage ? `${item.bike_mileage}` : 0}</td>
                  <td>{item.classicaverage ? `${item.classicaverage}` : 0}</td>
                  <td>{item.letternumber ? `${item.letternumber}` : 0}</td>
                  <td>{item.letterweight ? `${item.letterweight}` : 0}</td>
                  <td>{item.packagenumber ? `${item.packagenumber}` : 0}</td>
                  <td>{item.packageweight ? `${item.packageweight}` : 0} </td>
                  <td>{item.delivery_count ? `${item.delivery_count}` : 0}</td>
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
                </th>

                <th scope="col" className="text-dark th">
                  {movie.summery.total_averagespeed
                    ? `${movie.summery.total_averagespeed}`
                    : 0}{" "}
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
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_pack ? `${movie.summery.total_pack}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_kg ? `${movie.summery.total_kg}` : 0}
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
