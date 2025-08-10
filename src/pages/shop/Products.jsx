import React, { useState } from "react";
import { products } from "../../utils/Products";
import ProductCard from "./ProductCard";

const Products = ({ headLine }) => {
    const catagories = ["Chair", "Beds", "Sofa", "Lamp"];
    const [select, setSelect] = useState("Chair");
    const [visibleProduct, setVisibleProduct] = useState(4);
    const filterProducts = products.filter(
        (product) => product.category === select
    );

    const loadMoreProduct = () => {
        setVisibleProduct((prev) => prev + 4);
    };
    return (
        <div className="section-container">
            <div className="">
                <h2 className="text-4xl font-bold text-center my-8">
                    {headLine}
                </h2>
                {/* Catagory tabs */}
                <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
                    <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
                        {catagories.map((catagory, index) => (
                            <button
                                onClick={() => {
                                    setSelect(catagory);
                                    setVisibleProduct(4)

                                }}
                                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${
                                    select === catagory
                                        ? "bg-white text-black"
                                        : ""
                                }`}
                                key={index}
                            >
                                {catagory}
                            </button>
                        ))}
                    </div>
                </div >
                {/* product grid  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-1  items-center justify-around  ">
                    {filterProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                {/* doad more btn  */}
                
            </div>
        </div>
    );
};

export default Products;
