import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/navBar.css'
class NavBar extends Component {

    render(){
         return(
             <div className="wrapper">
              <nav>
                <ul>
                    <li><Link to="/findStation">Search For a stations </Link></li>
                    <li><Link to="/">Train Status</Link></li>
                    <li><Link to="/favourites">Favourites</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
             </nav>
        </div>
    )
}
   
}


export default NavBar