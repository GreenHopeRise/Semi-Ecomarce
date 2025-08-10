import React from 'react';
import { getIMGURL } from '../../utils/getimageURL';
import Rating from '../../components/Rating';
import { FiPlus } from 'react-icons/fi';

const ProductCard = ({product}) => {
    return (
        <div className=''>
            <div className='bg-[#fafafa]'>
                <img src={getIMGURL(`${product.imageUrl}`)} alt="" />
            </div>
            
            <div className={`p-6  bg-white shadow-sm dark:bg`}>
                <h4 className='text-base mb-1'>{product.category}</h4>
                <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
                <Rating rating={product.rating}/>
                <div className='mt-5 flex justify-between items-center'>
                    <p className='font '><sup>$</sup> <span>{product.price}</span></p>
                    <button className='bg-Secondary text-white p-2 rounded-full hover:bg-black/65'><FiPlus/></button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;