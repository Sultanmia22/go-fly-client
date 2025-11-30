import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
         <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='space-y-2 pb-5 text-center'>
                <h2 className='text-4xl font-bold text-secondary text-start'> Welcome to GoFly </h2>
                <p className='text-secondary'>Login with GoFly</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset">
                            
                            {/* Email Field */}
                            <label className="label">Email</label>
                            <input type="email"  className="input" placeholder="Email" />
                            

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                           
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>

                        </fieldset>
                    </form>
                    
                    <p>Don't have an Account? <Link to='/register' className='font-bold text-secondary'>register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;