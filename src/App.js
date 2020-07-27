import React, {Component} from 'react';
import HomePage from "./pages/HomePage";
import NavBar from "./pages/components/NavBar"
import AddEvent from "./pages/Event/AddEvent";
import ViewEvent from "./pages/Event/ViewEvent";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom"
import Login from "./pages/User/Login.js"

class App extends Component {
  render(){
    return(
      <div>
        <NavBar />
        <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/new" component={AddEvent} />
            <Route path="/login" component={Login} />
            <Route path="/event" component={ViewEvent}/>
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;