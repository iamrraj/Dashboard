import React, { Component } from "react";
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
            {walk.user}
          </a>
          <table class="table " style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col">Ld</th>
                <th scope="col">Data</th>
                <th scope="col">
                  Dystans <br></br> (km)
                </th>
                <th scope="col">
                  Czas w ruchu<br></br> (g : min)
                </th>
                <th scope="col">Ilość przesylek listowych</th>
                <th scope="col">
                  Masa przesylek listowych<br></br> (kg)
                </th>
                <th scope="col">Ilość paczek</th>
                <th scope="col">
                  Masa paczek<br></br> (kg)
                </th>
                <th scope="col">Liczba dobrań przesylek</th>
              </tr>
            </thead>
            {walk.detail.map(c => (
              <tbody>
                <tr>
                  <td>{c.id}</td>
                  <td>{c.date ? `${c.date}` : 0} </td>
                  <td>{c.foot_mileage ? `${c.foot_mileage}` : 0} </td>
                  <td>{c.foot_time ? `${c.foot_time}` : 0}</td>
                  <td>{c.letternumber ? `${c.letternumber}` : 0}</td>
                  <td>{c.letterweight ? `${c.letterweight}` : 0} </td>
                  <td>{c.packagenumber ? `${c.packagenumber}` : 0}</td>
                  <td>{c.packageweight ? `${c.packageweight}` : 0} </td>
                  <td>{c.delivery_count ? `${c.delivery_count}` : 0}</td>
                </tr>
              </tbody>
            ))}

            <thead>
              <tr className="thead">
                <th scope="col"></th>
                <th scope="col" className="text-dark th">
                  <strong>SUMA</strong>
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_milage
                    ? `${walk.summery.total_milage}`
                    : 0}{" "}
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_movingtime
                    ? `${walk.summery.total_movingtime}`
                    : 0}{" "}
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_letter
                    ? `${walk.summery.total_letter}`
                    : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_ship_weight
                    ? `${walk.summery.total_ship_weight}`
                    : 0}{" "}
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_pack ? `${walk.summery.total_pack}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_kg ? `${walk.summery.total_kg}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {walk.summery.total_boxes ? `${walk.summery.total_boxes}` : 0}
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
