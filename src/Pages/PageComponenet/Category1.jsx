import React from 'react';
import Pic4 from '../../../src/assets/logo/Pic4.png'
import { ImGift } from 'react-icons/im';
import OPI from '../../../src/assets/logo/OPI.webp'
const Category1 = () => {
    return (
        <div className="px-36 justify-between items-stretch flex mt-20">
            {/* LEFT SIDE */}
            <div className="relative w-1/3 flex flex-col justify-center items-start">
                {/* Background image */}
                <img
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    src={Pic4}
                    alt="Top Product"
                />

                {/* Overlay text at top */}
                <div className="relative z-10 w-full h-full flex flex-col text-white  rounded-lg p-6">
                    {/* Text top e */}
                    <div className="text-3xl font-semibold">
                        <p>Our Top Most Products</p>
                        <p>Check it now</p>
                    </div>

                    {/* Button niche */}
                    <div>
                        <button
                            className="mt-5 inline-flex items-center gap-2 rounded-md bg-green-500 px-6 py-3 text-white text-sm font-medium shadow-md hover:bg-green-600 transition-all duration-300"
                            onClick={() => { }}
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="cards px-10 flex gap-10 w-2/3 justify-between">
                {/* Treading Items */}
                <div>
                    <p className="text-3xl font-medium text-gray-500">
                        Treading <span className="text-green-700">Items</span>
                    </p>

                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            className="border mt-4 rounded py-6 px-9 gap-4 border-gray-300 flex items-center font-medium hover:shadow-md transition"
                        >
                            <img className="w-16 h-20" src={OPI} alt="" />
                            <div>
                                <p className="text-gray-800">Healthy Nutmix, 200g Pack</p>
                                <p className="text-gray-800">Driedfruit</p>
                                <p className="text-gray-800">
                                    $42.00{" "}
                                    <span className="line-through text-gray-400">$45.00</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Top Rated */}
                <div>
                    <p className="text-3xl font-medium text-gray-500">
                        Top <span className="text-green-700">Rated</span>
                    </p>

                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            className="border mt-4 rounded py-6 px-9 gap-4 border-gray-300 flex items-center font-medium hover:shadow-md transition"
                        >
                            <img className="w-16 h-20" src={OPI} alt="" />
                            <div>
                                <p className="text-gray-800">Healthy Nutmix, 200g Pack</p>
                                <p className="text-gray-800">Driedfruit</p>
                                <p className="text-gray-800">
                                    $42.00{" "}
                                    <span className="line-through text-gray-400">$45.00</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Top Selling */}
                <div>
                    <p className="text-3xl font-medium text-gray-500">
                        Top <span className="text-green-700">Selling</span>
                    </p>

                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            className="border mt-4 rounded py-6 px-9 gap-4 border-gray-300 flex items-center font-medium hover:shadow-md transition"
                        >
                            <img className="w-16 h-20" src={OPI} alt="" />
                            <div>
                                <p className="text-gray-800">Healthy Nutmix, 200g Pack</p>
                                <p className="text-gray-800">Driedfruit</p>
                                <p className="text-gray-800">
                                    $42.00{" "}
                                    <span className="line-through text-gray-400">$45.00</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );

};

export default Category1;