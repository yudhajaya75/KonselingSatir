import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../login/login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='auth-form-container'>
            <div className='card-form-container'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email</label>
                    <br />
                    <input
                        value={email}
                        className='border'
                        type='email'
                        placeholder='Email'
                        id='email'
                        name='email'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <br />
                    <br />
                    <label htmlFor='password'>Password</label>
                    <br />
                    <div className='relative'>
                        <input
                            value={password}
                            className='border'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            id='password'
                            name='password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <span
                            className='absolute ml-[-20px] top-1/2 transform 
                            -translate-y-1/2 cursor-pointer opacity-[0.5]'
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <br />
                    <button
                        className='rounded-full bg-blue-700 p-1'
                        type='submit'
                        disabled={!email || !password}>
                        <Link className='p-4 text-white' to='/home'>
                            Login Now
                        </Link>
                    </button>
                </form>
                <p className='mt-2'>Don't have an account ? <Link to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;
