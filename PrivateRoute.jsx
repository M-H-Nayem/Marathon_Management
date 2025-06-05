import React, { use } from 'react';
import { AuthContext } from './src/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from './src/Components/Loading/Loading';

const PrivateRoute = ({ children }) => {
    let { user, loading } = use(AuthContext)
    let location = useLocation()
    // console.log(location);
    
    if (loading) {
        return <Loading></Loading>
    }
    
  if (user && user?.email) {
    
    return children;
    }
    return <Navigate to={"/login"} state={location.pathname} ></Navigate>;
};

export default PrivateRoute;