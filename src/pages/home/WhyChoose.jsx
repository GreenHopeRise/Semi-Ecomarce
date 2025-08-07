import React from 'react';
import Btn from '../../components/Btn';

const WhyChoose = () => {
    return (
        <section className='section-container'>
            <div className='my-24 grid  sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:grid-cols-2'>
                <div>
                    <h2 className='text-4xl font-bold'>Why <br /> Choosing Us</h2>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
                    <p  className='text-base mb-2'>the advantage of hiring a workspace with us is that givees you comfortable service and all-arround facilities.</p>
                    <Btn text='learn more'/>

                </div>
                <div>
                    <h3 className='text-2xl font-semibold mb-3'>Affordable Price</h3>
                    <p  className='text-base mb-2'>the advantage of hiring a workspace with us is that givees you comfortable service and all-arround facilities.</p>
                    <Btn text='learn more'/>

                </div>
                <div>
                    <h3 className='text-2xl font-semibold mb-3'>Many choice</h3>
                    <p  className='text-base mb-2'>the advantage of hiring a workspace with us is that givees you comfortable service and all-arround facilities.</p>
                    <Btn text='learn more'/>

                </div>

            </div>
        </section>
    );
};

export default WhyChoose;