import React, { Component } from "react";
import Summery from "./summery";
import DateForm from "../Electric/DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";

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
      const res = await fetch(`https://softbike.herokuapp.com/api/user`);
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
        `https://softbike.herokuapp.com/api/user?too__lte=${to}&fromm__gte=${from}`
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
                <th scope="col">Lp </th>
                <th scope="col">Uzytkownik</th>
                <th scope="col">Dystans pieszo</th>
                <th scope="col">Przeniesiona masa przesyłek</th>
                <th scope="col">Dystans rowerem klasycznym</th>
                <th scope="col">Przeniesiona masa przesyłek RK</th>
                <th scope="col">Dystans rowerem elektrycznym</th>
                <th scope="col">Przeniesiona masa przesyłek RE</th>
                <th scope="col">Całkowity dystans</th>
                <th scope="col">Całkowity masa przesyłek</th>
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
                  <td>{c.trwalk} Km</td>
                  <td>{c.Dtwalk} Kg</td>
                  <td>{c.trclassic} Km</td>
                  <td>{c.Dtclassic} Kg</td>
                  <td>{c.trelectric} Km</td>
                  <td>{c.Dtelectric} Kg</td>
                  <td>{c.totalMilage} Km</td>
                  <td>{c.totalweight} Kg</td>
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
