import React from 'react';
import Pic4 from '../../../src/assets/logo/Pic4.png'
import { ImGift } from 'react-icons/im';
import OPI from '../../../src/assets/logo/OPI.webp'
const Category1 = () => {
    return (
        <div className='px-36 justify-between flex mt-20'>
            <div>
                <div className='absolute'>
                    <img className='w-96' src={Pic4} alt="" />
                </div>

                <div className='relative text-2xl'>
                    <div className='relative text-2xl p-4'><p> Our Top Most Products <br /> Check it now</p></div>

                    <button
                        className="mt-5 inline-flex items-center gap-2 rounded-md bg-green-500 px-5 py-2 m-4 text-white text-sm font-medium shadow-sm hover:bg-green-600 hover:cursor-pointer transition"
                        onClick={() => {

                        }}
                    >
                        Shop Now
                    </button>
                </div>

            </div>


            <div className='cards px-15 flex gap-15'>


                <div>

                    <p className='text-3xl font-medium text-gray-500'>Treading <span className='text-green-700'>Items</span></p>

                    <div className='border mt-5 rounded py-6 px-9 gap-2 border-gray-400 flex items-center font-medium'>
                        <img className='w-15 h-20' src={OPI} alt="" />
                        <div>
                            <p className='text-gray-800'>Healthy Nutmix, 200g Pack</p>
                            <p className='text-gray-800'>Driedfruit</p>
                            <p className='text-gray-800'>$42.00 <span className='line-through text-gray-400'>$45.00</span></p>
                        </div>
                    </div>

                    <div className='border mt-4 rounded py-6 px-9 gap-2 border-gray-400 flex items-center font-medium'>
                        <img className='w-15 h-20' src={OPI} alt="" />
                        <div>
                            <p className='text-gray-800'>Healthy Nutmix, 200g Pack</p>
                            <p className='text-gray-800'>Driedfruit</p>
                            <p className='text-gray-800'>$42.00 <span className='line-through text-gray-400'>$45.00</span></p>
                        </div>
                    </div>

                    <div className='border mt-4 rounded py-6 px-9 gap-2 border-gray-400 flex items-center font-medium'>
                        <img className='w-15 h-20' src={OPI} alt="" />
                        <div>
                            <p className='text-gray-800'>Healthy Nutmix, 200g Pack</p>
                            <p className='text-gray-800'>Driedfruit</p>
                            <p className='text-gray-800'>$42.00 <span className='line-through text-gray-400'>$45.00</span></p>
                        </div>
                    </div>


                </div>


                <div>
                    <p className='text-3xl font-medium text-gray-500'>Top <span className='text-green-700'>Rated</span></p>

                    <div className='border mt-4 rounded py-6 px-9 gap-2 border-gray-400 flex items-center font-medium'>
                        <img className='w-15 h-20' src={OPI} alt="" />
                        <div>
                            <p className='text-gray-800'>Healthy Nutmix, 200g Pack</p>
                            <p className='text-gray-800'>Driedfruit</p>
                            <p className='text-gray-800'>$42.00 <span className='line-through text-gray-400'>$45.00</span></p>
                        </div>
                    </div>

                    <div className='border mt-4 rounded py-6 px-9 gap-2 border-gray-400 flex items-center font-medium'>
                        <img className='w-15 h-20' src={OPI} alt="" />
                        <div>
                            <p className='text-gray-800'>Healthy Nutmix, 200g Pack</p>
                            <p className='text-gray-800'>Driedfruit</p>
                            <p className='text-gray-800'>$42.00 <span className='line-through text-gray-400'>$45.00</span></p>
                        </div>
                    </div>

                    <div className='border mt-4 rounded py-6 px-9 gap-2 border-gray-400 flex items-center font-medium'>
                        <img className='w-15 h-20' src={OPI} alt="" />
                        <div>
                            <p className='text-gray-800'>Healthy Nutmix, 200g Pack</p>
                            <p className='text-gray-800'>Driedfruit</p>
                            <p className='text-gray-800'>$42.00 <span className='line-through text-gray-400'>$45.00</span></p>
                        </div>
                    </div>
                </div>


                <div>
                    <p className='text-3xl font-medium text-gray-500'>Top <span className='text-green-700'>Selling</span></p>

                    <div className='border mt-4 rounded py-6 px-9 gap-2 border-gray-400 flex items-center font-medium'>
                        <img className='w-15 h-20' src={OPI} alt="" />
                        <div>
                            <p className='text-gray-800'>Healthy Nutmix, 200g Pack</p>
                            <p className='text-gray-800'>Driedfruit</p>
                            <p className='text-gray-800'>$42.00 <span className='line-through text-gray-400'>$45.00</span></p>
                        </div>
                    </div>

                    <div className='border mt-4 rounded py-6 px-9 gap-2 border-gray-400 flex items-center font-medium'>
                        <img className='w-15 h-20' src={OPI} alt="" />
                        <div>
                            <p className='text-gray-800'>Healthy Nutmix, 200g Pack</p>
                            <p className='text-gray-800'>Driedfruit</p>
                            <p className='text-gray-800'>$42.00 <span className='line-through text-gray-400'>$45.00</span></p>
                        </div>
                    </div>

                    <div className='border mt-4 rounded py-6 px-9 gap-2 border-gray-400 flex items-center font-medium'>
                        <img className='w-15 h-20' src={OPI} alt="" />
                        <div>
                            <p className='text-gray-800'>Healthy Nutmix, 200g Pack</p>
                            <p className='text-gray-800'>Driedfruit</p>
                            <p className='text-gray-800'>$42.00 <span className='line-through text-gray-400'>$45.00</span></p>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    );

};

export default Category1;