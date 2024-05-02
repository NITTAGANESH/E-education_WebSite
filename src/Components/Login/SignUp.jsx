
// import React, { useEffect, useState } from 'react';

// import { useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser, register } from '../../State/Auth/Action';



// function SignUp() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem('jwt');
//   const { auth } = useSelector(store => store);

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUser(jwt));
//     }
//   }, [jwt, auth.jwt]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();


//     const data = new FormData(e.currentTarget);
//     const userData = {
//       firstName: data.get('firstName'),
//       lastName: data.get('lastName'),
//       email: data.get('email'),
//       password: data.get('password'),

//     };
//     navigate("/")
//     console.log('user data', userData);
//     dispatch(register(userData));
//   };
//   return (
//     <>
//       <Navbar />
//       <div className='flex font-poppins items-center justify-center dark:bg-gray-900 min-w-screen min-h-screen'>
//         <div className='grid gap-8'>
//           <div id='back-div' className=' rounded-lg m-4'>
//             <div className='border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2'>
//               <h1 className='pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default'>
//                 Sign Up
//               </h1>
//               <form
//                 onSubmit={handleSubmit}
//                 action='#'
//                 method='post'
//                 className='space-y-4'
//               >
//                 <div>
//                   <label
//                     htmlFor='name'
//                     className='mb-2 dark:text-gray-400 text-lg'
//                   >
//                     First Name
//                   </label>
//                   <input
//                     id='firstName'
//                     className='border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300'
//                     name='firstName'
//                     label='First name'
//                     placeholder='firstName'
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor='name'
//                     className='mb-2 dark:text-gray-400 text-lg'
//                   >
//                     Last Name
//                   </label>
//                   <input
//                     id='lastName'
//                     name='lastName'
//                     className='border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300'
//                     label='Last Name'
//                     placeholder='lastName'
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor='email'
//                     className='mb-2 dark:text-gray-400 text-lg'
//                   >
//                     Email
//                   </label>
//                   <input
//                     id='email'
//                     label='Email'
//                     name='email'
//                     className='border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300'
//                     placeholder='Email'
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor='password'
//                     className='mb-2 dark:text-gray-400 text-lg'
//                   >
//                     Password
//                   </label>
//                   <input
//                     id='password'
//                     name='password'
//                     className='border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300'
//                     type='password'
//                     label='Password'
//                     placeholder='Password'
//                     required
//                   />
//                 </div>
//                 <button
//                   className='bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out'
//                   type='submit'
//                 >
//                   SIGN UP
//                 </button>
//               </form>
//               <div className='flex flex-col mt-4 items-center justify-center text-sm'>
//                 <h3>
//                   <span className='cursor-default dark:text-gray-300'>
//                     Have an account?
//                   </span>
//                   <a
//                     className='group text-blue-400 transition-all duration-100 ease-in-out'
//                     href='/login'
//                   >
//                     <span className='bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
//                       Log In
//                     </span>
//                   </a>
//                 </h3>
//               </div>

//               {/* Third Party Authentication Options */}
//               <div
//                 id='third-party-auth'
//                 className='flex items-center justify-center mt-5 flex-wrap'
//               >
//                 <button
//                   href='#'
//                   className='hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1'
//                 >
//                   <img
//                     className='max-w-[25px]'
//                     src='https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/'
//                     alt='Google'
//                   />

//                 </button>
//                 {/* Add other third-party authentication buttons similarly */}
//               </div>

//               <div className='text-gray-500 flex text-center flex-col mt-4 items-center text-sm'>
//                 <p className='cursor-default'>
//                   By signing in, you agree to our
//                   <a
//                     className='group text-blue-400 transition-all duration-100 ease-in-out'
//                     href='#'
//                   >
//                     <span className='cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>

//                       Terms
//                     </span>
//                   </a>

//                   <a
//                     className='group text-blue-400 transition-all duration-100 ease-in-out'
//                     href='#'
//                   >
//                     <span className='cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>

//                       Privacy Policy
//                     </span>
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import IMG from "../../assets/E- education logo .png";
import student from "../../assets/singup1.svg";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3465/api/v1/user/save",
        {
          employeename: username,
          email: email,
          password: password,
        }
      );
      alert("Employee Registration Successfully");

      // Handle success response
      console.log("Response:", response.data);
      // Redirect to login page upon successful signup
      navigate("/Login");
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="grid  grid-cols-1 md:grid-cols-2 font-poppins min-w-screen min-h-screen dark:bg-gray-900">
        <div className=" py-2   flex justify-center ">
          <img
            src={student}
            className=" md:w-auto md:h-auto lg:w-auto lg:h-auto w-96 h-96"
            alt="Student"
          />
        </div>

        <div className="flex justify-center ">
          <div className="max-w-md  ">
            {/*  */}
            <div id="back-div" className=" rounded-lg ">
              <div className="bg-white  border-[20px] border-transparent rounded-[20px] dark:bg-gray-900  shadow-lg xl:p-10 2xl:p-10 lg:px-10 lg:py-0  md:p-10 sm:p-0 ">
                <div className=" ">
                  <img src={IMG} className="w-56 mx-auto " alt="Logo" />
                </div>
                <h1 className="font-Calistoga  pb-6 text-violet-600  text-4xl dark:text-gray-400 text-center cursor-default">
                  Sign Up
                </h1>
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  method="post"
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 dark:text-gray-400 text-lg font-NotoSans"
                    >
                      User Name
                    </label>
                    <input
                      id="name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                      type="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 dark:text-gray-400 text-lg font-NotoSans"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 dark:text-gray-400 text-lg font-NotoSans"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button
                    className="font-Calistoga bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
                <div className="flex flex-col mt-4 items-center justify-center text-sm">
                  <h3>
                    <span className="cursor-default dark:text-gray-300">
                      Have an account?
                    </span>
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="/Login"
                    >
                      <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Log In
                      </span>
                    </a>
                  </h3>
                </div>

                <div
                  id="third-party-auth"
                  className="flex items-center justify-center mt-5 flex-wrap"
                >
                  <button
                    href="#"
                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                  >
                    <img
                      className="max-w-[25px]"
                      src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                      alt="Google"
                    />
                  </button>
                </div>

                <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                  <p className="cursor-default">
                    By signing in, you agree to our
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="#"
                    >
                      <span className="mx-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Terms
                      </span>
                    </a>
                    and
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="#"
                    >
                      <span className="ml-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Privacy Policy
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;