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
            {c.total_milage ? `${c.total_milage}` : 0} Km
          </th>
          <th scope="col" className="text-dark th">
            {c.total_movingtime ? `${c.total_movingtime}` : 0}
          </th>
          <th scope="col" className="text-dark th">
            {c.total_letter ? `${c.total_letter}` : 0}
          </th>
          <th scope="col" className="text-dark th">
            {c.total_kg ? `${c.total_kg}` : 0} kg
          </th>
          <th scope="col" className="text-dark th">
            {c.total_pack ? `${c.total_pack}` : 0}
          </th>
          <th scope="col" className="text-dark th">
            {c.total_ship_weight ? `${c.total_ship_weight}` : 0} kg
          </th>
          <th scope="col" className="text-dark th">
            {c.total_boxes ? `${c.total_boxes}` : 0}
          </th>
        </tr>
      </thead>
    );
  }
}
