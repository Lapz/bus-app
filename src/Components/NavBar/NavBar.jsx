import React, {Component} from 'react';
import {Link} from 'react-router';


class NavBar extends Component {

    render(){
         return(
        <nav>
            <div className="nav-wrapper">
                <ul>
                    <li><Link to="/findStation">Search For a stations </Link></li>
                    <li><Link to="/">Train Status</Link></li>
                </ul>
            </div>
        </nav>
    )
}
   
}


export default NavBar