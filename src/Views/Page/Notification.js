import React, { Component } from "react";

class Notification extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          marginTop: "40px",
          background: "white",
          padding: "10px",
          borderRadius: "3px",
          paddingBottom: "40px"
        }}
      >
        <h5
          className="text-center font-weight-bold"
          style={{ marginTop: "45px" }}
        >
          POWIADOMIENIA
        </h5>

        <div
          class=" col-sm-7 text-left"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ marginTop: "20px" }}
        >
          <li
            class="toast-header "
            style={{
              background: "#F5FAF3",
              padding: "10px",
              fontSize: "15px"
            }}
          >
            <i className="fa fa-bell"></i> &nbsp;&nbsp;
            <strong class="mr-auto font-weight-bold">Rahul Raj</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </li>
          <div class="toast-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry
          </div>
          <li
            class="toast-header "
            style={{
              background: "#F5FAF3",
              padding: "10px",
              fontSize: "15px",
              marginTop: "20px"
            }}
          >
            <i className="fa fa-bell"></i> &nbsp;&nbsp;
            <strong class="mr-auto font-weight-bold">Rahul Raj</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </li>
          <div class="toast-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry
          </div>

          <li
            class="toast-header "
            style={{
              background: "#F5FAF3",
              padding: "10px",
              fontSize: "15px",
              marginTop: "20px"
            }}
          >
            <i className="fa fa-bell"></i> &nbsp;&nbsp;
            <strong class="mr-auto font-weight-bold">Rahul Raj</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </li>
          <div class="toast-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry
          </div>
        </div>
      </div>
    );
  }
}

export default Notification;
