import React from 'react';
import ImageUpload from './ImageUpload';

const AddNote = ({ setShowModal, AddTaskHandle, thumbnail, setThumbnail }) => {
    return (
        <div>
            <div className='flex items-center justify-center '>
                <div className='fixed -top-4 w-full  sm:max-w-sm mx-auto h-full hiddenS overflow-auto '>;
                    <form action="" className='flex pt-12 flex-col gap-2 w-full   p-10 absolute bg-[#CCB6FF] rounded-sm text-primary' onSubmit={AddTaskHandle}>

                        <button
                            onClick={() => setShowModal(null)}
                            className='absolute right-10 top-2 bg-red-500  rounded-full h-7 text-center flex-col flex items-center justify-center w-7 hover:bg-red-400 text-white capitalize'>
                            x
                        </button>
                        <ImageUpload props={{ setThumbnail, thumbnail }} />
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <label htmlFor="name" className='flex items-center gap-2'>
                                            Host :
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="text"
                                            id='name'
                                            name='name'
                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-8 rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label htmlFor="title" className='flex items-center gap-2'>
                                            Title :
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="text"
                                            id='title'
                                            name='title'
                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-8 rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label htmlFor="location" className='flex items-center gap-2'>
                                            Location :
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="text"
                                            id='location'
                                            name='location'
                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-8 rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label htmlFor="link" className='flex items-center gap-2'>
                                            Link :
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="text"
                                            id='link'
                                            name='link'
                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-8 rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>


                                <tr>
                                    <th>
                                        <label htmlFor="color" className='flex items-center gap-2'>
                                            Color :
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="color"
                                            id='color'
                                            name='color'
                                            required
                                            defaultValue='#ffffff'
                                            className='border  max-w-sm w-full border-r-purple-200 h-10  rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <label htmlFor="bg_color" className='flex items-center gap-2'>
                                            Bg Color :
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="color"
                                            id='bg_color'
                                            name='bg_color'
                                            defaultValue='#FDD1FB'

                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-10  rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <label htmlFor="time_from" className='flex items-center gap-2'>
                                            From
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="time"
                                            id='time_from'
                                            name='time_from'
                                            required
                                            className='border max-w-sm w-full border-r-purple-200 h-8  rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <label htmlFor="time_to" className='flex items-center gap-2'>
                                            To
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="time"
                                            id='time_to'
                                            name='time_to'
                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-8  rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <label htmlFor="note" className='flex items-center gap-2'>
                                            Note :
                                        </label>
                                    </th>
                                    <td>
                                        <textarea
                                            type="text"
                                            id='note'
                                            name='note'
                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-8 rounded-md focus:outline-none'
                                        />
                                    </td>

                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <button className='btn-secondary btn btn-sm text-white'>
                                            Add
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNote;