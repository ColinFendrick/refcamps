import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import SearchEvent from '../src/pages/EventViews/SearchEvent';
import SubmitEvent from '../src/pages/EventViews/SubmitEvent';
import EventSignup from '../src/pages/EventViews/EventSignup';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/eventSignup">
          <EventSignup />
        </Route>
        <Route path="/submitEvent">
          <SubmitEvent />
        </Route>
        <Route path="/searchEvent">
          <SearchEvent />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
