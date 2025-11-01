import Pic5 from '../../../src/assets/logo/Pic5.jpg'
import Pic6 from '../../../src/assets/logo/Pic6.jpg'
const Latestproduct = () => {
    return (
        <div>
            <div className='px-36 flex justify-between'>

                <div>

                    <h1 className='text-gray-700 text-4xl font-semibold mt-10'>Latest <span className='text-green-700'>Blog</span></h1>
                    <p className='text-gray-500 mt-2'>We takle interesting topics every day in 2023</p>

                    <img className='h-60 rounded-md w-70 mt-9' src={Pic5} alt=""/>
                    <p className='text-gray-400'>June 30,2022-Organic</p>
                    <p className='font-medium text-lg hover:cursor-pointer'>Marketing guide:5 Steps to <br />Success to way.</p>
                    <p className='text-gray-400 hover:cursor-pointer'>Read more</p>
                </div>

                <div>
                    <img className='h-60 rounded-md w-70 mt-37' src={Pic6} alt=""/>
                    <p className='text-gray-400'>June 30,2022-Organic</p>
                    <p className='font-medium text-lg hover:cursor-pointer'>Marketing guide:5 Steps to <br />Success to way.</p>
                    <p className='text-gray-400 hover:cursor-pointer'>Read more</p>
                </div>

                <div>
                    <img className='h-60 rounded-md w-70 mt-37' src={Pic5} alt=""/>
                    <p className='text-gray-400'>June 30,2022-Organic</p>
                    <p className='font-medium text-lg hover:cursor-pointer'>Marketing guide:5 Steps to <br />Success to way.</p>
                    <p className='text-gray-400 hover:cursor-pointer'>Read more</p>
                </div>

                <div>
                    <img className='h-60 rounded-md w-70 mt-37' src={Pic6} alt=""/>
                    <p className='text-gray-400'>June 30,2022-Organic</p>
                    <p className='font-medium text-lg hover:cursor-pointer'>Marketing guide:5 Steps to <br />Success to way.</p>
                    <p className='text-gray-400 hover:cursor-pointer'>Read more</p>
                </div>

                <div>
                    <img className='h-60 rounded-md w-70 mt-37' src={Pic5} alt=""/>
                    <p className='text-gray-400'>June 30,2022-Organic</p>
                    <p className='font-medium text-lg hover:cursor-pointer'>Marketing guide:5 Steps to <br />Success to way.</p>
                    <p className='text-gray-400 hover:cursor-pointer'>Read more</p>
                </div>
            </div>
        </div>
    );
};

export default Latestproduct;