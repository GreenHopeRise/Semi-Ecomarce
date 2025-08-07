import React from 'react';
import bannerImg from '../../assets/banner.png'
const Shop = () => {
    return (
        <section className='min-h-screen'>
            {/* banner content  */}
            <div className='w-full h-[400px] bg-cover bg-center' style={{backgroundImage: `url(${bannerImg})`}}>
                <h1>Shop our Prodect</h1>

            </div>
        </section>
    );
};

export default Shop;