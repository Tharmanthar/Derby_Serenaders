import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CSS/App.css';

import Home       from './Pages/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div>

        <header>
          <div className="Container">

              <div id="Branding">
                <h1> Derby Serenaders </h1>
              </div>

              <nav id="Nav">
                <ul>
                  <li>      <Link to="/">                  Home         </Link>       </li>
                  <li>      <Link to="/ContactUs">         Contact Us   </Link>       </li>
                </ul>
              </nav>

          </div>
        </header>

        <div>
          <Route exact path="/"         component={Home} />
          <Route path="/ContactUs"      component={Home} />
        </div>

        <footer>
          <p>
            &copy; 2018 The Derby Serenaders - Website design by Aaron Beers
          </p>
        </footer>

      </div>
      </Router>
    );
  }
}

export default App;
