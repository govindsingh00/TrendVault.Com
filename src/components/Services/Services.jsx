import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { SiAegisauthenticator } from "react-icons/si";
import { GiReturnArrow } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";


function Services() {
  return (
    <>
        <div className='container mx-auto px-5 flex pt-14 gap-10 items-center justify-center flex-wrap'>
            <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
                <FaShippingFast />
                <p>FREE SHIPPING</p>
            </div>
            <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
                <SiAegisauthenticator />
                <p>AUTHENTIC PRODUCTS</p>
            </div>
            <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
                <GiReturnArrow />
                <p>EASY RETURN</p>
            </div>
            <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
                <FaRupeeSign />
                <p>SECURE PAYMENT</p>
            </div>
        </div>
    </>
  )
}

export default Services