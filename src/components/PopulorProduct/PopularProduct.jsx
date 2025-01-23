import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function PopularProduct({AddToCart}) {

    const [popularProduct, setPopularProduct] = useState([]);

    useEffect(() => {
        const PopularProductFetch = async () => {
            try {
                const res = await axios('https://dummyjson.com/carts/1');
                setPopularProduct(res.data.products);
            } catch (err) {
                toast.error(err);
            }

        }

        PopularProductFetch();
    }, []);



    return (
        <>
            <div className="bg-red-600 flex items-center justify-center my-8 py-12">
                <hr className="border-t-2 border-black w-1/3" />
                <div className="mx-4 text-center">
                    <h2 className="text-4xl font-semibold text-white">Popular Products</h2>
                    <p className="text-lg mt-4">Check out our most popular items that are loved by customers like you!</p>
                </div>
                <hr className="border-t-2 border-black w-1/3" />
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        
                        {
                            popularProduct.map((popularitem) => (
                                <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="relative rounded-lg overflow-hidden shadow-lg group">
        <img 
            alt="ecommerce" 
            className="object-cover object-center w-full h-48 group-hover:scale-110 transition-transform duration-300" 
            src={popularitem.thumbnail} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="relative p-4 bg-white">
            <h2 className="text-gray-900 text-xl font-semibold">{popularitem.title}</h2>
            <p className="mt-2 text-gray-800 font-medium">{popularitem.price} Rs.</p>
            <button 
                className="flex mt-4 w-full mx-auto py-2 px-6 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
                onClick={() => AddToCart(popularitem)} 
            >
                Add To Cart
            </button>
        </div>
    </div>
</div>

                            ))
                        }




                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularProduct