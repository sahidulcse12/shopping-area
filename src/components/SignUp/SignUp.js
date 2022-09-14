import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('password did not match');
            return;
        }
        if (password.length < 5) {
            setError('password must be at least 5');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>

                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required />
                    </div>
                    <input className="form-submit" type="submit" value="Sign Up" />
                </form>

                <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
                <p style={{ textAlign: 'center' }}>
                    <Link to='/login' className="form-link">Already have an account?</Link>
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

export default SignUp;