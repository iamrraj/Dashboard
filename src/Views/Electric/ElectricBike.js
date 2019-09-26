import React, { Component } from "react";
import Summery from "./Summery";
import DateForm from "./DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";

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
        `https://softbike.herokuapp.com/api/ebike?too__lte=${to}&fromm__gte=${from}`
      );
      const movies = await res.json();
      // console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    try {
      const res = await fetch(`https://softbike.herokuapp.com/api/ebike`);
      const movies = await res.json();
      // console.log(movies);
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
                <th scope="col">Lp</th>
                <th scope="col">Identyfikator</th>
                <th scope="col">Dystans</th>
                <th scope="col">Czas w ruchu</th>
                <th scope="col">Średnia prędkość</th>
                <th scope="col">Llość przesyłek listiwych</th>
                {/* Adde New in api */}
                <th scope="col">Masa przesyłek listiwych</th>
                {/* Adde New in api */}
                <th scope="col">Llość paczek</th>
                {/* Adde New in api */}
                <th scope="col">Masa paczek</th>
                <th scope="col">Zaoszczędzone CO2</th>
                <th scope="col">Liczba dobrań </th>
                <th scope="col">Liczba uzytkowników</th>
              </tr>
            </thead>
            {/*
             */}

            {this.state.movies.map(c => (
              <tbody key={c.id}>
                <tr>
                  <td>{c.pk}</td>
                  <td>
                    <a
                      href={"eoverview/" + c.pk}
                      style={{ color: "#13B760" }}
                      class="font-weight-bold"
                    >
                      {c.bikeid}
                    </a>
                  </td>
                  <td>{c.milage} Km</td>
                  <td>{c.movingtime} hr</td>
                  <td>{c.averagespeed} km/hr</td>
                  <td>{c.letteritems}</td>
                  <td>{c.shipweight} kgs</td>
                  <td>{c.package}</td>
                  <td>{c.kgtrasported} Kg</td>
                  <td>{c.co2} mg </td>
                  <td>{c.additionalbox}</td>
                  <td>{c.nouser}</td>
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
