import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-secondaty-bg text-black pt-20 pb-5">
            <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-center justify-around">
                {/* logo */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">
                        <Link to="/">Panto</Link>
                    </h2>
                    <p className="mr-12 text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem similique unde soluta quos facere expedita porro
                        vero cupiditate iusto beatae!
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Services</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link className="hover:text-primary" to="/">
                                Email Marketing
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary" to="/">
                                Camping
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary" to="/">
                                Branding
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Furniture</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link className="hover:text-primary" to="/">
                                Beds
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary" to="/">
                                Sofa
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary" to="/">
                                All
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Follow us</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link className="hover:text-primary flex items-center gap-2" to="/">
                                <FaFacebookF />
                                <span>facebook</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary flex items-center gap-2" to="/">
                                <FaTwitter />
                                <span>twitter</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary flex items-center gap-2" to="/">
                                <FaInstagram />
                                <span>Instagram</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            
        </footer>
    );
};

export default Footer;
