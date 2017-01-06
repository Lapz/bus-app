import React, {Component} from 'react';
import '/Users/rowlandsonpratt/Desktop/Lenard/bus-app/src/css/LineRefreshBtn.css'

class LineRefreshBtn extends Component {
    
    render() {
        return(
        <div className = "btnWrapper"> 
         {
                (this.props.refreshTime) ?<p>The last refresh Date was the {this.props.refreshTime}</p> :<p></p>
            }
            
            <button onClick = {this.handleClick}>Refresh</button>
           
            
        </div>
        );
    }

    handleClick = () => {
    console.log("Button Clicked");
    this.props.callRefresh();
    }
}

export default LineRefreshBtn 