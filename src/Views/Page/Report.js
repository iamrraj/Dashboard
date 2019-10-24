import React, { Component } from "react";
import ReactToExcel from "react-html-table-to-excel";
import Topbar1 from "../../Container/Layout/Topbar1";
import config from "../config";
import Repor from "./Repor";

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: [],
      movies1: []
    };
  }

  getDataa = async e => {
    try {
      const edd = e.target.elements.edd.value;
      const selections = [...e.target.elements.selectOptions.options].filter(
        opt => opt.selected
      );
      const selectedValues = selections.map(opt => opt.value);
      const selectedString = selectedValues.join(",");
      const modee = e.target.elements.modee.value;
      const from = e.target.elements.from.value;
      const to = e.target.elements.to.value;
      e.preventDefault();
      Promise.all([
        fetch(
          `${config.apiUrl.report}?date__lte=${to}&date__gte=${from}&user=${selectedString}&mode=${modee}&electric_bike=${edd}`
        )
          .then(movies1 => movies1.json())
          .then(movies1 => {
            console.log(movies1);
            this.setState({
              movies1
            });
          }),
        fetch(
          `${config.apiUrl.reportsummery}?date__lte=${to}&date__gte=${from}&user=${selectedString}&mode=${modee}&electric_bike=${edd}`
        )
          .then(c => c.json())
          .then(c => {
            console.log(c);
            this.setState({
              c
            });
          })
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { c } = this.state;
    if (c === null) return <p>Loading ....</p>;
    return (
      <div className="container" style={{ marginTop: "30px" }}>
        <Repor loaddata={this.getDataa} />
        <Topbar1 />
        <div
          className="bg-white"
          style={{ borderTop: "2px solid #CCEFDC" }}
        ></div>
        <div style={{ background: "white", padding: "15px" }}>
          <h5
            className="font-weight-bold"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            {" "}
            RAPORT{" "}
          </h5>
          <a
            className="btn btn-success btn-sm bb pull-right "
            href="/report"
            data-toggle="modal"
            data-target="#exampleModal"
            style={{
              color: "white",
              fontSize: "17px",
              padding: "6px",
              width: "150px"
            }}
          >
            {" "}
            Raport
          </a>

          <table class="table table-hover table-lg " id="table-to-xls">
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col" className="t">
                  Lp
                </th>
                <th scope="col" className="t">
                  Identyfikator
                </th>
                <th scope="col">
                  Dystans<br></br> (km)
                </th>
                <th scope="col" style={{ width: "100px" }}>
                  Czas w ruchu <br></br> (g : min)
                </th>
                <th scope="col">
                  Średnia prędkość <br></br> (km/h)
                </th>
                <th scope="col">Ilość przesyłek listowych</th>

                <th scope="col" style={{ width: "140px" }}>
                  Masa przesyłek listowych <br></br> (kg)
                </th>

                <th scope="col">Ilość paczek</th>

                <th scope="col">
                  Masa paczek<br></br> (kg)
                </th>
                <th scope="col">
                  Zaoszczędzone CO2<br></br> (mg)
                </th>
                <th scope="col">Liczba dobrań </th>
                <th scope="col">Liczba uzytkowników</th>
              </tr>
            </thead>

            {this.state.movies1.length > 0 ? (
              this.state.movies1.map(c => (
                <tbody key={c.pk}>
                  <tr>
                    <th scope="row">{c.pk}</th>
                    <td>
                      <a
                        href="/overview/4343"
                        style={{ color: "#13B760" }}
                        class="font-weight-bold"
                      >
                        {c.user}
                      </a>
                    </td>
                    <td>{c.total_milage ? `${c.total_milage}` : 0} </td>
                    <td>{c.total_movingtime ? `${c.total_movingtime}` : 0} </td>
                    <td>
                      {c.total_averagespeed ? `${c.total_averagespeed}` : 0}
                    </td>
                    <td>{c.total_letter ? `${c.total_letter}` : 0} </td>
                    <td>
                      {c.total_ship_weight ? `${c.total_ship_weight}` : 0}
                    </td>
                    <td>{c.total_pack ? `${c.total_pack}` : 0}</td>
                    <td>{c.total_kg ? `${c.total_kg}` : 0} </td>
                    <td>{c.total_co2_save ? `${c.total_co2_save}` : 0} </td>
                    <td>{c.total_boxes ? `${c.total_boxes}` : 0}</td>
                    <td>{c.total_user ? `${c.total_user}` : 0}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <div>
                {/* <p style={{ textAlign: "center" }}>BRAK DANYCH</p> */}
                <center>
                  <p
                    className="font-weight-bolder"
                    style={{
                      position: "relative",
                      padding: "5px",
                      left: "500px",
                      fontSize:"20px"
                    }}
                  >
                    BRAK DANYCH
                  </p>
                </center>
              </div>
            )}
            <thead className="thead">
              <tr>
                <th scope="col"></th>
                <th scope="col" className="text-dark th">
                  <strong>SUMA</strong>
                </th>
                <th scope="col" className="text-dark th">
                  {c.total_milage ? `${c.total_milage}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {c.total_movingtime ? `${c.total_movingtime}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {c.total_averagespeed ? `${c.total_averagespeed}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {c.total_letter ? `${c.total_letter}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {c.total_ship_weight ? `${c.total_ship_weight}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {c.total_pack ? `${c.total_pack}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {c.total_kg ? `${c.total_kg}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {c.total_co2_save ? `${c.total_co2_save}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {c.total_boxes ? `${c.total_boxes}` : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {c.total_user ? `${c.total_user}` : 0}
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
