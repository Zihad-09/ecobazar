
import Screenshot1 from '../../../src/assets/logo/Screenshot1.png'
import download1 from '../../../src/assets/logo/download1.png'
// import download from '../../assets/logo/download.webp'
import Downloadbb from '../../../src/assets/logo/Downloadbb.png'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";


const Footer = () => {
    return (
        <div>
           <div className='flex px-36 justify-between mt-9'>
             <div>
                <img src={Screenshot1} alt="" />
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Et ullam officiis quas qui eius voluptas .</p>
                <div className='flex items-center mt-4'>
                <img  className='h-10 w-20 hover:cursor-pointer'src={download1} alt="" /></div>
               
             </div>

                <div className='font-medium'>
                   <div className='text-xl font-semibold'> <h1>Category</h1></div>
                   <p className='border mt-5 mb-5'></p>
                    <p>Dairy</p>
                    <p>Bakery</p>
                    <p>Fruits</p>
                    <p>Juice</p>
                    <p>Bakery</p>
                    <p>Fruits</p>
                </div>

                 <div className='font-medium'>
                    <div className='text-xl font-semibold'><h1>Company</h1></div>
                    <p className='border mt-5 mb-5'></p>
                    <p>Dairy</p>
                    <p>Bakery</p>
                    <p>Fruits</p>
                    <p>Juice</p>
                    <p>Bakery</p>
                    <p>Fruits</p>
                </div>

                 <div className='font-medium'>
                 <div  className='text-xl font-semibold'><h1>Account</h1></div>
                    <p className='border mt-5 mb-5'></p>
                    <p>Dairy</p>
                    <p>Bakery</p>
                    <p>Fruits</p>
                    <p>Juice</p>
                    <p>Bakery</p>
                    <p>Fruits</p>
                </div>

                 <div className='font-medium mb-10'>
                  <div  className='text-xl font-semibold'><h1>Contact</h1></div>
                    <p className='border mt-5 mb-5'></p>
                    <p className='flex items-center gap-2'> <FaLocationDot /> 2435 Boarddus Maple Court, <br /> Madisonville ky 4783,USA</p>
                    <p className='flex items-center gap-2 mt-2'> <IoCallOutline />0123456789</p>
                    <p className='flex items-center gap-2 mt-2'><MdOutlineEmail />example@gmail.com</p>
                    <p  className='flex items-center gap-2 mt-2'><CiFacebook /> <CiTwitter /> <CiLinkedin /> <CiInstagram /></p>
                </div>

           </div>

                <div> 
                    <p>Copyright by envatomarket,All right reserved.Powered by Grabit</p>
                    <p><img src={Downloadbb} alt="" /></p>
                </div>

        </div>
    );
};

export default Footer;