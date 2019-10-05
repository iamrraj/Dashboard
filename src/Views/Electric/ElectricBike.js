import React, { Component } from "react";
import Summery from "./Summery";
import DateForm from "./DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";
import config from "../config";

class ElectricBike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  // Get Data from filter date
  getData = async e => {
    try {
      const from = e.target.elements.from.value;
      const to = e.target.elements.to.value;
      e.preventDefault();
      const res = await fetch(
        `${config.apiUrl.electric}?too__lte=${to}&fromm__gte=${from}`
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.electric);
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <DateForm loaddata={this.getData} />

        <Topbar1 />

        <div
          className="bg-white"
          style={{ padding: "15px", borderTop: "2px solid #CCEFDC" }}
        >
          <table
            class="table table-hover table-lg "
            style={{ marginTop: "20px" }}
            id="dtBasicExample"
          >
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
                <th scope="col">Llość przesyłek listiwych</th>

                <th scope="col">Masa przesyłek listiwych</th>

                <th scope="col">Llość paczek</th>

                <th scope="col" className="t">
                  Masa paczek
                </th>
                <th scope="col">Zaoszczędzone CO2</th>
                <th scope="col">Liczba dobrań </th>
                <th scope="col">Liczba uzytkowników</th>
              </tr>
            </thead>

            {this.state.movies.map(c => (
              <tbody key={c.pk}>
                <tr>
                  <td>{c.id}</td>
                  <td>
                    <a
                      href={"eoverview/" + c.id}
                      style={{ color: "#13B760" }}
                      class="font-weight-bold"
                    >
                      {c.label}
                    </a>
                  </td>
                  <td>{c.total_milage ? `${c.total_milage}` : 0} Km</td>
                  <td>{c.total_movingtime ? `${c.total_movingtime}` : 0} hr</td>
                  <td>
                    {c.total_averagespeed ? `${c.total_averagespeed}` : 0} km/hr
                  </td>
                  <td>{c.total_letter ? `${c.total_letter}` : 0}</td>
                  <td>
                    {c.total_ship_weight ? `${c.total_ship_weight}` : 0} kgs
                  </td>
                  <td>{c.total_pack ? `${c.total_pack}` : 0}</td>
                  <td>{c.total_kg ? `${c.total_kg}` : 0} Kg</td>
                  <td>{c.total_co2_save ? `${c.total_co2_save}` : 0} mg </td>
                  <td>{c.total_boxes ? `${c.total_boxes}` : 0}</td>
                  <td>{c.total_user ? `${c.total_user}` : 0}</td>
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

export default ElectricBike;
