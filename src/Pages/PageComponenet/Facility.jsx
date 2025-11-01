import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";   
import { FaRegMoneyBillAlt } from "react-icons/fa"; 





const Facility = () => {
    return (
        <div>
            <div className='flex px-36 justify-between gap-4 mt-15'>
                <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md text-center max-w-sm mx-auto">

                    <div className="bg-green-100 p-3 rounded-full mb-4">
                        <CiDeliveryTruck  className="w-8 h-8 text-green-600" />
                    </div>


                    <h2 className="text-xl font-semibold text-gray-600 mb-2">
                        Free Shipping
                    </h2>


                    <p className="text-gray-500 text-sm">
                        Free shipping on all US orders or orders above $200
                    </p>
                </div>

              <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md text-center max-w-sm mx-auto">

                    <div className="bg-green-100 p-3 rounded-full mb-4">
                        <FaHandHoldingHeart  className="w-8 h-8 text-green-600" />
                    </div>


                    <h2 className="text-xl font-semibold text-gray-600 mb-2">
                        Free Shipping
                    </h2>


                    <p className="text-gray-500 text-sm">
                        Free shipping on all US orders or orders above $200
                    </p>
                </div>

              <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md text-center max-w-sm mx-auto">

                    <div className="bg-green-100 p-3 rounded-full mb-4">
                        <FaLeaf  className="w-8 h-8 text-green-600" />
                    </div>


                    <h2 className="text-xl font-semibold text-gray-600 mb-2">
                        Free Shipping
                    </h2>


                    <p className="text-gray-500 text-sm">
                        Free shipping on all US orders or orders above $200
                    </p>
                </div>

              <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md text-center max-w-sm mx-auto">

                    <div className="bg-green-100 p-3 rounded-full mb-4">
                        <FaRegMoneyBillAlt  className="w-8 h-8 text-green-600" />
                    </div>


                    <h2 className="text-xl font-semibold text-gray-600 mb-2">
                        Free Shipping
                    </h2>


                    <p className="text-gray-500 text-sm">
                        Free shipping on all US orders or orders above $200
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Facility;