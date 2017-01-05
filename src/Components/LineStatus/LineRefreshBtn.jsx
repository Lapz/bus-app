import React, {Component} from 'react';

class LineRefreshBtn extends Component {
    
    render() {
        return(
        <div> 
            <button onClick = {this.handleClick}>Refresh</button>
            <p> {this.props.refreshTime}</p> 
        </div>
        );
    }

    handleClick = () => {
    console.log("Button Clicked");
    this.props.callRefresh();
    }
}

export default LineRefreshBtn 