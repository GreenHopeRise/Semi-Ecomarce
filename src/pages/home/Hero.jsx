import React from 'react';
import bannerImg from '../../assets/banner.png'
import { FaSearch } from 'react-icons/fa';
const Hero = () => {
    return (
        <section className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage: `url(${bannerImg})`}}>
            
            <div className='px-2 md:pt-44 pt-24 text-center space-y-6 md:w-1/2 mx-auto '>
                <h1 className=' text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug'>Make your interior more minimalistic & modern</h1>
                <p className='text-xl font-normal lg:w-1/2 mx-auto'>turn your room with panto into a lot more minimalist and modern wth ease and speen</p>


                {/* search field  */}
                <div className='relative inline-block z-30'>
                    <input type="text" 
                    placeholder='Search furniture'
                    className='w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 text-white placeholder:text-white focus:outline-none' />
                    <div className='absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary rounded-full cursor-pointer p-2'>
                        <FaSearch/>
                    </div>
                </div>
            </div>
            {/* bottom blur effect  */}
            <div className="absolute inset-x-0 -mb-2 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>


            {/* hover button for displaying tooltop box  */}
            <div className='absolute bottom-40 left-24 group'>
                <button className='relative p-4 bg-white/35 rounded-full  border-1  text-xl'>
                 <div className='hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-1 rounded-lg bg-white/25 shadow-md group-hover:flex gap-2'>
                    <div className='size-6 bg-red-700 border-white rounded-full' />
                    <div className='size-6 bg-green-700 border-white rounded-full' />
                    <div className='size-6 bg-blue-700 border-white rounded-full' />
                 </div>

                

                </button>
            </div>

        </section>
    );
};

export default Hero;