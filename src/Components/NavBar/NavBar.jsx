import React, { Component } from "react";
import { Link } from "react-router";
import "./css/navBar.css";
class NavBar extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav>
          <ul>
            <li>
              <Link to="/">Rail Status</Link>
            </li>
            <li>
              <Link to="/find">Search For a stations </Link>
            </li>

            {
              // <li><Link to="/favourites">Favourites</Link></li>
            }
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
