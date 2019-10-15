import React, { Component } from "react";
import Datee from "./Datee";
import walk from "../img/walk.png";
import map from "../img/map.png";
import leaf from "../img/leaf.png";
import weight from "../img/weight.png";
import classic from "../img/lol.png";
import electric from "../img/electric.png";
import DateForm from "./Electric/DateForm";
import Topbar1 from "../Container/Layout/Topbar1";
import config from "./config";
import User from "../Container/User";
// import Topbar from "../Container/Layout/Topbar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.value,
      dash: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let main = this.state.startDate;
    console.log(main.format("L"));
  }

  // Get Data from filter date
  getData = async e => {
    try {
      const from = e.target.elements.from.value;
      const to = e.target.elements.to.value;
      e.preventDefault();
      const res = await fetch(
        `http://localhost:8000/api/1/deliveries/dashboard1/?too__lte=${to}&fromm__gte=${from}`
      );
      const dash = await res.json();
      console.log(dash);
      this.setState({
        dash
      });
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.dashboard);
      const dash = await res.json();
      console.log(dash);
      this.setState({
        dash
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col-sm-3" style={{ marginTop: "12px" }}>
            <strong>
              Witaj, <User />
            </strong>
            <Datee />
          </div>
          <div className="col-sm-8">
            <DateForm loaddata={this.getData} />
          </div>
        </div>
        <Topbar1 />

        <div
          style={{
            background: "white",
            padding: "25px",
            paddingBottom: "70px",
            marginBottom: "30px",
            borderTop: "2px solid #ccefdc"
          }}
        >
          {this.state.dash.map(
            c => (
              <div className="cont">
                <h4 className="text-center font-weight-bolder">PODSUMOWANIE</h4>

                <div className="row">
                  <div className="col-sm-4" style={{ marginTop: "5px" }}>
                    <div className="box">
                      <div className="nn">
                        <br></br>
                        <img src={map} alt="map" className="imag" />
                        <h5>{c.total_milage ? `${c.total_milage}` : 0} km </h5>
                        <p id="p">Przebyte kilometry</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4" style={{ marginTop: "5px" }}>
                    <div className="box">
                      <div className=" n">
                        <br></br>
                        <img src={weight} alt="weight" className="imag" />
                        <h5>{c.total_kg ? `${c.total_kg}` : 0} kg</h5>
                        <p id="p">
                          Przetransportowana masa<br></br>
                          <span style={{ lineHeight: "30px" }}>przesylek</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4" style={{ marginTop: "5px" }}>
                    <div className="box">
                      <div className=" nn">
                        <br></br>
                        <img src={leaf} alt="leaf" className="imag" />
                        <h5>{c.total_co2 ? `${c.total_co2}` : 0} mg </h5>
                        <p id="p">Zaoszczędzone CO2</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end row --> */}

                <br></br>

                <h4
                  className="text-center font-weight-bolder"
                  style={{ marginTop: "45px" }}
                >
                  TYP DYSTRYBUCJI
                </h4>

                <div className="row">
                  <div className="col-sm-4" style={{ marginTop: "5px" }}>
                    <h4 className="text-center w">Pieszo</h4>
                    <div className="box">
                      <div className=" r">
                        <br></br>
                        <img src={walk} alt="walk" className="imag" />
                        <h5>
                          {c.total_walk_milage ? `${c.total_walk_milage}` : 0}{" "}
                          km{" "}
                        </h5>
                        <p id="p">Dystans</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4" style={{ marginTop: "5px" }}>
                    <h4 className="text-center www">Rower klasyczny</h4>
                    <div className="box">
                      <div className=" r">
                        <br></br>
                        <img
                          src={classic}
                          alt="classic"
                          className="imag"
                          style={{ height: "25px", marginTop: "15px" }}
                        />
                        <h5>
                          {c.total_classic_milage
                            ? `${c.total_classic_milage}`
                            : 0}{" "}
                          km{" "}
                        </h5>
                        <p id="p">Dystans</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4" style={{ marginTop: "5px" }}>
                    <h4 className="text-center ww">Rower elektryczny</h4>
                    <div className="box">
                      <div className=" r">
                        <br></br>
                        <img src={electric} alt="electric" className="imag" />
                        <h5>
                          {c.total_electric_milage
                            ? `${c.total_electric_milage}`
                            : 0}{" "}
                          km
                        </h5>
                        <p id="p">Dystans</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- end row --> */}
                {/* <!-- end row --> */}

                <div className="row" style={{ marginTop: "30px" }}>
                  <div className="col-sm-4" style={{ marginTop: "5px" }}>
                    <div className="box">
                      <div className=" r">
                        <br></br>
                        <img src={walk} alt="walk" className="imag" />
                        <h5>{c.total_walk_kg ? `${c.total_walk_kg}` : 0} kg</h5>
                        <p id="p">Masa przesyłek</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4" style={{ marginTop: "5px" }}>
                    <div className="box">
                      <div className=" r">
                        <br></br>
                        <img
                          src={classic}
                          alt="walk"
                          className="imag"
                          style={{ height: "25px", marginTop: "15px" }}
                        />
                        <h5>
                          {c.total_classic_kg ? `${c.total_classic_kg}` : 0} kg{" "}
                        </h5>
                        <p id="p">Masa przesyłek</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4" style={{ marginTop: "5px" }}>
                    <div className="box">
                      <div className=" r">
                        <br></br>
                        <img src={electric} alt="walk" className="imag" />
                        <h5>
                          {c.total_electric_kg ? `${c.total_electric_kg}` : 0}{" "}
                          kg{" "}
                        </h5>
                        <p id="p">Masa przesyłek</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            //  {/* End Here Col-6 */}
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
