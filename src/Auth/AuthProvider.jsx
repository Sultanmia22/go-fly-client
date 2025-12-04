import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);



    // Create user with firebase atuh 
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    } 

    // Login user function 
    const userLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }


    //update profile 
    const updateUserProfile = (updateInfo) => {
        return updateProfile(auth.currentUser ,updateInfo)
    }


    // sign out 
    const userSignOut = () => {
        return signOut(auth)
    }

    // observe current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        
        return () => {
           return unsubscribe()
        }
    },[]) 

    const authInfo = {
       createUser,
       updateUserProfile,
       userLogin,
       user,
       loading,
       userSignOut,
    }

    console.log(user)

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;