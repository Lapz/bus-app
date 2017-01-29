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
            {(this.state.alreadyFavourited === false)? (<button onClick={this.addFavourite}>Click here</button>): (<button onClick={this.removeFavourite}>Remove here</button>)}
               
            </div>
        );
    }


    // Custom Functions 


    removeFavourite = () => {
             var database = firebase.database()
             var user = firebase.auth().currentUser

             var userUID = user.uid
              var favsRef = database.ref().child("users/"+userUID+"/favouriteStations")

          

              favsRef.on('value',(snapshot)=>{

                   
                  snapshot.forEach((data)=>{

                      console.log(data)
                      var serverStationID = data.val().id;

                      if(serverStationID === this.props.stationId){

                  
                          favsRef.child(data.key).remove()
                      }
                  })
              })

        this.setState({
            alreadyFavourited:false
            })
    }

addFavourite = ()=> {

   var database = firebase.database()
   var user = firebase.auth().currentUser
   

   if(user != null){
       var userUid = user.uid;
    var rootRef = database.ref().child("users/" + userUid)


   
 var usersFavouritesRefs = rootRef.child("favouriteStations");

 var alreadyFavourited = checkIfAlreadyFavoureted(this.props.stationId,usersFavouritesRefs)
 
if( alreadyFavourited == true){
  
  console.log("ADFASD")
    
        
 }else {
     usersFavouritesRefs.push({
          stationName:this.props.stationName,
          id:this.props.stationId 
    })

    this.setState({
        alreadyFavourited:true
    })


 }

 
  
   }else{
       browserHistory.push("/login")
   }
  
}


}

export default StationFavouriteButton;