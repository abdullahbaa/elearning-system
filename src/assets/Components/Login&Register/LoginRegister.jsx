import React from 'react';
import "./LoginRegister.css"
import { FaUserAlt, FaLock } from "react-icons/fa";


const LoginRegister = () => {
    return (
        <div className='wrapper'>
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
                        <p>Don't have an account? <a href="#">Register</a></p>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;