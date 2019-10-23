import React, { Component } from "react";
import DateForm from "../Electric/DateForm";
import config from "../config";
import Mapp from "./Map";
import Topbar1 from "../../Container/Layout/Topbar1";
// import Sms from "./Sms";
import Swal from "sweetalert2";
import axios from "axios";

class Udetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      lat: 45.6982642,
      lng: 9.6772698,
      zoom: 13,
      markers: [],
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
      // config.apiUrl.sms
      data: JSON.stringify({
        text: this.state.text,
        user: this.state.user
      })
    })
      .then(response => {
        //Get Data In Console
        console.log(response.data);
        Swal.fire({
          title: "Wiadomosc wyslana",
          type: "success",
          showConfirmButton: false,
          timer: 1000
        });
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

  async componentDidMount() {
    try {
      const res = await fetch(
        `${config.apiUrl.user}${this.props.match.params.pk}/`
      );
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  // Get Data from filter date
  getData = async e => {
    try {
      const from = e.target.elements.from.value;
      const to = e.target.elements.to.value;
      e.preventDefault();
      const res = await fetch(
        `http://localhost:8000/api/1/deliveries/data/?too__lte=${to}&fromm__gte=${from}`
      );
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { movie } = this.state;
    if (movie === null) return <p>Loading ....</p>;

    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <DateForm loaddata={this.getData} />
        <Topbar1 />
        <div
          className="bg-white"
          style={{ padding: "15px", borderTop: "2px solid #CCEFDC" }}
        >
          <a href="/user" style={{ color: "black", fontSize: "16px" }}>
            <i
              class="fa fa-arrow-left fa-1x"
              aria-hidden="true"
              style={{ color: "#CCEFDC", height: "29px" }}
            ></i>
            &nbsp; {movie.user}{" "}
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i
            className="fa fa-mobile-alt fa-2x"
            style={{ color: "rgba(19, 183, 96, 1.0)", opacity: "0.6" }}
            data-toggle="modal"
            data-target="#exampleModalCenter"
          ></i>
          <br></br>
          {/* <span id="span">Contact</span> */}
          <table class="table " style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col" className="t">
                  Lp
                </th>
                <th scope="col" className="t" style={{ width: "130px" }}>
                  Data
                </th>
                <th scope="col" className="t" style={{ width: "130px" }}>
                  Typ dystrybucji
                </th>
                <th scope="col">
                  Dystans<br></br> (km)
                </th>
                <th scope="col">
                  Czas w ruchu <br></br> (g : min)
                </th>

                <th scope="col">Ilość przesylek listowych </th>
                {/* Adde New in api */}
                <th scope="col">
                  Masa przesylek listowych <br></br> (kg)
                </th>
                {/* Adde New in api */}
                <th scope="col">Ilość paczek</th>
                <th scope="col">
                  Masa paczek <br></br> (kg)
                </th>
                <th scope="col">Liczba dobrań przesylek</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {movie.results.map(item => (
              <tbody>
                <tr>
                  <td>{item.id ? `${item.id}` : 0}</td>
                  <td>{item.date ? `${item.date}` : 0}</td>
                  <td>{item.mode ? `${item.mode}` : 0}</td>

                  {/* <td>{item.milage} km</td> */}

                  <td>{item.mileage ? `${item.mileage}` : 0} </td>

                  <td>{item.time ? `${item.time}` : 0} </td>

                  <td>{item.letternumber ? `${item.letternumber}` : 0}</td>
                  <td>{item.letterweight ? `${item.letterweight}` : 0} </td>
                  <td>{item.packagenumber ? `${item.packagenumber}` : 0}</td>

                  <td>{item.packageweight ? `${item.packageweight}` : 0} </td>

                  <td>{item.delivery_count ? `${item.delivery_count}` : 0}</td>

                  <td data-toggle="modal" data-target="#eexampleModal">
                    <i
                      className="fa fa-map"
                      style={{
                        color: "rgba(19, 183, 96, 1.0)",
                        opacity: "0.6",
                        fontSize: "19px"
                      }}
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))}
            {/* <DeatilSummery /> */}

            <thead>
              <tr className="thead">
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col" className="text-dark th">
                  <strong>SUMA</strong>
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_milage
                    ? `${movie.summery.total_milage}`
                    : 0}{" "}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_movingtime
                    ? `${movie.summery.total_movingtime}`
                    : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_letter
                    ? `${movie.summery.total_letter}`
                    : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_kg1 ? `${movie.summery.total_kg1}` : 0}{" "}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_package
                    ? `${movie.summery.total_package}`
                    : 0}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_ship ? `${movie.summery.total_ship}` : 0}{" "}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_boxes
                    ? `${movie.summery.total_boxes}`
                    : 0}
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
          </table>
        </div>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  User:{" "}
                  <strong>
                    {movie.user}&nbsp; Id:{movie.pk ? `${movie.pk}` : 0}
                  </strong>
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <hr></hr>
              <div class="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-sm-12" hidden>
                      <label id="p"> UZYTKOWNIK</label>

                      <input
                        type="text"
                        ref="user"
                        className="form-control"
                        name="user"
                        value={(this.state.user = movie.pk)}
                        placeholder={movie.pk}
                        onChange={this.handleChange}
                      />
                    </div>
                    <br></br>

                    <div className="col-sm-12" style={{ marginTop: "-20px" }}>
                      <br></br>
                      <label id="p"> TYPE MESSAGE</label>
                      <textarea
                        className="form-control"
                        row="10"
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
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal End --> */}
        <Mapp />
        {/* <!-- Modal End --> */}
      </div>
    );
  }
}

export default Udetails;
