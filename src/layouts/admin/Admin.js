import React, { useEffect } from 'react';
import Header from './Header/Header'
import Sadebar from "./Sidebar/Sadebar";
import Content from '../../page/Content';



const Admin = () => {



    return (
        <div>
            <Content/>
            <Header />
            <Sadebar />
           
        </div>
    );
};

export default Admin;

// ${showSidebar? "with_sidebar":null}