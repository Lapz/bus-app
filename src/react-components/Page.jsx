import React from 'react';
import SideBar from './SideBar.jsx';
const Page = ({children}) => (
    <div className="columns">
        <div className="content column is-8">
            
                {children}    
        </div>
     <SideBar/>
    </div>
)

export default Page