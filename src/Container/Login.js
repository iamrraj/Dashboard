import React, { Component } from 'react'
import Swal from "sweetalert2";
import Cookies from 'universal-cookie';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      submitted: false
    };
    this.cookies = new Cookies()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    if (this.state.email && this.state.password) {
      this.fetchUserData();
    }
  }

  async fetchUserData() {
    Swal.fire({
      title: "Logging in Process",
      showCancelButton: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });

    const requestData = {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: { "Content-Type": "application/json" }
    };

    const request = await fetch(
      "https://tardis-back.herokuapp.com/auth/sign_in",
      requestData
    );
    const response = await request
    this.cookies.set('Access-Token', response.headers.get('Access-Token'))
    this.cookies.set('Client', response.headers.get('Client'))
    this.cookies.set('Uid', response.headers.get('Uid'))
    this.cookies.set('Expiry', response.headers.get('Expiry'))

    var error = true;

    if (response.success === undefined) {
      error = false
    } else {
      error = true
    }

    if (!error) {
      Swal.fire({
        title: "Loggedin",
        type: "success",
        showConfirmButton: false,
        timer: 1000
      }).then(login => {
        if (login.dismiss === Swal.DismissReason.timer) {
          window.location.href = "/";
        }
      });
    } else {
      Swal.fire({
        title: "Logging Error",
        type: "error",
        text: "Your entered Wrong Email or Password"
      });
    }
  }

    render() {
        return (
        <section id="login" class="bg-light py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-6 mx-auto">
                  <div class="card">
                    <div class="card-header bg-dark text-white">
                      <h4>
                        <i class="fas fa-sign-in-alt"></i> Login</h4>
                    </div>
                    <div class="card-body">
                      
                        <form action="#" method="POST">
                         
                        <div class="form-group">
                          <label for="username">Username</label>
                          <div class="input-group mb-2">
                            <div class="input-group-prepend">
                              <div class="input-group-text"><i className="fa fa-user"></i></div>
                            </div>
                            <input 
                                  type="text"
                                  class="form-control" 
                                  name="email" 
                                  value={this.state.email}
                                  onChange={this.handleChange}
                             />
                          </div>  
                          
                        </div>
        
                        <div class="form-group">
                          <label for="password2">Password</label>
                          <div class="input-group mb-2">
                            <div class="input-group-prepend">
                              <div class="input-group-text"><i className="fa fa-key"></i></div>
                            </div>
                            <input type="password" name="password" class="form-control"
                                  value={this.state.password}
                                  onChange={this.handleChange} />
                          </div>  
                        </div>
        
                        <input type="submit" value="Login"  onClick={this.handleSubmit} class="btn btn-secondary btn-block"  />
                        <br></br>
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default Login;
