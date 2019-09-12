import React, { Component } from "react";

import Swal from "sweetalert2";

import Cookies from "universal-cookie";

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.Logout = this.Logout.bind(this);
        this.cookies = new Cookies();
    }

    async fetchData() {
        Swal.fire({
            title: "Wylogowywanie",
            showCancelButton: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        var token = this.cookies.get('Access-Token')
        var client = this.cookies.get('Client')
        var uid = this.cookies.get('Uid')
        var expiry = this.cookies.get('Expiry')

        const requestData = {
            method: "DELETE",
            headers: { 'Access-Token': token, 'Client': client, 'Uid': uid, 'Expiry': expiry }
        };
        const request = await fetch(
            "http://tardis-back.herokuapp.com/auth/sign_out",
            requestData
        );
        const response = await request.json();
        console.log(response.success);

        if (response.success === true) {
            Swal.fire({
                title: "Logged Out",
                type: "success"
            }).then(logout => {
                if (logout.value) {
                    this.cookies.remove("Access-Token");
                    this.cookies.remove("Client");
                    this.cookies.remove("Uid");
                    this.cookies.remove("Expiry");
                    window.location.href = "/login";
                }
            });
        } else {
            Swal.fire({
                title: "Logout Error",
                type: "error",
                text: "Please try Again"
            });
        }
    }

    Logout() {
        Swal.fire({
            title: "Do You Want to Logout?",
            type: "question",
            showCancelButton: true,
            cancelButtonText: "NO",
            confirmButtonText: "Yes"
        }).then(result => {
            if (result.value) {
                this.fetchData();
            }
        });
    }

    render() {
        return (
            // <NavDropdown.Item className="ml-auto" onClick={this.Logout}>
            //     {dictionaryContainer.getText('header', 'logout')}
            // </NavDropdown.Item>
            <li>
                <a class="nav-link font-weight-bolder" href="# " data-toggle="modal" onClick={this.Logout} style={{color: "#212226"}}> Logout </a> 
            </li>
        );
    }
}
