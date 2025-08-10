import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from '../shop/Products';
import Expriences from './Expriences';
import Materials from './Materials';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <>
            <Hero/>
            <WhyChoose/>
            <Products headLine="Best selling product"/>
            <Expriences/>
            <Materials/>
            <Testimonials/>
        </>
    );
};

export default Home;