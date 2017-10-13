import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';

/**
 * NavBar component
 * @param activeClass
 * @param hidden
 *
 * Bulma Navbar that maintains it stat on whethers its expanded or not
 */
class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeClass: "",
            hidden: ""
        }

    }

    render() {
        return (
            <nav className="nav">
                <span onClick={this.changeClass} className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <div className={`nav-right nav-menu ${this.state.activeClass}`}>
                    {this.props.children}
                </div>

            </nav>

        );
    }

    changeClass = () => {
        if (this.state.activeClass == "is-active") {
            this.setState({activeClass: ""})
        } else {
            this.setState({activeClass: "is-active", hidden: "hide"})
        }
    }
}

export default NavBar;