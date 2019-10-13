import React, { Component } from "react";
import config from "../config";

export class Electric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      value: ["iamrraj"]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    //this.setState({value: event.option});
    this.setState({
      value: Array.from(event.target.selectedOptions, item => item.value)
    });
  }

  // Get Data From Backend
  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.electric);
      const movies = await res.json();
      // console.log(report);
      this.setState({
        movies
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <select
        multiple={true}
        // value={this.state.value}
        // onChange={this.handleChange}
        className="form-control btn-block"
        id="exampleFormControlSelect2 btn-block"
        style={{
          width: "200px",
          color: "rgba(19, 183, 96, 1.0)"
        }}
        name="edd"
      >
        {this.state.movies.map(c => (
          <option value={c.id}>{c.label}</option>
        ))}
      </select>
    );
  }
}

export default Electric;
