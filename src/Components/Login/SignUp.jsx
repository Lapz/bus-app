import React, {Component} from 'react';
import * as firebase from 'firebase';
import {browserHistory} from 'react-router';
import './css/normalLogin.css';


class SignUp extends Component {
    
    
    constructor(props) {
        super(props);
        
        this.state = {
            error:false
        
        }
    }
    render() {
        return (
            <form>
         
         <ul className="flex-outer">
                <li>
                 <label htmlFor="firstName">FirstName</label>
                 <input id="firstName" type="txt" placeholder="John" ref="userFirstName" required/>
                </li>

                <li>
                <label htmlFor="lastName">Surname</label>
                 <input id="lastName" type="txt" placeholder="AppleSeed" ref="userLastName" required/>
                </li>

                <li>
                    <label htmlFor="txtEmail"> Email</label>
                    <input id="txtEmail" type="email" placeholder="Email" ref="userEmail" required/>
                </li>

                <li>
                    <label htmlFor="txtPassword">Password </label>
                    <input id="txtPassword" type="password" placeholder="Password" ref="userPassword"/>
                </li>
                    <li>
                 <button id="signUpBtn" className="signUp-btn" onClick={this.signup}>Sign Up</button>
                 </li>
            
            </ul>
       </form>
        );
    }
    
    
     signup = (e) =>{
         e.preventDefault()
        var email =this.refs.userEmail.value;
        var password= this.refs.userPassword.value;
        var firstName = this.refs.userFirstName.value;
        var lastName = this.refs.userLastName.value;
        
        console.log(firstName + lastName)

        var authPromise = firebase.auth().createUserWithEmailAndPassword(email,password)
        var database = firebase.database()
        var usersRef = database.ref().child('users');

        authPromise.then(()=>{
         var user = firebase.auth().currentUser;
         
         var uid = user.uid
         
         if(user != null){
             usersRef.child(uid).set({
                 "firstName":firstName,
                 "lastName":lastName,
                 "favouriteStations":{
                     "fake":"Adsfas"
                 }
             })
             
         }

         setTimeout(()=>{
                browserHistory.push("/");
            },3000)

        })
        .catch((e)=>{
            console.log(e.message);
            this.props.errorModalTrigger(e.message)
            
        })

    }

   

}

export default SignUp;