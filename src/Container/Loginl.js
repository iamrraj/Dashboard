import React, { Component } from 'react'

class Loginl extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            displayed_form: '',
            logged_in: localStorage.getItem('token') ? true : false,
        }
        this.handle_login = this.handle_login.bind(this);
    }
    handle_login =(e,data) =>{
        e.preventDefault();
        fetch('http://localhost:8001/token-auth/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('token', json.token);
            this.setState({
            logged_in: true,
            displayed_form: '/',
            username: json.user.username
            });
        });
    };

    handle_change = e =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate =>{
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };
    render() {
        return (
        <section id="login" class="bg-light py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-5 mx-auto">
                  <div class="card">
                    <div class="card-header text-white" style={{background:"rgba(19, 183, 96, 1.0)"}}>
                      <h4 className="text-dark font-weight-bolder">
                        <i class="fas fa-sign-in-alt"></i> Dashboard Login </h4>
                    </div>
                    <div class="card-body">
                      
                        <form onSubmit={this.handle_login}>
                         
                        <div class="form-group">
                          <label for="username">Username</label>
                          <div class="input-group mb-2">
                            <div class="input-group-prepend">
                              <div class="input-group-text"><i className="fa fa-user"></i></div>
                            </div>
                            <input 
                                  type="text"
                                  class="form-control" 
                                  name="username" 
                                  value={this.state.username}
                                  onChange={this.handle_change}
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
                                  onChange={this.handle_change} />
                          </div>  
                        </div>
        
                        <input type="submit" value="Login"  class="btn btn-secondary btn-block " style={{background:"rgba(19, 183, 96, 1.0)"}}  />
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

export default Loginl;
