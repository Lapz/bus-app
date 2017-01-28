function checkIfAlreadyFavoureted(stationID,fireBaseRef){
    fireBaseRef.on('value',(snapShot)=>{

    console.log(snapShot.val())
        snapShot.forEach((data)=>{
            console.log(data.val().id);

            console.log(stationID)

            if(data.val().id == stationID){
                return true
            }else{
                console.log("false")
                return false

            }

        })
    })
}


export{checkIfAlreadyFavoureted}