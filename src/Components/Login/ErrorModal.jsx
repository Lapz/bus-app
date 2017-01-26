import React, {Component} from 'react';
import './css/modal.css'
class ErrorModal extends Component {
    render() {
        return (
        <div className="modal-overlay" id="modal-overlay">
                <div className="modal" id="modal">
                    <button className="close-button" id="close-button" onClick={this.closeModal}>X</button>
                     <div className="modal-guts">
                        {this.props.errorMessage}
                    </div>
                </div>
        </div>
            
        );
    }

    closeModal = () =>{
        this.props.modalClosedButtonPressed()
    }
}

export default ErrorModal;