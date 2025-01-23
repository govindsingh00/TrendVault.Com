import React from 'react';
import { Link } from 'react-router-dom';
import AboutBanner from "../../assets/About/About1.jpg";
import AboutSection from "../../assets/About/About2.jpg";
import Testimonials from '../Testimonials/Testimonials';

function AboutUs() {
  return (
    <>
      {/* Hero Image Section */}
      <div className='relative mt-[80px]'>
        <img
          src={AboutBanner}
          alt="Login image"
          className='object-cover w-full object-center h-[400px] mt-5'
        />
        <div className='w-full h-[400px] bg-black absolute top-0 left-0 opacity-[.6]'></div>
        <h2 className='absolute top-[40%] left-[40%] text-white font-semibold text-4xl md:text-6xl'>
          About Us
        </h2>
      </div>

      {/* Company Introduction Section */}
      <section className="text-gray-600 body-font bg-gray-50 py-16">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Company Image or Logo Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded-lg shadow-lg " alt="Company Logo" src={AboutSection} />
          </div>

          {/* Company Information Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to <span className='text-blue-400'>TrendVault</span>
              <br className="hidden lg:inline-block" />Your Trusted Online Store
            </h1>
            <p className="mb-8 leading-relaxed">At <span className='text-blue-400'>TrendVault</span>, we believe in providing high-quality products that make your life easier and more enjoyable. Our mission is to offer a seamless online shopping experience with fast shipping, excellent customer service, and a wide range of carefully curated products.</p>
            <p className="mb-8 leading-relaxed">From electronics to home essentials, our store is designed to meet your needs with a user-friendly interface and reliable delivery services. We're here to help you find exactly what you're looking for, and we're dedicated to ensuring that every step of your shopping experience is smooth and satisfying.</p>
            <p className="mb-8 leading-relaxed md:hidden lg:block">We understand that trust is earned through quality. That's why we partner with top brands and manufacturers to bring you only the best. Our products undergo rigorous testing to ensure they meet high standards of durability, functionality, and design. Every item is carefully sourced to ensure it adds value to your life.</p>
            <p className="mb-8 leading-relaxed md:hidden lg:block">Our wide-ranging catalog includes everything from electronics, fashion, beauty products, and home essentials, to exclusive seasonal collections. No matter what you're looking for, you'll find it at TrendVault. We strive to continuously expand our offerings so that we can meet your changing needs and preferences.</p>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">Founded in [Year], <span className='text-blue-400'>TrendVault</span> started as a small team of passionate individuals who wanted to create a better way for people to shop online. What began as a small online shop offering a handful of products has grown into a trusted and comprehensive e-commerce platform offering a wide range of items, from the latest tech gadgets to fashion, home decor, and more.</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">Our dedication to offering exceptional customer service and a seamless online shopping experience has been the cornerstone of our success. We take pride in offering top-notch products, speedy shipping, and customer support that goes above and beyond.</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">As we continue to grow and innovate, we remain committed to bringing you the best shopping experience possible and staying ahead of the trends. We're excited to be part of your shopping journey!</p>
        </div>
      </section>

      {/* Our Mission and Values Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">At <span className='text-blue-400'>TrendVault</span>, our mission is simple: To provide our customers with an online shopping experience that is fast, efficient, and hassle-free. We believe in offering only the best products from the most reputable brands to ensure you always get value for your money. We're here to make your shopping experience easier and more enjoyable, every time you visit us.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Core Values</h2>
          <ul className="list-disc pl-5 mb-8 text-left mx-auto max-w-4xl">
            <li>Customer Satisfaction: We are committed to providing exceptional service.</li>
            <li>Quality Products: We offer only the best products from trusted brands.</li>
            <li>Fast & Reliable Shipping: Get your orders quickly and with confidence.</li>
            <li>Transparent Pricing: No hidden fees, just honest prices for great products.</li>
            <li>Sustainability: We strive to implement eco-friendly practices in every part of our business.</li>
            <li>Innovation: We are always on the lookout for the latest trends and new products to offer our customers.</li>
          </ul>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Meet The Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">Our team is composed of passionate individuals who share the same vision: To make shopping online easier and more enjoyable. With a mix of experts in e-commerce, customer service, and technology, we work tirelessly to provide you with the best experience possible.</p>

          <div className="flex justify-center space-x-10">
            <div className="flex flex-col items-center">
              <img className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg" alt="Team Member" src="https://randomuser.me/api/portraits/men/1.jpg" />
              <p className="font-semibold text-gray-900">John Doe</p>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg" alt="Team Member" src="https://randomuser.me/api/portraits/women/1.jpg" />
              <p className="font-semibold text-gray-900">Jane Smith</p>
              <p className="text-gray-600">Marketing Director</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg" alt="Team Member" src="https://randomuser.me/api/portraits/men/2.jpg" />
              <p className="font-semibold text-gray-900">Mike Johnson</p>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Shopping?</h2>
        <p className="text-lg mb-8">Explore our wide range of products and find exactly what you're looking for at unbeatable prices.</p>
        <div className="flex justify-center">
          <Link to='/allproducts'>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Shop Now</button>
          </Link>
          <Link to='/contact-us'>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact Us</button>
          </Link>
        </div>
      </section>

      <Testimonials/>

    </>
  );
}

export default AboutUs;
