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
    // this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    // this.setState({ value: event.target.value});
    event.preventDefault();
  }

  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.walk);
      const walk = await res.json();
      console.log(walk);
      this.setState({
        walk: walk.results
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
        `${config.apiUrl.walk}?too__lte=${to}&fromm__gte=${from}`
      );
      const walk = await res.json();
      // console.log(walk);
      this.setState({
        walk: walk.results
      });
    } catch (e) {
      console.log(e);
    }
  };

  // handleChange(event) {
  //     this.setState({ value: event.target.value});
  // }
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
                <th scope="col" style={{ width: "70px" }} className="t">
                  Lp
                </th>
                <th scope="col" style={{ width: "130px" }} className="t">
                  Uźytkownik
                </th>
                <th scope="col" style={{ width: "100px" }} className="t">
                  Dystans
                </th>
                <th scope="col" style={{ width: "150px" }} className="t">
                  Czas w ruchu
                </th>

                <th scope="col" style={{ width: "130px" }}>
                  Llość przesylek listiwych
                </th>
                <th scope="col">
                  Masa przesylek<br></br> listiwych
                </th>
                <th scope="col" className="t">
                  Llość paczek
                </th>

                <th scope="col" className="t">
                  Masa paczek
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
                  <th scope="row">{c.id}</th>
                  <td>
                    <a
                      href={"woverview/" + c.id}
                      style={{ color: "#13B760" }}
                      class="font-weight-bold"
                    >
                      {c.user}{" "}
                    </a>
                  </td>
                  <td>{c.total_milage ? `${c.total_milage}` : 0} km</td>
                  <td>{c.total_movingtime ? `${c.total_movingtime}` : 0} hr</td>
                  <td>{c.total_letter ? `${c.total_letter}` : 0}</td>
                  <td>
                    {c.total_ship_weight ? `${c.total_ship_weight}` : 0} kg
                  </td>
                  <td>{c.total_pack ? `${c.total_pack}` : 0}</td>
                  <td>{c.total_kg ? `${c.total_kg}` : 0} kg</td>
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
