import React from 'react';
import {mount,shallow} from 'enzyme';

import LineItem from '../src/Components/LineStatus/LineItem.jsx';

describe('<LineItem />',()=>{
    
    beforeEach(()=>{
        const jsdom = require('jsdom').jsdom;

    global.document = jsdom('');
    global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
    })
    
    it('should render without out crashing', ()=>{
        const wrapper = shallow(<LineItem />);
        expect(wrapper.find('li').length).toBe(1)
    });

    it('should render 2 divs', ()=>{
        const wrapper = shallow(<LineItem />);
        expect(wrapper.find('div').length).toBe(2)
    })
    
    it('should render with without the distruptionReason prop',() =>{
        const wrapper = shallow(<LineItem lineName = "Central" status = "Good Service" />);
        expect(wrapper.find('p').length).toBe(2);
    });
    
    it('should render with the distruptionReason prop', ()=>{
        const wrapper = shallow(<LineItem lineName = "Central" status = "Bad" distruptionReason= "Strikes by AS lev union" />);
        expect(wrapper.find('p').length).toBe(3)
    });
    
    it('should have the lineName text should equal what was passed in', () =>{
        const wrapper = shallow(<LineItem lineName="Central" />)
        expect(wrapper.text()).toContain("Central");
    });
    
     it('should have the status text equal to what was passed in', () =>{
        const wrapper = shallow(<LineItem status="Good" />)
        expect(wrapper.text()).toContain("Good");
    });
    
     it('should have the distruptionReason text equal to  what was passed in', () =>{
        const wrapper = mount(<LineItem distruptionReason={"Strikes"} />)
        expect(wrapper.prop('distruptionReason')).toBe("Strikes")
    });

    it('should have the props for lineName and status defined', ()=>{
        const wrapper = mount(<LineItem  lineName={"Central"} status={"Good"} />);
        expect(wrapper.props().lineName).toBeDefined();
        expect(wrapper.props().status).toBeDefined();
    })

    it('should have the props for lineName, status  and disruption defined', ()=>{
        const wrapper = mount(<LineItem distruptionReason={"Bobs ur uncle"} lineName={"Central"} status={"Good"} />);
        expect(wrapper.props().lineName).toBeDefined();
        expect(wrapper.props().status).toBeDefined();
        expect(wrapper.props().distruptionReason).toBeDefined();
    })

})