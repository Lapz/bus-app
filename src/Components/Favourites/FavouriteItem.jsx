import React, {Component} from 'react';

class FavouriteItem extends Component {
    render() {
        var serviceItem = this.props.services.map((service,index)=>{
            return(
                <li>
                    {service}
                </li>
            )
        })

        var transportItems = this.props.methods.map((service,index)=>{
            return(
                <li>
                    {service}
                </li>
            )
        })
        return (
            <div>
                <p> Station Name: {this.props.name}</p>
                <p> Services offered:
                <ul>
                {serviceItem}
                </ul>
                </p>
                <p> Methods of transport offered
                <ul>
                {transportItems}
                </ul>
                </p>
            </div>
        );
    }
}

export default FavouriteItem;