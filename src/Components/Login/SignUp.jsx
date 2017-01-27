import React, {Component} from 'react';
import * as firebase from 'firebase';
import ErrorModal from './ErrorModal.jsx';

class SignUp extends Component {
    
    
    constructor(props) {
        super(props);
        
        this.state = {
            error:false,
            sucesse:false
        }
    }
    render() {
        return (
            <form>
        {(this.state.error ===true) ? (<ErrorModal modalClosedButtonPressed = {this.modalClosedButtonPressed} errorMessage={this.state.errorMessage}/>) : ("")}
         
                <div className="input-wrapper">
                        <label htmlFor="firstName">
                            FirstName
                            <input id="firstName" type="txt" placeholder="e.g. John" ref="userFirstName" required/>
                        </label>
                        
                        <label htmlFor="lastName">
                        Surname
                        <input id="lastName" type="txt" placeholder="e.g. AppleSeed" ref="userLastName" required/>
                            
                        </label>
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

                 <button id="signUpBtn" className="signUp-btn" onClick={this.signup}>
                    Sign Up
                 </button>
            </div>
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
             })
             
         }
        })
        .catch((e)=>{
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

export default SignUp;