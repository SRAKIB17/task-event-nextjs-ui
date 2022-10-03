import React from 'react';
import Footer from '../components/ForMobileView/Footer';
import Create from '../components/New/Create';

const create = () => {
    return (
        <div>
            <Create />
            <div className='lg:hidden'>
                <Footer />
            </div>
        </div>
    );
};

export default create;