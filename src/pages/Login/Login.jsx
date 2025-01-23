import React,{useState} from 'react';
import login from '../../assets/login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FirebaseAuth/FirebaseAuth';  // Make sure this path is correct
import toast from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For navigation after successful login

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      return toast.error('Both email and password are required');
    }

    try {
      // Sign in with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login successful');
      navigate('/');  // Redirect to home after successful login
    } catch (error) {
      toast.error('Invalid email or password');
    }
  };
  return (
    <>
      <div>
        <div className='relative'>
          <img
            src={login}
            alt="Login image"
            className='object-cover w-full object-center h-[200px] mt-5'
          />

          <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
          <h2 className='absolute top-[30%] left-[40%] text-white font-semibold text-4xl md:text-6xl'>
            Login Page
          </h2>
          
        </div>

        <div className="container px-5 py-24 mx-auto flex bg-gray-300">
          <div className=" mx-auto bg-red-100 rounded-lg p-8 flex flex-col mt-10 md:mt-0 shadow-md">
            <h2 className="text-gray-900 text-lg mb-3 font-medium title-font">Login Form</h2>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder='Enter Username or Email' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder='Enter Password' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={handleLogin} className="text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log in</button>
            <p className="text-xs text-gray-500 mt-3">Don't have an account ?
              <Link to='/SignUp'>
                <button className='cursor-pointer hover:text-blue-900 text-blue-500'>Sign-Up</button>
              </Link> 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;