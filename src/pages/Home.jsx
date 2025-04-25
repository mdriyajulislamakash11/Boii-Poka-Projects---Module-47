import React from 'react';
import Banner from '../layouts/Banner';
import Books from './Books';

const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner />
            
            <h2 className='text-3xl text-center font-semibold my-11'>Books</h2>

            <Books />
        </div>
    );
};

export default Home;