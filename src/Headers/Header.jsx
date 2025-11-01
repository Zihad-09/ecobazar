import React from 'react';
import mainlogo from '../assets/logo/mainlogo.png'
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div >
        <div className='flex justify-between px-10 bg-[#262626] py-3'>
          <img className='rounded h-9' src={mainlogo} alt="" />
          <div className='btn bg-[#82b440]'>Buy Now</div>
        </div>
        <div className='flex items-center justify-between px-36 bg-[#f8f8fb] py-2'>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-1'>
              <IoIosCall />
              <p>0123456789</p>
            </div>
            <div className='flex items-center gap-1'>
              <FaWhatsapp />
              <p>1234567890</p>
            </div>
          </div>

          <p>World's first ecommarce shopping</p>

          <div className='flex items-center gap-4'>
            <p>Help</p>
            <p>Help</p>
            <p>Help</p>
            <p>Help</p>
          </div>
        </div>

        <div className='flex justify-between px-36 py-6 items-center bg-[#f8f8fb]'>
          <div><img className='h-9' src={mainlogo} alt="" /></div>
          <div>
            <div class="w-full max-w-md px-4">
              <form action="/search" method="GET" class="relative">
                <input
                  type="text"
                  name="q"
                  placeholder="Search..."
                  class="w-full py-3 pl-4 pr-25 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4 text-gray-500 hover:text-gray-700">
                  🔍
                </button>
              </form>
            </div>
          </div>

          <div className='flex gap-5'>
            <div className='flex items-center gap-5'>  <IoIosContact size={35} /> <div className=''><p>Account</p> <p>LOGIN</p></div> </div>
            <div className='flex items-center gap-5'>  <CiHeart size={35} /> <div className=''><p>Wishlist</p> <p>ITEMS</p></div> </div>
            <div className='flex items-center gap-5'> <CiShoppingCart size={35} /> <div className=''> <p>Cart</p> <p>ITEMS</p></div> </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;