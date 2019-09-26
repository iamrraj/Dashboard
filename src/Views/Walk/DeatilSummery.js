import React, { Component } from "react";

export class DeatilSummery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dash: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://softbike.herokuapp.com/api/dswalk`);
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
            <th scope="col"></th>
            <th scope="col" className="text-dark th">
              <strong>Summery</strong>
            </th>
            <th scope="col" className="text-dark th">
              {c.total_milage} Km
            </th>
            <th scope="col" className="text-dark th">
              {c.total_movingtime} hr
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
            <th scope="col" className="text-dark th">
              {c.total_kg} kgs
            </th>
            <th scope="col" className="text-dark th">
              {c.total_boxes}
            </th>
          </tr>
        ))}
      </thead>
    );
  }
}

export default DeatilSummery;
