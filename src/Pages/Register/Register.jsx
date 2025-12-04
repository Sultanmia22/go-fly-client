import React from 'react';
import { Link, useNavigate } from 'react-router';
import GoogleLogin from '../../Components/SocialAuth/GoogleLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import { toast } from 'react-toastify';
import axios from 'axios';
import { imageUpload } from '../../Utilits/imageUpload';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const Register = () => {

    const { createUser, updateUserProfile } = useAuth()

    const axiosSecure = useAxiosSecure()

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleRegister = async (data) => {

        try {
            const email = data.email;
            const password = data.password;
            const name = data.name;
            const getImage = data.image[0]

            const result = await createUser(email, password)
            const user = result.user

            //UPLOAD IMAGE BY IMAGE BB 
            const imageURL = await imageUpload(getImage)


            // UPDATE PROFILE 
            const updateInfo = {
                displayName: name,
                photoURL: imageURL
            }
            updateUserProfile(updateInfo)

            // INSERT DATA IN DATABASE 
            const userInfo = {
                name: data.name,
                email: data.email,
                image: imageURL,
            }
            const res = await axiosSecure.post(`/user`,userInfo)
            

            toast.success('Registration Successfully!')
            navigate('/')
        }
        catch (er) {
            toast.error(er)
        }

    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='space-y-2 pb-5 text-center'>
                <h2 className='text-4xl font-bold text-secondary text-start'> Create an Account </h2>
                <p className='text-secondary'>Register with GoFly</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <fieldset className="fieldset">

                            {/* Name field */}
                            <label className="label">Name</label>
                            <input border-secondary type="text" {...register('name')} className="input border-secondary" placeholder="Name" />



                            {/* image field */}
                            <label className="label">Name</label>
                            <input border-secondary type='file' {...register('image')} className="file-input border-secondary" placeholder="Your Photo" />


                            {/* Email Field */}
                            <label className="label">Email</label>
                            <input border-secondary type="email" {...register('email')} className="input border-secondary" placeholder="Email" />


                            <label className="label">Password</label>
                            <input border-secondary type="password" {...register('password')} className="input border-secondary" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>

                        </fieldset>
                    </form>
                    <GoogleLogin />
                    <p>Already have an Account? <Link to='/login' className='font-bold text-secondary'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;