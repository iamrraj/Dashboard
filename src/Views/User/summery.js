import React, { Component } from "react";
import config from "../config";

class Summery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.dashboard);
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
        {/* {this.state.dash.map(c => ( */}
        <tr className="thead">
          <th scope="col" className="font-weight-bold"></th>
          <th scope="col" className="font-weight-bold">
            SUMA
          </th>
          <th scope="col" className="text-dark th" style={{ width: "90px" }}>
            {c.total_walk_milage ? `${c.total_walk_milage}` : 0} km
          </th>
          <th scope="col" className="text-dark th">
            {c.total_walk_kg ? `${c.total_walk_kg}` : 0} kg
          </th>
          <th scope="col" className="text-dark th">
            {c.total_classic_milage ? `${c.total_classic_milage}` : 0} km
          </th>
          <th scope="col" className="text-dark th">
            {c.total_classic_kg ? `${c.total_classic_kg}` : 0} kg
          </th>
          <th scope="col" className="text-dark th">
            {c.total_electric_milage ? `${c.total_electric_milage}` : 0} km
          </th>
          <th scope="col" className="text-dark th">
            {c.total_electric_kg ? `${c.total_electric_kg}` : 0} kg
          </th>
          <th scope="col" className="text-dark th">
            {c.total_milage ? `${c.total_milage}` : 0} km
          </th>
          <th scope="col" className="text-dark th">
            {c.total_kg ? `${c.total_kg}` : 0} kg
          </th>
        </tr>
        {/* ))} */}
      </thead>
    );
  }
}

export default Summery;
