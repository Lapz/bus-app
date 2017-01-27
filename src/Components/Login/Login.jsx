import React, {Component} from 'react';
import GoogleLogin from './GoogleLogin.jsx';
import NormalLogin from './NormalLogin.jsx';
import SignUp from'./SignUp.jsx';
import './css/login.css';


class Login extends Component {
    render() {
        return (
            <div className="wrapper login-wrapper">
                <div className='logins'>
                
                <GoogleLogin />
                <NormalLogin />
                </div>
                
                <div className="signup">
                    <SignUp />
                </div>
                
            </div>
        );
    }
}

export default Login;