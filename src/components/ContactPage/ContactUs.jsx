import React, { useState } from 'react'
import { db } from '../../FirebaseAuth/FirebaseAuth';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import login from '../../assets/login.jpg';


function ContactUs() {



    const [contactData, setContactData] = useState({
        username: '',
        email: '',
        message: ''
      });
    
      const navigate = useNavigate(); // Navigate to another page after successful sign-up
    
      const handleContact = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
      };
    
      const handleContactSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission
    
        if (
          !contactData.username ||
          !contactData.email ||
          !contactData.message
        ) {
          return toast.error('All fields are required');
        }
        else{
            try {
                addDoc(collection(db, "contactData"), {
                    user: contactData.username,
                    email: contactData.email,
                    message: contactData.message
                })
                .then(() => {
                    toast.success(`Thanks, ${contactData.username}😊 Your Form Data Submitted Successfully 🎉🎉...`);
                    setContactData({
                        username: '',
                        email: '',
                        message: ''
                    });
                })
                .catch((err) => {
                    toast.error(`Error: ${err.message}`);
                });
            } catch (err) {
                toast.error(`Error: ${err.message}`);
            }
        }
        
    }
    

    return (
        <>
            <div className='relative mt-[80px]'>
                      <img
                        src={login}
                        alt="Login image"
                        className='object-cover w-full object-center h-[200px] mt-5'
                      />
            
                      <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
                      <h2 className='absolute top-[30%] left-[40%] text-white font-semibold text-4xl md:text-6xl'>
                        Contact
                      </h2>
                      
                    </div>

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274.1566684206075!2d75.83881987598062!3d25.154929127864236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f850ba471041f%3A0x8c910a414ac8f262!2sMaths%20Home%20tutor!5e0!3m2!1sen!2sin!4v1737554223861!5m2!1sen!2sin" style={{ filter: 'grayscale(1) contrast(1.2) opacity: 0.4' }}></iframe>
                        
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">D-15(B) Old Jawahar Nagar, KOTA-324005, RAJASTHAN</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">codewithgovind24@email.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+91 9660837005</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Get in touch with us – we're here to help with all your shopping needs. Whether you have a question or need assistance, our team is ready to assist you in any way possible.</p>
                        <div className="relative mb-4">
                            <label for="username" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="username " name="username" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={contactData.username} onChange={handleContact} />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={contactData.email} onChange={handleContact} />
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={contactData.message} onChange={handleContact}></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleContactSubmit}>Submit</button>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs