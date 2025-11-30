import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const authInfo = {
        name: 'Emon'
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;