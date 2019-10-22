import React, { Component } from "react";
import config from "../config";
import axios from "axios";
import Swal from "sweetalert2";

export class Sms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // movie: [],
      user: "",
      text: "",
      errors: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    let authToken = localStorage.getItem("Token");
    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + JSON.parse(authToken)
      },

      url: "https://softbike.dev.myddp.eu/api/1/push/sms/",
      data: JSON.stringify({
        text: this.state.text,
        user: this.state.user
      })
    })
      .then(response => {
        console.log(response.data);

        Swal.fire({
          title: "Wiadomosc wyslana",
          type: "success",
          showConfirmButton: false,
          timer: 1000
        });
        // this.redirect();
      })
      .catch(response => {
        //handle error
        console.log(response);
        Swal.fire({
          title: "Blad podczas wysylania wiadomosci",
          type: "error",
          text: "Please Check",
          timer: 1000
        });
      });
  }

  // async componentDidMount() {
  //   try {
  //     const res = await fetch(
  //       `https://softbike.dev.myddp.eu/api/1/deliveries/user1/`
  //     );
  //     const movie = await res.json();
  //     console.log(movie);
  //     this.setState({
  //       movie: movie.pk
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  render() {
    // const { user } = this.state.movie;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-sm-12">
            <label id="p"> UZYTKOWNIK</label>
            <input
              type="text"
              ref="user"
              className="form-control"
              name="user"
              value={(this.state.value = 3)}
              onChange={this.handleChange}
            />
            <p>g {this.state.value}</p>
          </div>
          <br></br>

          <div className="col-sm-6">
            <br></br>
            <label id="p"> TYPE MESSAGE</label>
            <textarea
              className="form-control"
              row="3"
              ref="text"
              name="text"
              col="10"
              value={this.state.text}
              onChange={this.handleChange}
              //   placeholder="Type Message"
            ></textarea>
          </div>
        </div>
        <br></br>
        <center>
          <button
            type="submit"
            value="Get Data"
            className="btn btn-success active"
            style={{
              width: "200px",
              background: "rgba(19, 183, 96, 1.0)",
              padding: "7px",
              marginTop: "15px",
              marginBottom: "15px",
              fontWeight: "500"
            }}
          >
            Send Sms
          </button>
        </center>
      </form>
    );
  }
}

export default Sms;
