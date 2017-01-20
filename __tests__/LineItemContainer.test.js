import React from 'react';
var nock = require('nock')
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
});

    it('should have the state of error set to false', ()=>{
        const wrapper = mount(<LineItemContainer />);
        expect(wrapper.state().error).toBe(false);
    });

    it('should mount and then populate the trainsArray', ()=>{
            
            const server = nock('https://api.tfl.gov.uk')
                            .get('/Line/Mode/tube/Status')
                            .replyWithFile(200, __dirname + '/replies/status.json')

            const wrapper = mount(<LineItemContainer />); 

           
           
                expect(wrapper.find('li').length).toBe(11);
                expect(wrapper.state().trainLines.length).toBe(1);
                nock.cleanAll();
                done();
        
    
    });

    
});