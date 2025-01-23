import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logoNoBG.png";

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col" >

                    <div className="w-64 md:mx-0 mx-auto text-center md:text-left">
                        <h3 className="font-bold text-2xl">
                            {/* <Link to='/'>
                                Trend<span className="text-[red]">Vault</span>.Com
                            </Link> */}
                            <Link to="/">
                                <img src={logo} alt="TrendVault Logo" className="h-50" />
                            </Link>
                        </h3>
                    </div>

                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="text-[red] title-font font-medium tracking-widest text-lg mb-3">
                                Shop
                            </h2>
                            <ul className="list-none mb-10">
                                <li className="mt-1">
                                    <Link to="/allproducts">All Products</Link>
                                </li>
                                <li className="mt-1">
                                    <Link to="/allproducts">Electronics</Link>
                                </li>
                                <li className="mt-1">
                                    <Link to="/allproducts">Home Essentials</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="text-[red] title-font font-medium tracking-widest text-lg mb-3">
                                Company
                            </h2>
                            <ul className="list-none mb-10">
                                <li className="mt-1">
                                    <Link to="/about-us">About Us</Link>
                                </li>
                                <li className="mt-1">
                                    Careers
                                </li>
                                <li className="mt-1">
                                    <Link to="/about-us">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="text-[red] title-font font-medium tracking-widest text-lg mb-3">
                                Customer Service
                            </h2>
                            <ul className="list-none mb-10">
                                <li className="mt-1">
                                    <Link to="/contact-us">Contact Us</Link>
                                </li>
                                <li className="mt-1">
                                    FAQ
                                </li>
                                <li className="mt-1">
                                    Returns & Exchanges
                                </li>
                            </ul>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="text-[red] title-font font-medium tracking-widest text-lg mb-3">
                                Support
                            </h2>
                            <ul className="list-none mb-10">
                                <li className="mt-1">
                                    Shipping Information
                                </li>
                                <li className="mt-1">
                                    Payment Methods
                                </li>
                                <li className="mt-1">
                                    Track Order
                                </li>
                            </ul>
                        </div>

                    </div>
                    </div>

                    <div className="bg-[red] text-white">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-sm text-center sm:text-left">
    &copy; 2025 TrendVault.com. All Rights Reserved. 
    <span className="mx-2">|</span>
    <span>Committed to providing the best online shopping experience.</span>
    <span className="mx-2">|</span>
    <span>Follow us on social media for updates and offers.</span>
</p>

                            <p className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <span className="mr-2">
                                    <a href="https://www.facebook.com/astuteboygovind/" target="_blank" >
                                    <FaFacebook size={30} />
                                    </a>
                                </span>
                                <span className="mr-2">
                                    <a href="https://www.instagram.com/astute_boy_govind/" target="_blank">
                                    <FaInstagramSquare size={30} />
                                    </a>
                                </span>
                                <span className="mr-2">
                                    <BsTelegram size={30} />
                                </span>
                                <span className="mr-2">
                                    <FaSquareTwitter size={30} />
                                </span>
                            </p>
                        </div>
                    </div>
                    
            </footer>
        </>
    )
}

export default Footer;