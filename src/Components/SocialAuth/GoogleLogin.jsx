import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleLogin = () => {
    return (
        <div>
            <button className='btn bg-sky-900 w-full text-base-100'> <span><FcGoogle size={24}/></span> Continue with Google </button>
        </div>
    );
};

export default GoogleLogin;