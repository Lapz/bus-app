import React, {Component} from 'react';
import StationItem from './StationItem.jsx';
import './css/StationItemContainer.css';

class StationItemContainer  extends Component {

   constructor(){
    super()
    this.state = {
      loading:true,
    }
  }

	render() {
	 
    if(this.props.stationArray){
      var stationsForList = this.props.stationArray;

      // this.setState({
      //   loading:false
      // });

    stationsForList = stationsForList.map((item,index)=>{
        return(
          <StationItem stationName={item.name || item.commonName} key={item.id} stationId={item.id} stationServices={item.modes} />
        )
      })
    };


    

    

    return (
     <div> 
{ (this.state.loading == false) ?(<div className="station-items">
        <ul>
            {stationsForList}
        </ul>
			</div>
		) : (
      <div className="loader"></div>
    ) } 

    </div>
    );
     
	}
  componentDidMount() {
    this.setState( {
      loading:false,
    })
  }
}

export default StationItemContainer
