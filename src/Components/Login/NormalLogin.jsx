import React, {Component} from 'react';
import * as firebase from 'firebase';
import './css/normalLogin.css';

class NormalLogin extends Component {
    render() {
        return (
            
            <div className= "wrapper">

                <div className="input-wrapper">
                <label>Email</label>
                    <input id="txtEmail" type="email" placeholder="Email" ref="userEmail"/>
                <label>Password</label>
                    <input id="txtPassword" type="password" placeholder="Password" ref="userPassword"/>
                </div>


        <div className="signup-btns">
                <button id="loginBtn" className="login-btn" onClick={this.login}>
                     Log input
                </button>

                 <button id="signUpBtn" className="signUp-btn" onClick={this.signup}>
                    Sign Up
                 </button>
            </div>
        </div>
    
        );
    }

    login = (e)=> {
        e.preventDefault()
        var email =this.refs.userEmail.value;
        var password= this.refs.userPassword.value;
        console.log(email+" "+password)

        var authPromise = firebase.auth().signInWithEmailAndPassword(email,password)

        authPromise.catch((e)=>{
            console.log(e.message);
        })
    }

    signup = (e) =>{
        var email =this.refs.userEmail.value;
        var password= this.refs.userPassword.value;
        console.log(email+" "+password)

        var authPromise = firebase.auth().createUserWithEmailAndPassword(email,password)

        authPromise.catch((e)=>{
            console.log(e.message);
        })

    }

}

export default NormalLogin;