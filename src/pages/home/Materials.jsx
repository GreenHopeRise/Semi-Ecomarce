import React from 'react';
import m1 from '../../assets/material1.png'
import m2 from '../../assets/material2.png'
import m3 from '../../assets/material3.png'
import Btn from '../../components/Btn';
const Materials = () => {
    return (
        <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
            
            <div className='md:w-1/2 mx-auto'>
                <h3 className='uppercase text-lg font-semibold text-primary mb-4'>Materials</h3>
                <h2 className='capitalize text-4xl font-bold md:w-1/2'>Very Serious Materials for making Furniture</h2>
                <p className='text-secondaty mb-5 lg:h-1/2 mt-4'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit doloribus et ipsa sed, dolor totam cupiditate repellat. Fugiat qui, unde aperiam veniam reiciendis consectetur natus illum odio ratione, ad hic?
                </p>
                <Btn text='
                more info'/>
            </div>
            <div className='md:w-1/2 grid grid-cols-2 md:items-end items-center'>
                <div>
                    <img src={m1}alt="" />
                    <img src={m2}alt="" />
                </div>
                    <img src={m3}alt="" className='w-full md:h-[541px]' />
                <div>

                </div>
            </div>
        </section>
    );
};

export default Materials;