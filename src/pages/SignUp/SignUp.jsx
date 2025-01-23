import React, { useState } from 'react';
import login from '../../assets/login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FirebaseAuth/FirebaseAuth';
import { updateProfile } from 'firebase/auth';


function SignUp() {
  const [userSignUp, setUserSignUp] = useState({
    name: '',
    address: '',
    contact: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Navigate to another page after successful sign-up

  const handleChange = (e) => {
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
    console.log(userSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (
      !userSignUp.name ||
      !userSignUp.address ||
      !userSignUp.contact ||
      !userSignUp.email ||
      !userSignUp.password
    ) {
      return toast.error('All fields are required');
    }
    
    try {
      // Create user with email and password using Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userSignUp.email,
        userSignUp.password
      );

      const user = userCredential.user;

      // Update the user's profile with the name
      await updateProfile(user, {
        displayName: userSignUp.name,
      });

      // If successful, show success message and navigate to the login page
      toast.success('Sign Up successful');
      console.log('User created:', user);

      navigate('/login'); // Navigate to login page after sign-up
    } catch (err) {
      // Handle errors (e.g., user already exists, invalid email format, etc.)
      toast.error(err.message);
      console.error(err);
    }
  
  };

  return (
    <>
      <div>
        <div className="relative">
          <img
            src={login}
            alt="Login image"
            className="object-cover w-full object-center h-[200px] mt-5"
          />
          <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
          <h2 className="absolute top-[30%] left-[40%] text-white font-semibold text-4xl md:text-6xl">
            Sign Up Page
          </h2>
        </div>

        <div className="container px-9 py-24 mx-auto flex bg-gray-300">
          <div className="mx-auto bg-red-100 rounded-lg p-8 flex flex-col mt-10 md:mt-0 shadow-md w-[5000px]">
            <h2 className="text-gray-900 text-lg mb-3 text-center font-medium title-font">
              Sign Up Form
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  autoComplete="off"
                  value={userSignUp.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  className="text-center w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Address</label>
                <input
                  autoComplete="off"
                  value={userSignUp.address}
                  onChange={handleChange}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter Address"
                  className="text-center w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Contact</label>
                <input
                  autoComplete="off"
                  value={userSignUp.contact}
                  onChange={handleChange}
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Enter Contact"
                  className="text-center w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  autoComplete="off"
                  value={userSignUp.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className="text-center w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Password</label>
                <input
                  autoComplete="off"
                  value={userSignUp.password}
                  onChange={handleChange}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  className="text-center w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Confirm Password</label>
                <input
                  autoComplete="off"
                  type="password"
                  id="Cpassword"
                  name="Cpassword"
                  placeholder="Enter Confirm Password"
                  className="text-center w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-indigo-700 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Sign Up
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-3 text-center">
              Do you have an account? &nbsp;&nbsp;
              <Link to="/login">
                <button className="cursor-pointer hover:text-blue-900 text-blue-500">
                  Sign-In
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
