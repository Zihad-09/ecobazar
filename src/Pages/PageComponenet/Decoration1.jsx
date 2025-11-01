import React from 'react';
import Pic2 from '../../../src/assets/logo/Pic2.png'
import Pic3 from '../../../src/assets/logo/Pic3.png'

const Decoration1 = () => {
    return (
        <div>
            <div className='flex px-36 justify-between mt-20 '>
                <img src={Pic2} alt="" />
                <img src={Pic3} alt="" />
            </div>
        </div>
    );
};

export default Decoration1;