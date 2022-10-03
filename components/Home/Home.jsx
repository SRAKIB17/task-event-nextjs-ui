/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../ForMobileView/Footer';

const Home = () => {
    const router = useRouter()

    return (
        <div className=' min-h-screen lg:h-full'>

            <div className='lg:flex lg:flex-row-reverse w-full lg:items-center lg:justify-between'>
                <div className='lg:w-[50%]'>

                    <div className='mb-9 md:pt-[60px]'>
                        <h1 className=' text-[36px] font-[700] leading-[36px] flex flex-col items-center gap-1 md:text-[64px] md:leading-[74px] lg:items-end lg:mr-[160px]'>
                            <span>
                                Imagine if
                            </span>
                            <span
                                className='snapchatGrad md:text-[64px] leading-[74px]'
                            >
                                Snapchat
                            </span>
                            <span>
                                had events.
                            </span>
                        </h1>
                    </div>
                    <div className='w-[321px]  h-9 mb-9 font-normal top-0 text-[16px] mx-auto text-[#4F4F4F] md:w-[521px] md:mb-[55px] lg:text-right lg:mr-[160px]'>
                        <p className='text-center leading-[18px] md:leading-[28px] md:text-2xl lg:text-right'>
                            Easily host and share events with your friends across any social media.
                        </p>
                    </div>


                    <div className='flex items-center relative top-[400px] md:top-[650px]  justify-center md:mt-[52px] mt-[34px] lg:ml-[160px] lg:relative lg:top-0'>
                        <button className='btn button md:w-[320px] md:h-[55px] text-white' onClick={()=>router.replace('/create')} >
                            🎉 Create my event
                        </button>
                    </div>
                </div>
                <div className='w-[165px] h-[292px] mx-auto md:w-[311px] md:h-[548px] lg:w-[440px] lg:h-[775px] lg:mb-[104px] lg:ml-[170px]  lg:mt-[100px]'>
                    <img src="/Landing page image.svg" alt="" className='w-full h-full' />
                </div>
            </div>
            <div className='mt-32 lg:hidden'>
                <Footer />{/*  */}
            </div>
        </div>
    );
};


export default Home;