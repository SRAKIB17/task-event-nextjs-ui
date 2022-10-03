import React from 'react';
import Chevron_right from '../Event/Chevron_right';
import Refresh from './Refresh';

const Footer = () => {
    return (
        <div className='flex flex-col items-center border border-[#E5E5E5] pt-2 bg-[#F9F8F9]'>
            <div className='w-[331px] h-[44px] flex items-center bg-[#E5E5E5] pl-3 pr-3 rounded-[12px]'>
                <img src="/aA.svg" alt="" />
                <input type="text" className='w-full h-full bg-transparent input focus:outline-none' />
                <Refresh className="text-primary " size='25' />
            </div>
            <div className='w-[331px] mt-[13px]'>
                <div className='flex w-full justify-between'>
                    <div>
                        <Chevron_right size='25' strokeWidth='3' className="rotate-180" />
                    </div>
                    <div>
                        <Chevron_right size='25' strokeWidth='3' />
                    </div>
                    <div>
                        <img src="/up.svg" alt="" />
                    </div>
                    <div>
                        <img src="/book.svg" alt="" />
                    </div>
                    <div>
                        <img src="/copy.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[133px] h-1 mb-1 mt-3 bg-black rounded-md'>

            </div>
        </div>
    );
};

export default Footer;