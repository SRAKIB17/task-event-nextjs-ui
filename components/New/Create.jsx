/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Calender from '../Calender/Calender';

const Create = () => {
    return (
        <div className='min-h-screen flex items-center justify-center md:pl-4 md:pr-4 p-4'>
            <div className='sm:hidden md:block w-[165px] h-[292px] mx-auto md:w-[311px] md:h-[548px] lg:w-[440px] lg:h-[775px] lg:mb-[104px] lg:ml-[170px]  lg:mt-[100px]'>
                <img src="/Landing page image.svg" alt="" className='w-full h-full' />
            </div>
            <div className='w-full md:w-auto'>
                <h1 className='text-center text-3xl font-extrabold text-primary'>
                    Create Event
                </h1>
                <Calender />
            </div>
        </div>
    );
};

export default Create;