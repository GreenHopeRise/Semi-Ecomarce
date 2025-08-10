import React from 'react';
import expe from '../../assets/expricences.png'
const Expriences = () => {
    return (
        <section className='section-container my-24'>
            <div className='md:w-1/2 md:h-[541px]'>
                <img src={expe} alt="" className='h-full w-full'/>
            </div>
            <div>
                <h3 className='uppercase text-lg font-semibold text-primary mb-4'>Exprinces</h3>
                <h2 className='capitalize'>We provide you the best exprience</h2>
            </div>
        </section>
    );
};

export default Expriences;