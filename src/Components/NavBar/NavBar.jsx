import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/navBar.css'

import * as firebase from 'firebase';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signindIn:false
        }
    }
    

    render(){
         return(
             <div className="wrapper">
              <nav>
                <ul>
                    <li><Link to="/findStation" >Search For a stations </Link></li>
                    <li><Link to="/">Train Status</Link></li>
                    <li><Link to="/favourites">Favourites</Link></li>
         {(this.state.signindIn === false) ? (<li><Link to="/login">Login</Link></li>): (<li><button onClick={this.signUserOut}>Logout</button></li>)}
                </ul>
             </nav>
        </div>
    )
}
checkIfSingedIn = ()=>{
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    this.setState({
        signindIn:true
    })
  } else {
    // No user is signed in.
  }
});
}

signUserOut = ()=>{
    firebase.auth().signOut().then( ()=> {
        this.setState({
        signindIn:false
    })
  // Sign-out successful.
}, (error) => {
  // An error happened.
  this.setState({
        signindIn:true
    })
});
}
    
    componentDidMount() {


    this.checkIfSingedIn();
    
}


   
}


export default NavBar