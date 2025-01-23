import React, { useEffect, useState } from 'react';
import axios from 'axios';
import login from '../../assets/login.jpg';
import { Link } from 'react-router-dom';

function AllProducts({AddToCart}) {

  const [allProducts, setAllProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const [showProduct, setShowProduct] = useState(false);

  // for getting all products from dummy JSON
  useEffect(()=>{
    const AllProducts = async () => {
      const res = await axios ('https://dummyjson.com/products')
      // console.log(res.data.products);
      setAllProducts(res.data.products);
    }
    AllProducts();
  },[])

  // for getting all products categories from dummy JSON
  useEffect(() => {
    const getAllProductsCat = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setCategories(res.data);  // Assuming this is an array of strings or objects
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    getAllProductsCat();
  }, []);


  // to get selected category name
  const filterProductFN = async (category) => {
    setFilter(category);
  }

  // filter products by selected category
  useEffect(() => {
    const filteredProducts = async () => {
      try {
        if(filter){
          const res = await axios(`https://dummyjson.com/products/category/${filter}`);
          // console.log(res.data.products);
          setShowProduct(true);
          setProducts(res.data.products);
          // console.log(res.data.products);
        }
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    filteredProducts();
  }, [filter]);


  return (
    <>
        {/* =========================== Banner ========================== */}
      <div className='relative mt-[80px]'>
        <img
          src={login}
          alt="All Products image"
          className='object-cover w-full object-center h-[200px] mt-5'
        />

        <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
        <h2 className='absolute top-[30%] left-[40%] text-white font-semibold text-4xl md:text-6xl'>
          All Products Page
        </h2>

      </div>
      {/* =========================== End of Banner ========================== */}


      {/* =========================== Select Box (select categories ) ========================== */}
          <div className='flex flex-wrap gap-1 items-center text-center mx-[45%]'>
            {/* Check if categories is an array and not empty */}
            <select onChange={(e)=>filterProductFN(e.target.value)} className="border bg-white text-black p-2 rounded-md items-center text-center">
              <option value="All Products">Order By Category</option>
              {/* Check if categories is an array and not empty */}
              {categories.length > 0 ? (
                categories.map((category, index) => ( 
                  <option key={index} value={typeof category === 'object' ? category.name : category}> 
                    {/* If category is an object, render its 'name' property, otherwise render the string  */}
                    {typeof category === 'object' ? category.name : category} 
                  </option> 
                )) 
              ) : ( 
                <option disabled>Loading categories...</option> 
              )} 
            </select>
          </div>
      {/* ===========================End of Select Box(selct categories ) ========================== */}

      {/* ===========================start of Search Box(select categories ) ========================== */}
      {/* <div className='text-center mt-3 text-2xl'>
        <input placeholder='search item' className='border-4 px-2 py-2' />
      </div> */}
      {/* ===========================End of Search box(select categories ) ========================== */}

      {/* ===========================tertiary operator to ddecide when to show all items and when to show selected ========================== */}
      {
        showProduct? (<div className="min-h-screen p-4 bg-gray-100">
          {/* Check if products is an array and not empty */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* If product is an object with properties */}
                  {typeof product === "object" ? (
                    <div className="flex flex-col items-center">
                      <Link to={`/productinfo/${product.id}`}>
                      <img
                        src={product.thumbnail}
                        alt={`${product.title} photo`}
                        className="w-full h-64 object-cover mb-4 rounded-lg"
                      />
                      <h3 className="text-xl font-semibold text-center text-gray-800">{product.title}</h3>
                      <p className="text-lg font-bold text-green-600 mt-2">Price: {product.price} Rs.</p>
                      <p className="text-sm text-gray-500 mt-1">⭐ Rating: {product.rating}</p>
                      <button className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out' onClick={()=>AddToCart(product)} >Add to Cart</button>
                      </Link>
                    </div>
                  ) : (
                    <p className="text-center text-lg font-medium text-gray-700">{product.title}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-xl text-gray-500">Loading products...</p>
          )}
        </div>):(<div className="min-h-screen p-4 bg-gray-100">
        {/* Check if products is an array and not empty */}
        {allProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.map((allProduct) => (
              <div key={allProduct.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* If product is an object with properties */}
                {typeof allProduct === "object" ? (
                  <div className="flex flex-col items-center">
                    <Link to={`/productinfo/${allProduct.id}`}>
                    <img
                      src={allProduct.thumbnail}
                      alt={`${allProduct.title} photo`}
                      className="w-full h-64 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-semibold text-center text-gray-800">{allProduct.title}</h3>
                    <p className="text-lg font-bold text-green-600 mt-2">Price: {allProduct.price} Rs.</p>
                    <p className="text-sm text-gray-500 mt-1">⭐ Rating: {allProduct.rating}</p>
                    <button className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out' onClick={()=>AddToCart(allProduct)}>Add to Cart</button>
                    </Link>
                  </div>
                ) : (
                  <p className="text-center text-lg font-medium text-gray-700">{allProduct.title}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-500">Loading products...</p>
        )}
      </div>)
      }
      {/* ===========================End of Tertiary operator to ddecide when to show all items and when to show selected ========================== */}

        {/* =========================== All products without filter========================== */}
        {/* <div className="min-h-screen p-4 bg-gray-100"> */}
        {/* Check if products is an array and not empty */}
        {/* {allProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.map((allProduct, index) => ( */}
              {/* <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"> */}
                {/* If product is an object with properties */}
                {/* {typeof allProduct === "object" ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={allProduct.thumbnail}
                      alt={`${allProduct.title} photo`}
                      className="w-full h-64 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-semibold text-center text-gray-800">{allProduct.title}</h3>
                    <p className="text-lg font-bold text-green-600 mt-2">Price: ${allProduct.price}</p>
                    <p className="text-sm text-gray-500 mt-1">Rating: {allProduct.rating}</p>
                  </div>
                ) : (
                  <p className="text-center text-lg font-medium text-gray-700">{allProduct.title}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-500">Loading products...</p>
        )}
      </div> */}
        {/* =========================== All products without filter ========================== */}


      {/* =========================== filtered products ========================== */}
      {/* <div className="min-h-screen p-4 bg-gray-100"> */}
        {/* Check if products is an array and not empty */}
        {/* {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"> */}
                {/* If product is an object with properties */}
                {/* {typeof product === "object" ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={product.thumbnail}
                      alt={`${product.title} photo`}
                      className="w-full h-64 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-semibold text-center text-gray-800">{product.title}</h3>
                    <p className="text-lg font-bold text-green-600 mt-2">Price: ${product.price}</p>
                    <p className="text-sm text-gray-500 mt-1">Rating: {product.rating}</p>
                  </div>
                ) : (
                  <p className="text-center text-lg font-medium text-gray-700">{product.title}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-500">Loading products...</p>
        )}
      </div> */}
    {/* ===========================End of filtered products ========================== */}
    </>
  );
}

export default AllProducts;
