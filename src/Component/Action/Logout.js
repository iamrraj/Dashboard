import React, { Component } from "react";
import Signin from "./Signin";

function Logout(props) {
  const logged_out_nav = <Signin />;
  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>logout</li>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Logout;
