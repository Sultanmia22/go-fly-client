import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div>
            <Banner />

            <div className='text-center text-2xl font-semibold text-secondary'>
                <TypeAnimation
                  
                    sequence={['Others Feature', 500, 'Comming Soon...',500]}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </div>
        </div>
    );
};

export default Home;