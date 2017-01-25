import React, {Component} from 'react';
import * as firebase from 'firebase';

class StationFavouriteButton extends Component {

    constructor(){
        super()

        this.state = {
            alreadyFavourited:false
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.addFavourite}>Click here</button>
            </div>
        );
    }


    // Custom Functions 

    addFavourite = ()=> {

   var database = firebase.database()
   var rootRef = database.ref().child("users/lenard")

   var usersFavouritesRefs = rootRef.child("favouriteStations");

 

  usersFavouritesRefs.on("value",(snapshot)=>{
       console.log(snapshot.val());

        console.log(snapshot.val())


       var sd = database.ref().child("favouriteStations/" + snapshot.key)

       console.log(sd);

       sd.once('value', (data)=>{
           console.log(data.val());
       })


   })

 usersFavouritesRefs.push({
    
          stationName:this.props.stationName,
          id:this.props.stationId 
    })
}


}

export default StationFavouriteButton;