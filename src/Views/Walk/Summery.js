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
      const res = await fetch(config.apiUrl.walksummerry);
      const c = await res.json();
      // console.log(dash)
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
        <tr className="thead">
          <th scope="col"></th>
          <th scope="col" className="text-dark th">
            <strong>SUMA</strong>
          </th>
          <th scope="col" className="text-dark th">
            {c.total_milage} Km
          </th>
          <th scope="col" className="text-dark th">
            {c.total_movingtime}
          </th>
          <th scope="col" className="text-dark th">
            {c.total_letter}
          </th>
          <th scope="col" className="text-dark th">
            {c.total_kg} kg
          </th>
          <th scope="col" className="text-dark th">
            {c.total_pack}
          </th>
          <th scope="col" className="text-dark th">
            {c.total_ship_weight} kg
          </th>
          <th scope="col" className="text-dark th">
            {c.total_boxes}
          </th>
        </tr>
      </thead>
    );
  }
}
