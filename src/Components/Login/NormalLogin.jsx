import React, {Component} from 'react';
import * as firebase from 'firebase';
import './css/normalLogin.css';
import {browserHistory} from 'react-router';

class NormalLogin extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
            error:false
           
        }
    }
    render() {
        return (
    <div className="container">
        <form className="form-wrapper">
         <ul  className="flex-outer">
            <li>
                <label htmlFor="txtEmail"> Email</label>
                <input id="txtEmail" type="email" placeholder="Email" ref="userEmail" required/>
            </li>

            <li>
                <label htmlFor="txtPassword">Password</label>
                <input id="txtPassword" type="password" placeholder="Password" ref="userPassword"/>   
            </li>

            <li>
                <button id="loginBtn" className="login-btn" onClick={this.login}>Login</button>
            </li>

           {/* <li>
                <button id="signUpBtn" className="signUp-btn" onClick={this.signup}>Sign Up</button>
            </li>*/}
        </ul>
       </form>
        </div>
        )}
       
    

    login = (e)=> {
        e.preventDefault()
        var email =this.refs.userEmail.value;
        var password= this.refs.userPassword.value;
        console.log(email+" "+password)

        var authPromise = firebase.auth().signInWithEmailAndPassword(email,password)

        authPromise.then(()=>{
            setTimeout(()=>{
                browserHistory.push("/");
            },3000)
           
            
        })
        .catch((e)=>{

            console.log(e.message);
            this.props.errorModalTrigger(e.message);
        })
    }

   
}

export default NormalLogin;