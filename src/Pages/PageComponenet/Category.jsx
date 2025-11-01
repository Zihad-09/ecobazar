import { TbTeapot } from "react-icons/tb";
import { BiCake } from "react-icons/bi";
import { GiFruitTree } from "react-icons/gi";



const Category = () => {
    return (
        <div className="flex px-36 justify-between mt-20">
           <div className="border-20
           border-gray-100 rounded-md bg-gray-200 px-15 items-center text-center flex flex-col "><TbTeapot size={100}/><h1>Dairy</h1><p>320  items</p></div>
           <div className="border-20 border-gray-100 rounded-md bg-gray-200 px-15 items-center text-center flex flex-col"><BiCake size={100}/><h1>Bakery</h1><p>48 items</p></div>
           <div className="border-20 border-gray-100 rounded-md bg-gray-200 px-15 items-center text-center flex flex-col"><GiFruitTree size={100}/><h1>Fruits</h1><p>320 items</p></div>
           <div className="border-20 border-gray-100 rounded-md bg-gray-200 px-15 items-center text-center flex flex-col"><TbTeapot size={100}/><h1>Dairy</h1><p>60 items</p></div>
           <div className="border-20 border-gray-100 rounded-md bg-gray-200 px-15 items-center text-center flex flex-col"><BiCake size={100}/><h1>Bakery</h1><p>520 items</p></div>
           <div className="border-20 border-gray-100 rounded-md bg-gray-200 px-15 items-center text-center flex flex-col"><GiFruitTree size={100}/><h1>Fruits</h1><p>320 items</p></div>
        </div>
    );
};

export default Category;