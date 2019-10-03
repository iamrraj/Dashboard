import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ marginTop: "20px" }}
      >
        <cente>
          <h5 className="text-white">Copyright </h5>
        </cente>
      </nav>
    );
  }
}
{
  /* <p>Choose the Distribution Type</p>
  <div className="btn-group">
    <button
      type="button"
      className="btn btn-outline-success  active"
      onClick={this.walk}
      name="walk"
      style={{ background: "rgba(19, 183, 96, 1.0)" }}
    >
      Walk
    </button>
    <button
      type="button"
      className="btn btn-outline-success "
      onClick={this.electric}
      name="eb"
    >
      EB
    </button>
    <button
      type="button"
      className="btn btn-outline-success "
      onClick={this.classic}
      name="cb"
    >
      CB
    </button>
    <button
      type="button"
      className="btn btn-outline-success "
      onClick={this.user}
      name="user"
    >
      User
    </button>
  </div>

  <div className="form-group" style={{ marginTop: "20px" }}>
    <label for="exampleFormControlSelect2">
      {this.state.text}
    </label>
    {/* value={this.state.value} name={this.props.name} onChange={this.handleChange.bind(this)} */
}
{
  /* <select
      multiple
      className="form-control btn-block"
      id="exampleFormControlSelect2 btn-block"
      style={{ width: "200px", color: "rgba(19, 183, 96, 1.0)" }}
    >
      <option>Electric Bike</option>
      <option>Classic Bike</option>
      <option>Walk</option>
      <option>User</option>
      <option>User 1</option>
    </select>
  </div> */
}

export default Footer;
