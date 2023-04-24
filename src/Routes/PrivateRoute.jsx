import React, { useContext } from 'react';
import { UserContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(UserContext)

    // Check the loader
    if(loader){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }
    return <Navigate to = '/login'></Navigate>;
};

export default PrivateRoute;