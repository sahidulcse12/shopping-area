import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <nav className="header">
                <img src={logo} alt="" />
                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Order</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {
                        user ?
                            <Link to="/login" onClick={handleSignOut}>Sign Out</Link>
                            :
                            <Link to="/login">Login</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;