import React from 'react'
import { Link } from 'react-router-dom'
import EmptyCart from "../../assets/Cart/EmptyCart.webp";

function MissingCart() {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <div className="mb-6">
          <img
            src={EmptyCart} // Replace this with the image URL or asset
            alt="Cart illustration"
            className="mx-auto"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Missing Cart Items?
        </h2>
        <p className="text-gray-600 mb-6">
          Login to see the items you added previously.
        </p>
        <Link to='/login'>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition">
          Login
        </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default MissingCart