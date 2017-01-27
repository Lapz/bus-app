import React, {Component} from 'react';
import * as firebase from 'firebase';
import {browserHistory} from 'react-router'
import {checkIfAlreadyFavoureted} from './Helpers/fireBase'
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
   var user = firebase.auth().currentUser
   

   if(user != null){
       var userUid = user.uid;
    var rootRef = database.ref().child("users/" + userUid)


   
 var usersFavouritesRefs = rootRef.child("favouriteStations");

 var alreadyFavourited =checkIfAlreadyFavoureted(this.props.stationId,usersFavouritesRefs)
 if( alreadyFavourited == false){
     usersFavouritesRefs.push({
          stationName:this.props.stationName,
          id:this.props.stationId 
    })
        
 }else {
    console.log("Dont do it")
 }

 
  
   }else{
       browserHistory.push("/login")
   }
  
}


}

export default StationFavouriteButton;