import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AddNote from './AddNote';
import CalenderDateContainer from './CalenderDateContainer';
import CalenderWeekContainer from './CalenderWeekContainer';
import SelectYearMonth from './SelectYearMonth';
const Calender = () => {
    const [selectYear, setSelectYear] = useState('2022');
    const [selectMonth, setSelectMonth] = useState('0');

    const [modal, setShowModal] = useState(null);

    const [allNoteTask, setNoteTask] = useState([])
    useEffect(() => {
        const noteDB = JSON.parse(localStorage.getItem('event'))
        setNoteTask(noteDB)

    }, [])
    
    const router = useRouter();
    const [thumbnail, setThumbnail] = useState('')
    console.log(thumbnail)
    const AddTaskHandle = e => {
        e.preventDefault();

        const title = e.target.title.value;
        const name = e.target.name.value;
        const location = e.target.location.value;
        const link = e.target.link.value;
        const bg_color = e.target.bg_color.value
        const color = e.target.color.value
        const time_from = e.target.time_from.value
        const time_to = e.target.time_to.value;
        const note = e.target.note.value;
        if (time_from == time_to) {
            alert('Date is same')
        }
        else {


            const noteDB = JSON.parse(localStorage.getItem('event'))
            const noteTask = {
                id: noteDB?.length || 1,
                thumbnail,
                title, color, bg_color, location, name, link, time_from, time_to, note, date: modal?.date, full_date: modal?.full_date
            }
            if (noteDB) {
                localStorage.setItem('event', JSON.stringify([...allNoteTask, noteTask]));
                setNoteTask([...allNoteTask, noteTask])
                router.replace(`/event?date=${modal?.date}&id=${noteDB?.length || 1}`)
                setShowModal(null);
            }
            else {
                setNoteTask([noteTask])
                localStorage.setItem('event', JSON.stringify([noteTask]));
                router.replace(`/event?date=${modal?.date}&id=${noteDB?.length || 1}`)
                setShowModal(null);
            }
        }
    }

    return (
        <div className=''>

            <div className='m-4 pt-4'>
                <SelectYearMonth
                    selectMonth={selectMonth}
                    selectYear={selectYear}
                    setSelectMonth={setSelectMonth}
                    setSelectYear={setSelectYear} />


                <div className='grid grid-cols-7 gap-2'>

                    <CalenderWeekContainer />
                    <CalenderDateContainer
                        setShowModal={setShowModal}
                        month={selectMonth}
                        year={selectYear}
                        allNoteTask={allNoteTask}
                    />
                </div>

            </div>
            {
                modal &&
                <div className='z-[300]'>
                    <AddNote setShowModal={setShowModal} AddTaskHandle={AddTaskHandle} setThumbnail={setThumbnail} thumbnail={thumbnail} />
                </div>
            }
        </div>
    );
};

export default Calender;