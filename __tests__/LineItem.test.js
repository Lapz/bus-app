import React from 'react';
import {shallow} from 'enzyme';

import LineItem from '../src/Components/LineStatus/LineItem.jsx';

describe('<LineItem />',()=>{
    
    
    it('should render without out crashing', ()=>{
        const wrapper = shallow(<LineItem />);
        expect(wrapper.find('li').length).toBe(1)
    });
    
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
    })
    
     it('should have the status text equal to what was passed in', () =>{
        const wrapper = shallow(<LineItem status="Good" />)
        expect(wrapper.text()).toContain("Good");
    })
    
     it('should have the distruptionReason text equal to  what was passed in', () =>{
        const wrapper = shallow(<LineItem distruptionReason="Strikes" />)
        expect(wrapper.text()).toContain("Strikes");
    })
    
})