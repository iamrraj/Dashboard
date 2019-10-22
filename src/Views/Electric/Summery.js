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
        <tr className="thead ">
          <th scope="col"></th>
          <th scope="col" className="text-dark th">
            <strong>SUMA</strong>
          </th>
          <th scope="col" className="text-dark th" style={{ width: "100px" }}>
            {c.total_milage ? `${c.total_milage}` : 0} km
          </th>
          <th scope="col" className="text-dark th" style={{ width: "100px" }}>
            {c.total_movingtime ? `${c.total_movingtime}` : 0}
          </th>
          <th scope="col" className="text-dark th" style={{ width: "100px" }}>
            {c.total_averagespeed ? `${c.total_averagespeed}` : 0} km/h
          </th>
          <th scope="col" className="text-dark th">
            {c.total_letter ? `${c.total_letter}` : 0}
          </th>
          <th scope="col" className="text-dark th">
            {c.total_ship_weight ? `${c.total_ship_weight}` : 0} kg
          </th>
          <th scope="col" className="text-dark th">
            {c.total_pack ? `${c.total_pack}` : 0}
          </th>
          <th scope="col" className="text-dark th" style={{ width: "150px" }}>
            {c.total_kg ? `${c.total_kg}` : 0} kg
          </th>
          <th scope="col" className="text-dark th">
            {c.total_co2_save ? `${c.total_co2_save}` : 0} mg
          </th>
          <th scope="col" className="text-dark th">
            {c.total_boxes ? `${c.total_boxes}` : 0}
          </th>
          <th scope="col" className="text-dark th">
            {c.total_user ? `${c.total_user}` : 0}
          </th>
        </tr>
      </thead>
    );
  }
}
