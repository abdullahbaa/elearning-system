import React, { useState } from 'react';
import "./LoginRegister.css"
import { FaUserAlt, FaLock , FaEnvelope} from "react-icons/fa";


const LoginRegister = () => {
        const [action , setAction] = useState('');
        const registerLink = () =>{
        setAction('active');
        };
        const loginLink = () =>{
        setAction('');
        };

    return (
        <div className={`wrapper ${action}`}>
            {/* Login Section */}
            <div className="from-box login">
                <form action="">
                    <h1>Login</h1>
            {/* User name box */}
                    <div className="input-box">
                        <input type="text" placeholder='username' required />
                        <FaUserAlt className='icon'/>
                    </div>
                    {/* Password box */}
                    <div className="input-box">
                        <input type="password" placeholder='password' required />
                        <FaLock className='icon'/>
                    </div>
                    {/* Forgot Password */}
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />Remember me 
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type='submit'>
                        Login
                    </button>
                    {/* Register Link */}
                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>

                    </div>
                </form>
            </div>

            {/* Registration Section */}
            <div className="from-box register">
                <form action="">
                    <h1>Registration</h1>
            {/* User name box */}
                    <div className="input-box">
                        <input type="text" placeholder='username' required />
                        <FaUserAlt className='icon'/>
                    </div>
                    {/* Email box */}
                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                        <FaEnvelope  className='icon'/>
                    </div>
                    {/* Password box */}
                    <div className="input-box">
                        <input type="password" placeholder='password' required />
                        <FaLock className='icon'/>
                    </div>
                    {/* Forgot Password */}
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />I agree to the terms & Conditions 
                        </label>
                    </div>
                    <button type='submit'>
                        Register
                    </button>
                    {/* Register Link */}
                    <div className="register-link">
                        <p>Already have an account? <a href="#"
                        onClick={loginLink}
                        >Login</a></p>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;