import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from '../shop/Products';
import Expriences from './Expriences';

const Home = () => {
    return (
        <>
            <Hero/>
            <WhyChoose/>
            <Products headLine="Best selling product"/>
            <Expriences/>
        </>
    );
};

export default Home;