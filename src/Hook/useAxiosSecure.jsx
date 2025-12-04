import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
});
const useAxiosSecure = () => {
   const {user,loading,userSignOut} = useAuth();
   const navigate = useNavigate()
   
   useEffect(() => {
        if(!loading && user?.accessToken){

            // Request interceptors
            const requestInterCeptors = axiosSecure.interceptors.response.use( config => {
                config.headers.Authorization = `Bearer ${user?.accessToken}`
                return config
            })

            // response interceptors 
            const responseInterCeptors = axiosSecure.interceptors.response.use( res => res, er => {
                if(er?.response?.status === 401 || er?.response?.status === 403){
                    userSignOut()
                    .then(() => {
                        toast.success('Logout Successfully!')
                    })

                    navigate('/')

                    return Promise.reject(er)
                }
            } )


             return () => {
        axiosSecure.interceptors.request.eject(requestInterCeptors)
        axiosSecure.interceptors.response.eject(responseInterCeptors)
      }
        }
   },[user,loading,navigate,userSignOut])

   return axiosSecure
};

export default useAxiosSecure;