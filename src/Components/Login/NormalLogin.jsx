import React, {Component} from 'react';
import * as firebase from 'firebase';
import './css/normalLogin.css';
import ErrorModal from './ErrorModal.jsx';


class NormalLogin extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
            error:false,
            sucesse:false
        }
    }
     //{(this.state.error ===true) ? (<ErrorModal modalClosedButtonPressed = {this.modalClosedButtonPressed} errorMessage={this.state.errorMessage}/>) : ("")}
    render() {
        return (
            
        <form>
        {(this.state.error ===true) ? (<ErrorModal modalClosedButtonPressed = {this.modalClosedButtonPressed} errorMessage={this.state.errorMessage}/>) : ("")}
         
                <div className="input-wrapper">
                            <label htmlFor="txtEmail"> 
                                Email
                              <input id="txtEmail" type="email" placeholder="Email" ref="userEmail" required/>
                            </label>
                          

                            <label htmlFor="txtPassword">
                                Password
                                <input id="txtPassword" type="password" placeholder="Password" ref="userPassword"/>
                            </label>
                            
                        
                </div>
        <div className="signup-btns">
                <button id="loginBtn" className="login-btn" onClick={this.login}>
                     Log input
                </button>

                 <button id="signUpBtn" className="signUp-btn" onClick={this.signup}>
                    Sign Up
                 </button>
            </div>
       </form>
        
        )}
       
    

    login = (e)=> {
        e.preventDefault()
        var email =this.refs.userEmail.value;
        var password= this.refs.userPassword.value;
        console.log(email+" "+password)

        var authPromise = firebase.auth().signInWithEmailAndPassword(email,password)

        authPromise.then(()=>{
            
            
            
        })
        .catch((e)=>{

            console.log(e.message);
            this.setState({
                 error:true,
                 errorMessage: e.message
             })
        })
    }

    signup = (e) =>{
        var email =this.refs.userEmail.value;
        var password= this.refs.userPassword.value;
        console.log(email+" "+password)

        var authPromise = firebase.auth().createUserWithEmailAndPassword(email,password)

        authPromise.catch((e)=>{
            console.log(e.message);
             this.setState({
                 error:true,
                 errorMessage: e.message
             })
        })

    }

    modalClosedButtonPressed = () => {
        this.setState({
            error:false
        })
    }

}

export default NormalLogin;