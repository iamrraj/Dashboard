import React, { Component } from 'react'

class Untopbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <a class="navbar-brand" href="/">Logo</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                </ul>
                <ul className="navbar-nav">
                    <li class="nav-item  active">
                      <a class="nav-link" href="/login"><i className="fas fa-sign-in-alt"></i> Login</a>
                    </li>
                    <li class="nav-item  active">
                      <a class="nav-link" href="# "><i className="fas fa-sign-up-alt"></i> SignUp</a>
                    </li>
                </ul>
                
              </div>
          </nav>
        )
    }
}

export default Untopbar
