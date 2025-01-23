import React from 'react';
import men1 from '../../assets/GalleryImages/men-1.jpg';
import men2 from '../../assets/GalleryImages/men-2.jpg';
import men3 from '../../assets/GalleryImages/men-3.jpg';
import women1 from '../../assets/GalleryImages/women-1.jpg';
import women2 from '../../assets/GalleryImages/women-2.jpg';
import women3 from '../../assets/GalleryImages/women-3.jpg';

function Gallery() {
  return (
    <>
    
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto flex flex-wrap">
            <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500" src={women1} />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500" src={women2} />
                    </div>
                    <div className="md:p-2 p-1 w-full">
                        <img alt="gallery" className="w-full h-full object-cover object-center block shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500" src={women3} />
                    </div>
                </div>
                
                <div className="flex flex-wrap w-1/2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <div className="md:p-2 p-1 w-full">
                        <img alt="gallery" className="w-full h-full object-cover object-center block shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500" src={men1} />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500" src={men2} />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500" src={men3} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Gallery