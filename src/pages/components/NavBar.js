import React, {Component} from 'react';
import 'bulma';
import logo from "./assets/logo.png"

class NavBar extends Component {
  
    render(){

    return(
    <div>
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <div class="navbar-item" href="#">
                    <a class="navbar-item" href="#">
                        <img src={logo} width="55" height="150"/>
                    </a>
                 </div>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                    <a class="navbar-item">
                        Events
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>

                        <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <br class="navbar-divider"/>
                        <a class="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    </div>

                    <div class="navbar-item">
                        <div class="buttons">
                        <a class="button is-info">
                            <strong>Sign up</strong>
                        </a>
                        <div class="button is-light">
                            Log in
                        </div>
                        </div>
                    </div>
            
                </div>
            </nav>
        </div>
    </div>
    )
}
}

export default NavBar;
