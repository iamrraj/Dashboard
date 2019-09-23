import React, { Component } from 'react'
const URL = "https://1nimmg3p7f.execute-api.us-east-1.amazonaws.com/prod/aboveline_jr_test_service";
var $ = require("jquery");

class signin1 extends Component {
    constructor() {
        super()
        this.state = {
          username: "",
          password: "",
        }
    
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
      }

      request() {
        axios.post(URL, {
          "username": this.state.username,
          "password": this.state.password
        }, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
              // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
              // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, X-File-Name, X-File-Size, X-File-Type"
            }
          })
          .then(function (response) {
            console.log(response.data);
            alert(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
        this.refs.user.value = "",
          this.refs.pass.value = ""
      }

    handleChangeUsername(text) {
    this.setState({ username: text.target.value });
    }
    handleChangePassword(text) {
    this.setState({ password: text.target.value });
    }
    render() {
        return (
            <div className="container">
        <div className="leftDiv">
          <div className="topColumnStyle">
          </div>
          <div className="bottomColumnStyle">
          </div>
        </div>
        <div className="centerDiv">
          <div className="inputContainer">
            <div className="inputStyle">
              <table className="tableStyle">
                <tr>
                  <td>
                    <input ref="user" type="text" placeholder="Username" onChange={this.handleChangeUsername} />
                  </td>
                </tr>
              </table>
            </div>
            <div className="inputStyle">
              <table className="tableStyle">
                <tr>
                  <td>
                    <input ref="pass" type="password" placeholder="Password" onChange={this.handleChangePassword} />
                  </td>
                </tr>
              </table>
            </div>
            <div className="inputStyle">
              <button className="buttonStyle" onClick={this.request.bind(this)} >Login</button>
            </div>
          </div>
        </div>
        <div className="rightDiv">
          <div className="topColumnStyle">
          </div>
          <div className="bottomColumnStyle">
          </div>

        </div>

      </div>
        )
    }
}

export default signin1;
