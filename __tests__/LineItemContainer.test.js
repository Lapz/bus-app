import React from 'react';

import {shallow, mount} from 'enzyme';

import LineItemContainer from '../src/Components/LineStatus/LineItemContainer.jsx';

describe('<LineItemContainer />',()=>{

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
    it('should render 12 items after ajax request',()=>{
        
    })

    it('should have the state of error', ()=>{
        const wrapper = mount(<LineItemContainer />);

        expect(wrapper.state().error).toBe(true);
    })
})