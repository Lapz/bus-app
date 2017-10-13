import React from 'react';
import SideBar from './SideBar.jsx';
const Page = ({children}) => (
    <div className="wrapper">
        <div className="content column is-8">
            
                {children}    
        </div>
    </div>
)

export default Page