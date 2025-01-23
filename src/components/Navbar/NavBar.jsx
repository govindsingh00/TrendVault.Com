import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { GiCrossMark } from "react-icons/gi";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
import toast from "react-hot-toast";
import logo from "../../assets/Logo/logoNoBG.png";


const NavBar = ({ cart, userName }) => {
    


    const handlelogout = () => {

        auth.signOut().then(() => {
            toast.success("Logged Out Successfully!!")
        }).catch((err) => {
            toast.success(`Error on Logged Out !! ${err}`)
        });

    }


    const [isOpen, setIsOpen] = useState(false);

    const ToggleChange = () => {
        setIsOpen(true);
    }

    return (
        <>
            <div>
                <header className="bg-white border-b border-gray-200 fixed z-10 w-full top-0">
                    <div className="container mx-auto flex justify-between p-5 items-center">
                        <div className="flex">
                            <Link to="/">
                                <img src={logo} alt="TrendVault Logo" className="h-12 rounded-full" />
                            </Link>
                            <Link to='/' >
                                <h3 className="font-bold text-2xl">
                                    Trend<span className="text-[red]">Vault</span>
                                </h3>
                            </Link>
                        </div>
                        
                        <div className="hidden md:block">
                            <ul className="flex items-center text-lg justify-center font-semibold">
                                <Link to='/' >
                                    <li className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
                                </Link>
                                <Link to='/allproducts'>
                                    <li className="mr-5 hover:text-gray-900 cursor-pointer">All Products</li>
                                </Link>
                                <Link to='/about-us'>
                                    <li className="mr-5 hover:text-gray-900 cursor-pointer">AboutUs</li>
                                </Link>
                                <Link to='/contact-us'>
                                    <li className="mr-5 hover:text-gray-900 cursor-pointer">ContactUs</li>
                                </Link>
                            </ul>
                        </div>

                        {
                            isOpen ? <div className="">
                                <ul className="flex flex-col gap-10 text-2xl absolute z-10 bg-[red] top-[73px] left-0 h-screen w-full text-white items-center justify-center font-semibold">
                                    <Link to='/' >
                                        <li className="mt-5 hover:text-gray-900 cursor-pointer" onClick={()=>setIsOpen(false)}>Home</li>
                                    </Link>
                                    <Link to='/allproducts'>
                                        <li className="mr-5 hover:text-gray-900 cursor-pointer" onClick={()=>setIsOpen(false)}>All Products</li>
                                    </Link>
                                    <Link to='/about-us'>
                                        <li className="mr-5 hover:text-gray-900 cursor-pointer" onClick={()=>setIsOpen(false)}>AboutUs</li>
                                    </Link>
                                    <Link to='/contact-us'>
                                        <li className="mr-5 hover:text-gray-900 cursor-pointer" onClick={()=>setIsOpen(false)}>ContactUs</li>
                                    </Link>
                                </ul>
                                <button className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer" onClick={() => setIsOpen(false)}>
                                    <GiCrossMark size={35} />
                                </button>
                            </div> : ""
                        }


                        <div className="flex justify-center items-center gap-3">

                            {/* login to logout button shifting */}
                            {
                                userName ? (<><Link to='/logout'>
                                    <button onClick={handlelogout} className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
                                        Logout
                                    </button>
                                    <span className="text-lg font-semibold text-gray-800">{userName}</span>
                                </Link>
                                </>) : (<><Link to='/login'>
                                    <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
                                        Login
                                    </button>
                                </Link>
                                </>)
                            }
                            {/* End of login to logout button shifting */}

                            <Link to='/cart' >
                                <button className="relative">
                                    <span className="absolute top-[-13px] right-0.5 bg-[red] text-xs font-semibold text-white px-2 rounded-full">{cart.length}</span>
                                    <FaCartArrowDown size={32} />
                                </button>
                            </Link>

                            {
                                isOpen ? "" : <button className="block md:hidden" onClick={ToggleChange}>
                                    <TiThMenu size={32} />
                                </button>
                            }
                    

                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default NavBar;