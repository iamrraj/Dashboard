import React, { Component } from "react";
import config from "../config";

export default class Summery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dash: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.electricsummery);
      const dash = await res.json();
      // console.log(dash)
      this.setState({
        dash: dash.results
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <thead>
        {this.state.dash.map(c => (
          <tr className="thead ">
            <th scope="col"></th>
            <th scope="col" className="text-dark th">
              <strong>SUMMERY</strong>
            </th>
            <th scope="col" className="text-dark th" style={{ width: "100px" }}>
              {c.total_milage} Km
            </th>
            <th scope="col" className="text-dark th" style={{ width: "100px" }}>
              {c.total_movingtime} hr
            </th>
            <th scope="col" className="text-dark th" style={{ width: "100px" }}>
              {c.total_averagespeed} km/hr
            </th>
            <th scope="col" className="text-dark th">
              {c.total_letter}
            </th>
            <th scope="col" className="text-dark th">
              {c.total_ship_weight} kgs
            </th>
            <th scope="col" className="text-dark th">
              {c.total_pack}
            </th>
            <th scope="col" className="text-dark th" style={{ width: "150px" }}>
              {c.total_kg} kg
            </th>
            <th scope="col" className="text-dark th">
              {c.total_co2_save} mg
            </th>
            <th scope="col" className="text-dark th">
              {c.total_boxes}
            </th>
            <th scope="col" className="text-dark th">
              {c.total_user}
            </th>
          </tr>
        ))}
      </thead>
    );
  }
}
