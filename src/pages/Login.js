import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { AuthContext } from '../services/AuthContext'
import wideBanner from '../assets/Login/15@2x.png'


function Login() {

  const { handleLogin, isAuthenticated } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleLoginClick = async (role) => {

  
      
  
      const buttonRole = role;

      axios.get('http://localhost:9000/users')
      .then(response => {
      // The response.data contains the array of users from the server
      const users = response.data;

      // Find the user with the corresponding role
      const user = users.find(user => user.role === buttonRole);

      if (user) {
        // If a user with the specified role is found, pass the username and password values

        handleLogin(user);
      } else {
        // Handle the case when there is no user with the specified role
        console.log("No user found with the role:", buttonRole);
      }
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error("Error fetching users:", error);
    });
  
  };
  
  useEffect(() => {
    if (isAuthenticated) {
     navigate('/menu')
    }
  }, [isAuthenticated, navigate]);


 
  
  return (
    <div className='absolute flex top-0 left-0 z-50  bg-blue-400 w-[1754px] h-[1024px] font-poppins text-white'>
      <div className='flex flex-row bg-[#2d2d2d] w-[50%]'>
        <div className="flex flex-col justify-center w-full items-center">
          <img 
                  className="h-[35%] object-cover mb-[5%]"
                  alt=""
                  src={wideBanner}
                  />
          <p className='text-5xl'>SHOT Café! : A Point of Sale System </p>
        </div>
      </div>
      <div className='bg-whitesmoke w-[50%] '>
        <>
        <div className='bg-black w-[70%] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl'>
          <div className='flex flex-row  justify-center item-center  py-[10%]  '>
            <img 
              className="w-[20%] object-cover "
              alt=""
              src={wideBanner}
              />
            <p className='text-13xl'>SHOT Café</p>
          </div>
          <div className=''>
              <div className='flex flex-col justify-center align-center  mx-[10%] w-[75%]'>
                <p>User</p>
                <input 
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='bg-white px-4 m-0 py-3  w-text-base justify-between text-gray-400  font-poppins rounded-lg tracking-wider border-2 border-transparent focus:border-gray-100 duration-300'></input>
              </div>
              <div className='flex flex-col justify-center align-center  mx-[10%]  w-[75%]'>
                <p>Password</p>
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password' 
                className='bg-white px-4 m-0 py-3  w-text-base  justify-between  text-gray-400  font-poppins rounded-lg tracking-wider border-2 border-transparent focus:border-gray-100 duration-300'></input>
              </div>
           </div>
    
          <div className="flex justify-center py-[12%] ">
              <button
                    className=" relative  h-[45px] w-[30%] mx-[1%] rounded-lg bg-[#31af99] text-white font-poppins border border-[#595959] border-solid"
                    onClick={() => handleLoginClick('admin')}>
                    Admin
              </button>

            <button
                    className=" relative h-[45px] w-[30%] mx-[1%] rounded-lg bg-[#31af99] text-white font-poppins border border-[#595959] border-solid"
                    onClick={() => handleLoginClick('staff')}> 
                    Staff
            </button>
          </div>

        </div>
        <div className=' relative top-[32%] text-center text-black'>
          © SHOT Café, 2023
        </div>
        </>
      </div>
    </div>
  )
}

export default Login