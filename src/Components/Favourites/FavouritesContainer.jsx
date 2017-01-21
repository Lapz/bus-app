import React, {Component} from 'react';
import FavouritesItem from './FavouriteItem'
import * as firebase from 'firebase';
class FavouritesContainer extends Component {
    constructor() {
        super();
        this.state = {
            number:15
        }
    }
    
    render() {
        return (
            <div className="wrapper">
                {this.state.number}
                <FavouritesItem  name={"Acton"} services={["ticket","helpers","refunds"]} methods={["tube","train"]}/>
            </div>
        );
    }

    componentDidMount() {

        console.log(process.env.REACT_APP_apiKey)
        const rootRef = firebase.database().ref().child("favourites");
        const trainRef = rootRef.child("acton");
        
        trainRef.on('value', snap =>{
            this.setState({
                number: snap.val()
            })
        })
    }
    
}

export default FavouritesContainer;