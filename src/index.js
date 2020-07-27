import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';


ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/new" component={AddEvent} />
            <Route path="/login" component={Login} />
            <Route path="/event" component={ViewEvent}/>
        </Switch>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);
