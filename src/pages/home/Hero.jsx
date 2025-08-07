import React from 'react';
import bannerImg from '../../assets/banner.png'
const Hero = () => {
    return (
        <section className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage: `url(${bannerImg})`}}>
            
            <div>
                <h1>Make your interior more minimalistic & modern</h1>
                <P>turn your room with panto into a lot more minimalist and modern wth ease and speen</P>
            </div>

        </section>
    );
};

export default Hero;