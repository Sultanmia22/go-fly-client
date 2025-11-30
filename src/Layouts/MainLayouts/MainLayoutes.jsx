import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const MainLayoutes = () => {
    return (
        <div>
            <Header/>
           <div className='max-w-7xl mx-auto'>
             <Outlet/>
           </div>
            <Footer/>
        </div>
    );
};

export default MainLayoutes;