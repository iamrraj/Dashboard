import React, { Component } from "react";
// import DeatilSummery from "./DeatilSummery";
import DateForm from "../Electric/DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";
import config from "../config";

export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walk: null
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `${config.apiUrl.walk}${this.props.match.params.pk}/`
      );
      const walk = await res.json();
      console.log(walk);
      this.setState({
        walk
      });
    } catch (e) {
      console.log(e);
    }
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
      const walk = await res.json();
      console.log(walk);
      this.setState({
        walk: walk.results
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { walk } = this.state;
    if (walk === null) return <p>Loading ....</p>;
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <DateForm loaddata={this.getData} />
        <Topbar1 />
        <div
          className="bg-white"
          style={{ padding: "15px", borderTop: "2px solid #CCEFDC" }}
        >
          <a href="/walk" style={{ color: "black" }}>
            {" "}
            <i
              class="fa fa-arrow-left fa-1x"
              aria-hidden="true"
              style={{ color: "#CCEFDC", height: "20px" }}
            ></i>{" "}
            Anybody
          </a>
          <table class="table " style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col">Ld</th>
                <th scope="col">Data</th>
                <th scope="col">Dystans</th>
                <th scope="col">Czas w ruchu</th>
                <th scope="col">Llość przesylek listiwych</th>
                <th scope="col">Masa przesylek listiwych</th>
                <th scope="col">Llość paczek</th>
                <th scope="col">Masa paczek</th>
                <th scope="col">Liczba dobrań przesylek</th>
              </tr>
            </thead>
            {walk.detail.map(c => (
              <tbody>
                <tr>
                  <td>{c.id}</td>
                  <td>{c.timestamp} </td>
                  <td>{c.milage} km</td>
                  <td>{c.movingtime} hr</td>
                  <td>{c.letters_number}</td>
                  <td>{c.packaged_weight} kg</td>
                  <td>{c.packages_number}</td>
                  <td>{c.kgtrasported} kg</td>
                  <td>{c.additionalbox}</td>
                </tr>
              </tbody>
            ))}

            <thead>
              <tr className="thead">
                <th scope="col"></th>
                <th scope="col" className="text-dark th">
                  <strong>Summery</strong>
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_milage} Km
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_movingtime} hr
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_letter}
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_ship_weight} kgs
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_pack}
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_kg} kgs
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_boxes}
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default Details;
