import React from 'react';
import expe from '../../assets/expricences.png'
import Btn from '../../components/Btn';
const Expriences = () => {
    return (
        <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
            <div className='md:w-1/2 md:h-[541px]'>
                <img src={expe} alt="" className='h-full w-full'/>
            </div>
            <div className='md:w-1/2 mx-auto'>
                <h3 className='uppercase text-lg font-semibold text-primary mb-4'>Exprinces</h3>
                <h2 className='capitalize text-4xl font-bold md:w-1/2'>We provide you the best exprience</h2>
                <p className='text-secondaty mb-5 lg:h-2/3 mt-4'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit doloribus et ipsa sed, dolor totam cupiditate repellat. Fugiat qui, unde aperiam veniam reiciendis consectetur natus illum odio ratione, ad hic?
                </p>
                <Btn text='
                more info'/>
            </div>
        </section>
    );
};

export default Expriences;