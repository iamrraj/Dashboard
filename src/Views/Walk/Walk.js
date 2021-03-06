import React, { Component } from "react";
import Summery from "./Summery";
import DateForm from "../Electric/DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";
import config from "../config";

class Walk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      walk: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.walk);
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
        `${config.apiUrl.walk}?date__lte=${to}&date__gte=${from}`
      );
      const walk = await res.json();
      // console.log(walk);
      this.setState({
        walk
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <DateForm loaddata={this.getData} />

        <Topbar1 />
        <div
          className="bg-white"
          style={{ padding: "15px", borderTop: "2px solid #CCEFDC" }}
        >
          <table class="table " style={{ marginTop: "20px" }}>
            <thead style={{ background: "#CCEFDC" }}>
              <tr className="thead1">
                <th scope="col" style={{ width: "70px" }} className="tt">
                  Lp
                </th>
                <th scope="col" style={{ width: "130px" }} className="tt">
                  Uźytkownik
                </th>
                <th scope="col" style={{ width: "100px" }}>
                  Dystans<br></br> (km)
                </th>
                <th scope="col" style={{ width: "150px" }}>
                  Czas w ruchu<br></br> (g : min)
                </th>

                <th scope="col" style={{ width: "130px" }}>
                  Ilość przesylek listowych
                </th>
                <th scope="col">
                  Masa przesylek <br></br>listowych (kg)
                </th>
                <th scope="col" className="tt">
                  Ilość paczek
                </th>

                <th scope="col">
                  Masa paczek <br></br> (kg)
                </th>
                <th scope="col" style={{ width: "120px" }}>
                  Liczba dobrań przesylek
                </th>
                {/* &nbsp;
                  <i class="fa fa-sort" aria-hidden="true"></i> */}
              </tr>
            </thead>
            {this.state.walk.map(c => (
              <tbody key={c.pk}>
                <tr>
                  <th scope="row">{c.pk}</th>
                  <td>
                    <a
                      href={"woverview/" + c.pk}
                      style={{ color: "#13B760" }}
                      class="font-weight-bold"
                    >
                      {c.user}{" "}
                    </a>
                  </td>
                  <td>{c.total_milage ? `${c.total_milage}` : 0} </td>
                  <td>{c.total_movingtime ? `${c.total_movingtime}` : 0} </td>
                  <td>{c.total_letter ? `${c.total_letter}` : 0}</td>
                  <td>{c.total_kg ? `${c.total_kg}` : 0} </td>
                  <td>{c.total_pack ? `${c.total_pack}` : 0}</td>
                  <td>{c.total_ship_weight ? `${c.total_ship_weight}` : 0}</td>
                  <td>{c.total_boxes ? `${c.total_boxes}` : 0}</td>
                </tr>
              </tbody>
            ))}
            <Summery />
          </table>
        </div>
      </div>
    );
  }
}

export default Walk;
