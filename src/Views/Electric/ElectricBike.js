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
        `http://localhost:8000/api/1/bikes/electric/?too__lte=${to}&fromm__gte=${from}`
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

  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.electric);
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies
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
                <th scope="col" id="tl">
                  Dystans <br></br> (km)
                </th>
                <th scope="col">
                  Czas w ruchu<br></br> (g : min)
                </th>
                <th scope="col">
                  Średnia prędkość<br></br> (km/h)
                </th>
                <th scope="col">Ilość przesyłek listowych</th>

                <th scope="col" style={{ width: "150px" }}>
                  Masa przesyłek listowych<br></br> (kg)
                </th>

                <th scope="col" id="tl">
                  Ilość paczek
                </th>

                <th scope="col " id="tl">
                  Masa paczek<br></br> (kg)
                </th>
                <th scope="col">
                  Zaoszczędzone CO2 <br></br> (mg)
                </th>
                <th scope="col" id="tl">
                  Liczba dobrań{" "}
                </th>
                <th scope="col" id="tl">
                  Liczba uzytkowników
                </th>
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
                  <td>{c.total_milage ? `${c.total_milage}` : 0} </td>
                  <td>{c.total_movingtime ? `${c.total_movingtime}` : 0} </td>
                  <td>
                    {c.total_averagespeed ? `${c.total_averagespeed}` : 0}
                  </td>
                  <td>{c.total_letter ? `${c.total_letter}` : 0}</td>
                  <td>
                    {c.total_letter_weight ? `${c.total_letter_weight}` : 0}
                  </td>
                  <td>{c.total_pack ? `${c.total_pack}` : 0}</td>
                  <td>
                    {c.total_package_weight ? `${c.total_package_weight}` : 0}{" "}
                  </td>
                  <td>{c.total_co2_save ? `${c.total_co2_save}` : 0} </td>
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
