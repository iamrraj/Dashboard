import React, { Component } from "react";
import config from "../config";

class Summery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dash: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.dashboard);
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
          <tr className="thead">
            <th scope="col" className="font-weight-bold"></th>
            <th scope="col" className="font-weight-bold">
              SUMMERY
            </th>
            <th scope="col" className="text-dark th">
              {c.total_walk_milage} Km
            </th>
            <th scope="col" className="text-dark th">
              {c.total_walk_kg} Kg
            </th>
            <th scope="col" className="text-dark th">
              {c.total_classic_milage} km
            </th>
            <th scope="col" className="text-dark th">
              {c.total_classic_kg} kg
            </th>
            <th scope="col" className="text-dark th">
              {c.total_electric_milage} km
            </th>
            <th scope="col" className="text-dark th">
              {c.total_electric_kg} Kg
            </th>
            <th scope="col" className="text-dark th">
              {c.total_milage} Km
            </th>
            <th scope="col" className="text-dark th">
              {c.total_kg} Kgs
            </th>
          </tr>
        ))}
      </thead>
    );
  }
}

export default Summery;
