import React, { Component } from "react";

export class Datee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toLocaleDateString();
    this.setState({ date });
  };

  render() {
    const { date } = this.state;
    return (
      <div>
        <p style={{ fontSize: "13px", opacity: "0.7" }}>dziś jest {date}</p>
      </div>
    );
  }
}

export default Datee;
