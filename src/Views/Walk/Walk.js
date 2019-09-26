import React, { Component } from "react";
import Summery from "./Summery";
import DateForm from "../Electric/DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";

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
      const res = await fetch(`https://softbike.herokuapp.com/api/walk`);
      const walk = await res.json();
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
        `https://softbike.herokuapp.com/api/walk?too__lte=${to}&fromm__gte=${from}`
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
                <th scope="col" style={{ width: "100px" }}>
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
                  <th scope="row">{c.pk}</th>
                  <td>
                    <a
                      href={"woverview/" + c.pk}
                      style={{ color: "#13B760" }}
                      class="font-weight-bold"
                    >
                      {c.username}{" "}
                    </a>
                  </td>
                  <td>{c.milage} Km</td>
                  <td>{c.movingtime} hr</td>
                  <td>{c.letteritems}</td>
                  <td>{c.shipweight} kgs</td>
                  <td>{c.package}</td>
                  <td>{c.kgtransported} Kgs</td>
                  <td>{c.additionalbox}</td>
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
