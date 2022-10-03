import React from 'react';
import { weekArray } from './constant';

const CalenderWeekContainer = () => {
    return (
        <>
            {
                weekArray.map((data, i) =>
                    <div className='m-1 border h-8 text-center bg-primary text-white p-1  rounded-md' key={i
                    }>
                        {data}
                    </div>
                )
            }
        </>

    );
};

export default CalenderWeekContainer;