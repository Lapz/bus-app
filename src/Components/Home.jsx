import React, {Component} from 'react';
import axios from 'axios';
import Title from '../react-components/Title';

import Page from "../react-components/Page";
import Loading from "../react-components/Loading";
import LineItem from "./LineItem.jsx";


class Home extends Component {

    constructor() {
        super()
        this.state = {
        trainLines: [],
        refreshTime: "",
        error: false
        }
    }

    componentDidMount() {
        axios.get('https://api.tfl.gov.uk/Line/Mode/tube/Status ')
    .then((response) => {
      console.log(response)
      this.setState({
          trainLines:response.data
      })
    })
    .catch((error) => {
      console.log(error)
      this.setState({
        error:true
      })
    });
  }

    render() {
        return (
            (this.state.trainLines.length > 0) ?(
            <Page>
                    <Title text="Line Status" align="has-text-centered"/>
                    <section id="blocks">
                        {(this.state.trainLines.map((item, index) => {
                            return ((item.lineStatuses)? ( <LineItem lineName={item.name} distruptionReason={item.lineStatuses[0].reason} key={index} status={item.lineStatuses[0].statusSeverityDescription}/> ) : (<LineItem lineName={item.name} key={index} status={item.lineStatuses[0].statusSeverityDescription}/>))
                        }))
                        }
                    </section>
                </Page>) :(<Loading/>)

        
        )
    }
}


export default Home;