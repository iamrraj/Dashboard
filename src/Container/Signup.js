import React, { Component } from 'react'

class Signup extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Signup


async function getToken () {
    let res = await fetch("https://<your_domain>/o/token/", {
        body: new URLSearchParams({
            grant_type: 'password',
            username: '<user_name>',
            password: '<user_pass>',
            client_id: '<client_app_id>',
            client_secret: '<client_pass>'
        }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    })
    return res.json();
}
console.log(await getToken());

// React Js Login

import { AUTH_LOGIN} from 'react-admin';
var  _client_id = 'xxxxxxxxx';
var _grant_type = 'password';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const {username, password } = params;
        let _data = "grant_type="+_grant_type+"&username="+username+"&password="+password+"&client_id="+_client_id
        const request = new Request('http://localhost:8000/api/ps/o/oauth/token/', {
            method: 'POST',
            headers: new Headers({ 
            'Content-Type': 'application/x-www-form-urlencoded',}),
             body : _data,
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
            return response.json();
        })
        .then(({ access_token }) => {
            localStorage.setItem('token', access_token);
        });
}

return Promise.resolve();


.then(({ access_token }) => {localStorage.setItem('token', access_token);});