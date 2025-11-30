import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import registerImg from '../../assets/register-page.png'
const AuthLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className=' flex items-center w-7xl mx-auto'>
                <div className='flex-1'>
                    <Outlet/>
                </div>
                <div className='flex-1'>
                    <img src={registerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;