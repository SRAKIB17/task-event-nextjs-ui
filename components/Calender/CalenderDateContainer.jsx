import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Calendar from '../Event/Calendar';
import Chevron_right from '../Event/Chevron_right';
import Location from '../Event/Location';
import { gridArray } from './constant';
import Plus_increase_zoom_add_new from './Plus_increase_zoom_add_new';

const CalenderDateContainer = ({ year, month, setShowModal, allNoteTask }) => {
    const [date, setDate] = useState(1);
    const getFullDate = new Date(year, month, date);
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const startIndex = getFullDate.getDay()
    const endIndex = new Date(year, month, 0)?.getDate() + startIndex


    return (
        <>
            {
                gridArray.map((date, i) =>
                    i >= startIndex && i < endIndex ?
                        <SpecificNote
                            date={date}
                            month={month}
                            year={year}
                            startIndex={startIndex}
                            setShowModal={setShowModal}
                            allNoteTask={allNoteTask}
                            getFullDate={getFullDate}
                        />
                        :
                        <div className=''>

                        </div>
                )
            }
        </>
    );
};


const SpecificNote = ({ date, month, year, startIndex, setShowModal, allNoteTask, getFullDate }) => {

    const taskFor = date + month + year

    const filterTask = allNoteTask?.filter(d => d?.date == taskFor);

    const router = useRouter()
    return (
        <div
            className=' lg:h-20 border lg:w-24 md:w-20 md:h-20 sm:w-full sm:h-20 text-center border-primary rounded-md  '
        >

            <div
                className='bg-[#8456EC] text-white relative w-full cursor-pointer'
                onClick={() => setShowModal({
                    date: taskFor, full_date: getFullDate
                })}
            >
                {date - startIndex + 1}
                <div className='absolute top-1 right-1'>
                    <Plus_increase_zoom_add_new size='10' strokeColor='#CCB6FF' strokeWidth='10' />
                </div>

            </div>
            <div className={filterTask?.length ? 'hover:absolute hover:z-50 min-h-[200px] max-w-sm w-full hover:rounded-md hover:p-1' : ' '}>

                <div className='text-left pl-1 h-full relative  '>
                    {
                        filterTask?.map((data, i) => <div
                            key={i}

                            className='flex flex-col gap-1 rounded-md mt-1 text-xs lg:text-sm p-[2px] showDetails'
                            style={{ backgroundColor: data?.bg_color, color: data?.color }}
                        >
                            {
                                data?.title
                            }
                            <div className='taskDetails w-full p-4 flex flex-col gap-4'>
                                <div className='inline-flex w-full items-center'>
                                    <div>
                                        <div>
                                            <h1 className='text-xl font-extrabold'>
                                                {data?.title}
                                            </h1>
                                            <h5 className=''>
                                                Hosted by {" "}
                                                {
                                                    data?.name
                                                }
                                            </h5>
                                        </div>
                                    </div>
                                    <div className=' flex gap-1 items-center p-1'>

                                        <div>
                                            <Calendar size='20' />
                                        </div>
                                        <div>
                                            <h1 className='font-[700] leading-4 '>
                                                {Date(data?.full_date)}
                                            </h1>
                                            <h4 className='text-[#4F4F4F] flex items-center gap-2 justify-between'>
                                                {data?.time_from} - {data?.time_to}
                                                <button className='mr-5'>
                                                    <Chevron_right size='12' />
                                                </button>
                                            </h4>
                                        </div>

                                    </div>
                                    <div className=' flex gap-1 items-center w p-1'>

                                        <Location size='20' strokeWidth='1' strokeColor={data?.color} />
                                        {data?.location}
                                    </div>
                                    <div className='box_shadow p-1 rounded-md'>
                                        {
                                            data?.note
                                        }
                                    </div>
                                    <button className='btn btn-primary btn-xs text-white mt-2' onClick={() => router.push(data?.link)}>
                                        View Event
                                    </button>
                                </div>

                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    )
}
export default CalenderDateContainer;