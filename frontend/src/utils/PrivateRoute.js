import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    let { user } = useContext(AuthContext);

    // // Allow access to the register page regardless of authentication status
    // if (window.location.pathname === '/register') {
    //     return children;
    // }

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

