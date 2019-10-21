import React, { Component } from "react";
import config from "../config";
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      movies: []
    };
  }

  handleChange = e => {
    let target = e.target;
    let name = target.name;
    //here
    let value = Array.from(target.selectedOptions, option => option.value);
    this.setState({
      [name]: value
    });
  };

  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.reportModel);
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
      <div>
        <select
          name="selectOptions"
          multiple={true}
          onChange={this.handleChange}
          value={this.state.selectOptions}
        >
          {this.state.movies.map(c => (
            <option value={c.pk}>{c.user1}</option>
          ))}
        </select>
        <div>{this.state.selectOptions.join(", ")}</div>
      </div>
    );
  }
}
export default Demo;
