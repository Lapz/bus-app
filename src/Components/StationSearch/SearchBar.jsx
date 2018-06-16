import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field inline col s8">
              <input
                type="text"
                placeholder="Station"
                ref="stationQuery"
              />
            </div>
            <div className="col s2 ">
              <button className="btn" type="submit"> Find Station</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmitText(this.refs.stationQuery.value);
  };
}

export default SearchBar;
