import React, {Component} from 'react';
import FavouritesItem from './FavouriteItem'
import * as firebase from 'firebase';

class FavouritesContainer extends Component {
    constructor() {
        super();
        this.state = {
            speed:16
        }
    }

    render() {
        return (
            <div className="wrapper">
                <p>{this.state.speed}</p>
                <FavouritesItem  name={"Acton"} services={["ticket","helpers","refunds"]} methods={["tube","train"]}/>
            </div>
        );
    }


    componentDidMount() {
        const rootRef = firebase.database().ref().child("react");
        const speedRef = rootRef.child("speed");
        
        speedRef.on('value', (snapshot) =>{

            this.setState({
               speed: snapshot.val()
            })
        })
    }
    

    
    
}

export default FavouritesContainer;