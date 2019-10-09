import React, { Component } from "react";
import Summery from "./summery";
import DateForm from "../Electric/DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";

import config from "../config";

export class user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      user: []
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.user);
      const user = await res.json();
      console.log(user);
      this.setState({
        user: user.results
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
        `${config.apiUrl.user}?too__lte=${to}&fromm__gte=${from}`
      );
      const user = await res.json();
      console.log(user);
      this.setState({
        user: user.results
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

        {/* <h3 className="text-center" style={{marginTop:"10px"}}> User Details: &nbsp;<strong> POSTMAN NAME</strong> </h3> */}
        <div
          className="bg-white"
          style={{ padding: "15px", borderTop: "2px solid #CCEFDC" }}
        >
          <table class="table table-hover" style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col" className="t">
                  Lp{" "}
                </th>
                <th scope="col" className="t">
                  Uzytkownik
                </th>
                <th scope="col">Dystans pieszo</th>
                <th scope="col">Przeniesiona masa przesyłek</th>
                <th scope="col">Dystans rowerem klasycznym</th>
                <th scope="col">Przeniesiona masa przesyłek RK</th>
                <th scope="col">Dystans rowerem elektrycznym</th>
                <th scope="col">Przeniesiona masa przesyłek RE</th>
                <th scope="col">Całkowity dystans</th>
                <th scope="col">Całkowita masa przesyłek</th>
              </tr>
            </thead>
            {this.state.user.map(c => (
              <tbody key={c.pk}>
                <tr>
                  <th scope="row">{c.id}</th>
                  <td>
                    <a
                      href={"uoverview/" + c.id}
                      style={{ color: "#13B760" }}
                      class="font-weight-bold"
                    >
                      {c.username}
                    </a>
                  </td>
                  <td>
                    {c.total_walk_milage ? `${c.total_walk_milage}` : 0} km
                  </td>
                  <td>{c.total_walk_kg ? `${c.total_walk_kg}` : 0} kg</td>
                  <td>
                    {c.total_classic_milage ? `${c.total_classic_milage}` : 0}{" "}
                    Km
                  </td>
                  <td>{c.total_classic_kg ? `${c.total_classic_kg}` : 0} kg</td>
                  <td>
                    {c.total_electric_milage ? `${c.total_electric_milage}` : 0}{" "}
                    km
                  </td>
                  <td>
                    {c.total_electric_kg ? `${c.total_electric_kg}` : 0} kg
                  </td>
                  <td>{c.total_milage ? `${c.total_milage}` : 0} km</td>
                  <td>{c.total_kg ? `${c.total_kg}` : 0} kg</td>
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

export default user;
