import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogInPage() {
    const [loginData, setLoginData] = useState({
        user_name: '',
        pass_word: '',
        is_admin: false
    });

    const navigate = useNavigate(); // Initialize the navigate function

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            const data = await response.json()
            console.log('====================================');
            console.log(data);
            console.log('====================================');
            if (response.ok) {
                // Login successful
                console.log(typeof(data.is_admin))
                if(data.is_admin == false){
                    navigate('/registration'); // Navigate to the registration page
                } else if(data.is_admin == true) {
                    navigate('/dashboard');
                }
               
                // Handle login error
                console.log('Login failed');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = () => {
        navigate('/sign-up')
    }

    return (
        <div className='h-svh pt-32'>
            <div className='text-center w-1/4 rounded-lg bg-gray-100 p-6 shadow-lg m-auto'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <h1 className='font-bold'>Future Stay - Log In</h1>
                    </div>
                    <div>
                        <label htmlFor="user_name" className="text-sm font-medium text-black">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="user_name"
                            value={loginData.user_name}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 m-auto"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="pass_word" className="text-sm font-medium text-black">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="pass_word"
                            value={loginData.pass_word}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 m-auto"
                            required
                        />
                    </div>
                    <div className='mt-6'>
                        <button type='submit' className='bg-green-500 w-60 h-10 font-semibold text-white rounded'>
                            Log In
                        </button>
                    </div>
                    <div>
                        <a href="#" className='font-medium text-green-600 hover:underline' onClick={handleClick}>
                            Haven't an account? Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
