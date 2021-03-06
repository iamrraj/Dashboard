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
        user
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
        `${config.apiUrl.user}?date__lte=${to}&date__gte=${from}`
      );
      const user = await res.json();
      console.log(user);
      this.setState({
        user
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
                  Id
                </th>
                <th scope="col">
                  Dystans pieszo <br></br> (km)
                </th>
                <th scope="col" style={{ width: "110px" }}>
                  Przeniesiona masa <br></br>przesyłek (kg)
                </th>
                <th scope="col">
                  Dystans rowerem klasycznym <br></br> (km)
                </th>
                <th scope="col">
                  Przewieziona masa przesyłek RK <br></br> (kg)
                </th>
                <th scope="col">
                  Dystans rowerem elektrycznym <br></br> (km)
                </th>
                <th scope="col">
                  Przewieziona masa przesyłek RE<br></br> (kg)
                </th>
                <th scope="col">
                  Całkowity dystans<br></br> (km)
                </th>
                <th scope="col">
                  Całkowita masa przesyłek<br></br> (kg)
                </th>
              </tr>
            </thead>
            {this.state.user.map(c => (
              <tbody key={c.pk}>
                <tr>
                  <th scope="row">{c.pk}</th>
                  <td>
                    <a
                      href={"uoverview/" + c.pk}
                      style={{ color: "#13B760" }}
                      class="font-weight-bold"
                    >
                      {c.user}
                    </a>
                  </td>
                  <td>{c.total_walk_milage ? `${c.total_walk_milage}` : 0}</td>
                  <td>{c.total_walk_kg ? `${c.total_walk_kg}` : 0} </td>
                  <td>
                    {c.total_classic_milage ? `${c.total_classic_milage}` : 0}{" "}
                  </td>
                  <td>{c.total_classic_kg ? `${c.total_classic_kg}` : 0} </td>
                  <td>
                    {c.total_electric_milage ? `${c.total_electric_milage}` : 0}{" "}
                  </td>
                  <td>{c.total_electric_kg ? `${c.total_electric_kg}` : 0}</td>
                  <td>{c.total_milage ? `${c.total_milage}` : 0} </td>
                  <td>{c.total_kg ? `${c.total_kg}` : 0} </td>
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
