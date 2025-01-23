import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/Services/Services";
import Gallery from "../../components/Gallery/Gallery";
import PopularProduct from "../../components/PopulorProduct/PopularProduct";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = ({AddToCart}) => {
    return (
        <>
            <div>
                <HeroSection/>
                <Services/>
                <Gallery/>
                <PopularProduct AddToCart={AddToCart} />
                <Testimonials/>
            </div>
        </>
    )
}

export default Home;