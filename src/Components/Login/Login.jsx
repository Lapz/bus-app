import React, {Component} from 'react';
import GoogleLogin from './GoogleLogin.jsx';
import NormalLogin from './NormalLogin.jsx';


class Login extends Component {
    render() {
        return (
            <div className="wrapper">
                <GoogleLogin />
                <NormalLogin />
            </div>
        );
    }
}

export default Login;