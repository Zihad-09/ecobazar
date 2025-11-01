
function Hero() {

  return (
    <div className="flex justify-between px-35 items-center border border-gray-300 p-2">

      {/* Categories Section */}
      <div className="relative group"> {/* group diye hover parent banaisi */}
        <button
          className="bg-[#5caf90] text-white font-semibold py-3 px-9 rounded"
        >
          <h1>ALL Categories</h1>
        </button>

        {/* Hidden by default, show on hover of parent (.group) */}
        <div className="absolute left-0 top-full mt-2 bg-gray-50 border border-gray-200 rounded w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-10">
          <ul className="divide-y divide-gray-200">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dairy</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Bakery</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fruits</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Juice</li>
          </ul>
        </div>
      </div>

      {/* Navigation Links */}
      <div className='flex gap-5 font-semibold text-gray-500 text-xl'>
        <p className='hover:text-[#5caf90] cursor-pointer'>Home</p>
        <p className='hover:text-[#5caf90] cursor-pointer'>Categories</p>
        <p className='hover:text-[#5caf90] cursor-pointer'>Product</p>
        <p className='hover:text-[#5caf90] cursor-pointer'>Blog</p>
        <p className='hover:text-[#5caf90] cursor-pointer'>Pages</p>
      </div>

      {/* Cities Section */}
      <div className="relative group">
        <button
          className="bg-[#5caf90] text-white font-semibold py-3 px-9 rounded"
        >
          <h1>New York</h1>
        </button>

        <div className="absolute right-0 top-full mt-2 bg-gray-50 border border-gray-200 rounded w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-10">
          <ul className="divide-y divide-gray-200 ">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dhaka</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delhi</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">California</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Chittagon</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Feni</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Hero;
