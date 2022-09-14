import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }


    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    navigate('/shop');
                }

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                console.log(errorMessage);
            });
    }


    return (
        <div className="form-container">
            <div>
                <p style={{ color: 'red', fontSize: '20px' }}>{error}</p>
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                <p style={{ textAlign: 'center' }}>
                    New to Ema-john?<Link to='/signup' className="form-link">Create a new account</Link>
                </p>
                <div className="line-draw">
                    <div className="line-1"></div>
                    <div className="or">or</div>
                    <div className="line-2"></div>
                </div>
                <button className="form-submit">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;