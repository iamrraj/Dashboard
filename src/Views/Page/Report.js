import React, { Component } from "react";
import ReactToExcel from "react-html-table-to-excel";
import Topbar1 from "../../Container/Layout/Topbar1";
import config from "../config";
// import Report from "../../Container/Layout/Report";
// import Form from "./Form";
import Repor from "./Repor";

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  // Get Data from filter date
  getData = async e => {
    try {
      const idd = e.target.elements.idd.value;
      const modee = e.target.elements.modee.value;
      const from = e.target.elements.from.value;
      const to = e.target.elements.to.value;
      e.preventDefault();
      const res = await fetch(
        `${config.apiUrl.report}?too__lte=${to}&fromm__gte=${from}&user=${idd}&mode=${modee}`
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "30px" }}>
        <Repor loaddata={this.getData} />
        <Topbar1 />
        <div style={{ background: "white", padding: "15px" }}>
          <h5
            className="font-weight-bold"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            {" "}
            RAPORT{" "}
          </h5>

          <table class="table table-hover table-lg " id="table-to-xls">
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col" className="t">
                  Lp
                </th>
                <th scope="col" className="t">
                  Identyfikator
                </th>
                <th scope="col" className="t">
                  Dystans
                </th>
                <th scope="col">Czas w ruchu</th>
                <th scope="col">Średnia prędkość</th>
                <th scope="col">Ilość przesyłek listowych</th>

                <th scope="col">Masa przesyłek listowych</th>

                <th scope="col">Ilość paczek</th>

                <th scope="col">Masa paczek</th>
                <th scope="col">Zaoszczędzone CO2</th>
                <th scope="col">Liczba dobrań </th>
                <th scope="col">Liczba uzytkowników</th>
              </tr>
            </thead>

            {this.state.movies.map(c => (
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <a
                      href="/overview/4343"
                      style={{ color: "#13B760" }}
                      class="font-weight-bold"
                    >
                      {c.user}
                    </a>
                  </td>
                  <td>{c.total_milage ? `${c.total_milage}` : 0} km</td>
                  <td>{c.total_movingtime ? `${c.total_movingtime}` : 0} hr</td>
                  <td>
                    {c.total_averagespeed ? `${c.total_averagespeed}` : 0} km/hr
                  </td>
                  <td>{c.total_letter ? `${c.total_letter}` : 0} kg</td>
                  <td>
                    {c.total_ship_weight ? `${c.total_ship_weight}` : 0} kg
                  </td>
                  <td>{c.total_pack ? `${c.total_pack}` : 0}</td>
                  <td>{c.total_kg ? `${c.total_kg}` : 0} kg</td>
                  <td>{c.total_co2_save ? `${c.total_co2_save}` : 0} mg </td>
                  <td>{c.total_boxes ? `${c.total_boxes}` : 0}</td>
                  <td>{c.total_user ? `${c.total_user}` : 0}</td>
                </tr>
              </tbody>
            ))}

            <thead className="thead">
              <tr>
                <th scope="col"></th>
                <th scope="col" className="text-dark th">
                  <strong>SUMA</strong>
                </th>
                <th scope="col" className="text-dark th">
                  45 km
                </th>
                <th scope="col" className="text-dark th">
                  4h 11 min
                </th>
                <th scope="col" className="text-dark th">
                  14 km/hr
                </th>
                <th scope="col" className="text-dark th">
                  67 kg
                </th>
                <th scope="col" className="text-dark th">
                  190 kg
                </th>
                <th scope="col" className="text-dark th">
                  14
                </th>
                <th scope="col" className="text-dark th">
                  4
                </th>
                <th scope="col" className="text-dark th">
                  190 kg
                </th>
                <th scope="col" className="text-dark th">
                  14
                </th>
                <th scope="col" className="text-dark th">
                  4
                </th>
              </tr>
            </thead>
          </table>
          <center>
            <ReactToExcel
              className="btn btn-success btn-lg bb"
              table="table-to-xls"
              filename="SoftbikeReport"
              sheet="sheet 1"
              buttonText="Export CSV"
            />
          </center>

          {/* <Report loaddata={this.getData} /> */}
        </div>
      </div>
    );
  }
}

export default ReportPage;
