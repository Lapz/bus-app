import React, {Component} from 'react';
import NormalLogin from './NormalLogin.jsx';
import SignUp from'./SignUp.jsx';
import ErrorModal from './ErrorModal.jsx';
import './css/login.css';


class Login extends Component {

    constructor(props) {
        super(props);
            this.state = {
                error:false
            }
    }
    
    render() {
        return (
            <div className="wrapper login-wrapper">
 {(this.state.error ===true) ? (<ErrorModal modalClosedButtonPressed = {this.modalClosedButtonPressed} errorMessage={this.state.errorMessage}/>) : ("")}

                <div className='login'>
                <NormalLogin errorModalTrigger={this.errorModalTrigger}/>
                </div>
                
                <div className="signup">
                    <SignUp errorModalTrigger={this.errorModalTrigger}/>
                </div>
                
            </div>
        );
    }

    modalClosedButtonPressed = () => {
        this.setState({
            error:false
        })
    }

    errorModalTrigger = (errorMessage)=>{
            this.setState({
                error:true,
                errorMessage:errorMessage
            })
    }
}

export default Login;