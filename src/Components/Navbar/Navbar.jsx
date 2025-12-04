import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import useAuth from '../../Hook/useAuth';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, loading, userSignOut } = useAuth()

    const navigate = useNavigate()

    // NAVLINK HERE 
    const links = <>
        <li><NavLink to='/'> Home </NavLink> </li>
        <li><NavLink to='/coverage'>Coverage Area</NavLink></li>
        <li><NavLink to='/send-parcel'>Send a Parcel</NavLink></li>
    </>

    // Hanlde sign out function 
    const handleSignOut = () => {
        userSignOut()
            .then(res => {
                toast.success('Sign Out Successfully')
                navigate('/')
            })
            .catch(er => {

            })
    }

    return (
        <div className="navbar bg-base-100 shadow-sm w-11/12 py-4 my-5 mx-auto border-b-2 border-secondary ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className=" font-bold text-secondary text-xl">GoF<span className='text-primary'>l</span>y</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex gap-4 items-center font-semibold menu-horizontal px-1 text-secondary">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className=" m-1">
                               <figure className='w-12 h-12 border-2 border-secondary rounded-full'>
                                 <img src={user?.photoURL} alt="" className='rounded-full p-1' />
                               </figure>
                            </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-30  p-2  shadow-sm">
                                <button onClick={handleSignOut} className='btn btn-secondary'>
                                    Sign Out
                                </button>
                            </ul>
                        </div>

                        :

                        <div className='flex items-center gap-2'>
                            <Link to='/login' className='btn btn-sm btn-primary text-secondary'>Sign In</Link>
                            <Link to='/register' className='btn btn-sm btn-secondary'>Sign Up</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;