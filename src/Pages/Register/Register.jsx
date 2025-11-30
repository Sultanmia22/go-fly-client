import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='space-y-2 pb-5 text-center'>
                <h2 className='text-4xl font-bold text-secondary text-start'> Create an Account </h2>
                <p className='text-secondary'>Register with GoFly</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset">

                            {/* Name field */}
                            <label className="label">Name</label>
                            <input type="text"  className="input" placeholder="Name" />
                           


                            {/* image field */}
                            <label className="label">Name</label>
                            <input type='file'  className="file-input" placeholder="Your Photo" />
                            

                            {/* Email Field */}
                            <label className="label">Email</label>
                            <input type="email"  className="input" placeholder="Email" />
                            

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                           
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>

                        </fieldset>
                    </form>
                    
                    <p>Already have an Account? <Link to='/login' className='font-bold text-secondary'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;