/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Footer from '../ForMobileView/Footer';
import Calendar from './Calendar';
import Chevron_right from './Chevron_right';
import Location from './location';

const Event = () => {
    return (
        <div className='min-h-screen'>
            <div className='w-full md:w-[593px] md:mx-auto lg:flex lg:flex-row-reverse lg:w-full lg:justify-between lg:pr-[240px] lg:pl-[240px] lg:items-center overflow-hidden'>
                <div className='lg:w-[50%]'>
                    <div className='md:pt-[88px] lg:w-[500px] lg:h-[500px]'>
                        <img src="Birthday cake.png" alt="" className='w-full h-full' />
                    </div>
                </div>

                <div className='ml-5 lg:ml-0 '>
                    <div className=' mt-[11px] mb-8'>
                        <h1 className='text-[28px] text-primary font-[700]'>
                            Birthday Bash
                        </h1>
                        <h5 className='text-[#828282]'>
                            Hosted by Elysia
                        </h5>
                    </div>


                    
                    <div className='flex flex-col gap-4'>
                        <div className='text-primary flex gap-5 items-center'>
                            <span className='box_shadow h-12 w-14  flex items-center justify-center rounded-md'>
                                <Calendar size='20' />
                            </span>
                            <span className='w-full'>
                                <h1 className='font-[700] leading-4 '>
                                    18 August 6:00PM
                                </h1>
                                <h4 className='text-[#4F4F4F] flex items-center gap-2 justify-between'>
                                    to 19 August 1:00PM UTC +10
                                    <button className='mr-5'>
                                        <Chevron_right size='12' />
                                    </button>
                                </h4>
                            </span>
                        </div>

                        <div className='flex gap-5 items-center w-full'>
                            <span className='box_shadow h-12 w-14  flex items-center justify-center rounded-md'>
                                <Location size='20' strokeWidth='1' strokeColor='#240D57' />
                            </span>
                            <span className='w-full'>
                                <h1 className='font-[700] leading-4'>
                                    Street name
                                </h1>
                                <h4 className='text-[#4F4F4F] w-full flex gap-2 items-center justify-between'>
                                    <span>
                                        Suburb, State, Postcode
                                    </span>
                                    <button className='mr-5'>
                                        <Chevron_right size='12' />
                                    </button>
                                </h4>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[90px] lg:hidden'>
                <Footer />
            </div>
        </div >
    );
};

export default Event;