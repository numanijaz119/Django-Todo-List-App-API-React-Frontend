import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'


const Header = () => {
    let { user, logoutUser } = useContext(AuthContext);

    return (
        <div className="d-flex justify-content-between align-items-center p-3 bg-light">
            <div>
                <Link to="/" className="btn btn-link">Home</Link>
                <span> | </span>
                {user ? (
                    <button className="btn btn-link" onClick={logoutUser}>Logout</button>
                ) : (
                    <Link to="/login" className="btn btn-link">Login</Link>
                )}
            </div>
            {user && <div className="ml-auto"><p className="mb-0">Welcome <span className="font-weight-bold text-primary">{user.username}</span></p></div>}
        </div>
    );
};

export default Header