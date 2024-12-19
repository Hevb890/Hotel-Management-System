import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';


export default function SignInPage() {
  const navigate = useNavigate();
  const [registeringData, setRegisteringData] = useState({
    user_name: '',
    pass_word: '',
    e_mail: '',
    is_admin: false
  })

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRegisteringData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(registeringData)
            });
            navigate('/')
            
      }catch(error){
        console.log(error);
      }
    }
    const handleClick = () => {
      navigate('/')
    }

  return (
    <div className='h-svh pt-32'>
         <div className='text-center w-1/4 rounded-lg bg-gray-100 p-6 shadow-lg m-auto'>
            <form onSubmit={handleSubmit}>
              <div className='mb-6'>
                <h1 className='font-bold'>Future Stay - Sign In</h1>
              </div>
              <div>
                <label for="user_name" className="text-sm font-medium text-black ">Username:</label>
                <input type="text" id="user_name" value={registeringData.user_name} onChange={handleChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 m-auto"  required />
              </div>
              <div>
                <label for="pass_word" className="text-sm font-medium text-black ">Password:</label>
                <input type="password" id="pass_word" value={registeringData.pass_word} onChange={handleChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 m-auto"  required />
              </div>
              <div>
                <label for="e_mail" className="text-sm font-medium text-black ">Email:</label>
                <input type="email" id="e_mail" value={registeringData.e_mail} onChange={handleChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 m-auto"  required />
              </div>
              <div className='mt-6'>
                <button type='submit' className='bg-green-500 w-60 h-10 font-semibold text-white rounded'>
                  Sign Up
                </button>
              </div>
              <div>
                <a href="#" className='text-greenfont-medium text-green-600  hover:underline' onClick={handleClick}>Already have an account? Login</a>
              </div>
          </form>
        </div>
    </div>
  )
}
