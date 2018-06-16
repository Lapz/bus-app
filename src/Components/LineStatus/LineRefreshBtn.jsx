import React, { Component } from "react";
import "./css/LineRefreshBtn.css";

class LineRefreshBtn extends Component {
  render() {
    return (
      <div>
        {this.props.refreshTime ? (
          <p>The last refresh Date was the {this.props.refreshTime}</p>
        ) : (
          <p />
        )}

        <button onClick={this.handleClick}>Refresh</button>
      </div>
    );
  }

  handleClick = () => {
    this.props.callRefresh();
  };
}

export default LineRefreshBtn;
