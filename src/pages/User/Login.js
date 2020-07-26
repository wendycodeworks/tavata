import React, {Component} from 'react'
import axios from 'axios'
import 'bulma'

class Login extends Component {

    render(){
    return( 
            <div>
             <div className="hero is-fullheight">
                <div className="hero-body has-text-centered">
                    <div className="login">
                    <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium is-rounded" type="email" placeholder="hello@example.com" autocomplete="username" required />
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium is-rounded" type="password" placeholder="**********" autocomplete="current-password" required />
                                </div>
                            </div>
                        <br />
                            <button class="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
                            Login
                            </button>
                    </form>
                    
                    </div>
                </div>
                </div>   
            </div>
        )
    }
}

export default Login