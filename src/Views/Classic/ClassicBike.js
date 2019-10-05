import React, { Component } from "react";
import Summery from "./Summery";
import DateForm from "../Electric/DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";
import config from "../config";

class ClassicBike extends Component {
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
        `${config.apiUrl.classic}?too__lte=${to}&fromm__gte=${from}`
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
      const res = await fetch(config.apiUrl.classic);
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
          <table class="table table-hover" style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col" className="t">
                  Lp
                </th>
                <th scope="col">Identyfikator roweru</th>
                <th scope="col" style={{ width: "90px" }} className="t">
                  Dystans
                </th>
                <th scope="col" style={{ width: "100px" }}>
                  Czas w ruchu
                </th>
                <th scope="col" className="t" style={{ width: "100px" }}>
                  Średnia prędkość
                </th>
                <th scope="col">Llość przesylek listiwych</th>
                {/* Adde New in api */}
                <th scope="col">Masa przesylek listiwych</th>
                {/* Adde New in api */}
                <th scope="col">Llość paczek</th>
                {/* Adde New in api */}
                <th scope="col">Masa paczek</th>
                <th scope="col" style={{ width: "100px" }}>
                  Zaoszczędzone CO2
                </th>
                <th scope="col">Liczba dobrań przesyłek </th>
              </tr>
            </thead>
            {this.state.movies.map(c => (
              <tbody key={c.id}>
                <tr className="one">
                  <td>{c.id}</td>
                  <td>
                    <a
                      href={"coverview/" + c.id}
                      style={{ color: "#13B760" }}
                      class="font-weight-bold"
                    >
                      CB-{c.user}
                    </a>
                  </td>
                  <td>{c.total_milage ? `${c.total_milage}` : 0} Km</td>
                  <td>{c.total_movingtime ? `${c.total_movingtime}` : 0} hr</td>
                  <td>
                    {c.total_averagespeed ? `${c.total_averagespeed}` : 0} Km/hr
                  </td>
                  <td>{c.total_letter ? `${c.total_letter}` : 0}</td>
                  <td>
                    {c.total_ship_weight ? `${c.total_ship_weight}` : 0} kgs
                  </td>
                  <td>{c.total_pack ? `${c.total_pack}` : 0}</td>
                  <td>{c.total_kg ? `${c.total_kg}` : 0} Kg</td>
                  <td>{c.total_co2_save ? `${c.total_co2_save}` : 0} Mg </td>
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

export default ClassicBike;
