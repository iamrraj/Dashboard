import React, { Component } from "react";
import config from "../config";

export default class Summery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.electricsummery);
      const c = await res.json();
      // console.log(c)
      this.setState({
        c
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { c } = this.state;
    if (c === null) return <p>Loading ....</p>;
    return (
      <thead>
        {/* {this.state.dash.map(c => ( */}

        <tr className="thead ">
          <th scope="col"></th>
          <th scope="col" className="text-dark th">
            <strong>SUMA</strong>
          </th>
          <th scope="col" className="text-dark th" style={{ width: "100px" }}>
            {c.total_milage} km
          </th>
          <th scope="col" className="text-dark th" style={{ width: "100px" }}>
            {c.total_movingtime}
          </th>
          <th scope="col" className="text-dark th" style={{ width: "100px" }}>
            {c.total_averagespeed} km/h
          </th>
          <th scope="col" className="text-dark th">
            {c.total_letter}
          </th>
          <th scope="col" className="text-dark th">
            {c.total_ship_weight} kg
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
        {/* ))} */}
      </thead>
    );
  }
}
