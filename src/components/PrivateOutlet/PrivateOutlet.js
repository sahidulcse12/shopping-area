import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const PrivateOutlet = ({ children }) => {
    const [user] = useAuthState(auth);
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;