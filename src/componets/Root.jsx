import React from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom'
import Home from './Home';
import Footer from './Footer';
import WelcomeMessage from './WelcomeMessage';


const Root = () => {
    return (
        <div>
           
           <WelcomeMessage></WelcomeMessage>
            <Navbar></Navbar>
            <Home></Home>
            
            <Outlet></Outlet>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Root;