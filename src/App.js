import React, {Component} from 'react';
import HomePage from "./pages/HomePage.js";
import AddEvent from "./pages/Event/AddEvent.js"
import {BrowserRouter, Route} from "react-router-dom"
import Login from "./pages/User/Login.js"

class App extends Component {
  render(){
    return(
      <div>
        <BrowserRouter>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/new" component={AddEvent} />
            <Route exact path="/login" component={Login} />
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;