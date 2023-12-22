import React, { useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi"
const Admission = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [selectedShifts, setSelectedShifts] = useState([]);
    const [formData, setFormData] = useState({
        StudentName: '',
        SchoolName: '',
        ContactNumber: '',
        MothersName: '',
        MothersOccupation: '',
        FathersName: '',
        FathersOccupation: '',
        HomeAddress: '',
    });

    const handleClassCheckbox = (classNumber) => {
        if (selectedClasses.includes(classNumber)) {
            setSelectedClasses(selectedClasses.filter((cls) => cls !== classNumber));
        } else {
            setSelectedClasses([...selectedClasses, classNumber]);
        }
    };

    const handleShiftCheckbox = (shift) => {
        if (selectedShifts.includes(shift)) {
            setSelectedShifts(selectedShifts.filter((s) => s !== shift));
        } else {
            setSelectedShifts([...selectedShifts, shift]);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log('User Data:', {
            ...formData,
            selectedClasses,
            selectedShifts,
        });

        // Reset form data after submission
        setFormData({
            StudentName: '',
            SchoolName: '',
            ContactNumber: '',
            MothersName: '',
            MothersOccupation: '',
            FathersName: '',
            FathersOccupation: '',
            HomeAddress: '',
        });

        // Clear selectedClasses and selectedShifts
        setSelectedClasses([]);
        setSelectedShifts([]);
    };

    return (
        <div className='container'>
            {/* Top Part */}
            <div className=" mt-10 mb-10">
                <div className='flex flex-col  items-center gap-y-2'>
                    <img className='h-[130px] w-[150px] ' src="public/Image/SptLogo2.png" alt="" />
                    <h1 className='md:text-4xl text-2xl text-red-600 font-bold'>সপ্তর্ষী <span className='text-base md:text-xl font-SptFont text-red-600'>Eductaion Project</span></h1>
                    <div className='flex flex-col gap-2 md:flex md:flex-row'>
                        <div className='flex items-center gap-2 text-base text-red-800 group'>
                            <IoHomeSharp size={20} className='group-hover:text-red-600' />
                            <p className='group-hover:text-red-600'>31,Lower Jashore Road,Khulna Sadar, Khulna.</p>
                        </div>
                        <div className='flex items-center gap-2 text-base text-red-800 group'>
                            <IoHomeSharp size={20} className='group-hover:text-red-600' />
                            <p className='group-hover:text-red-600'>03,Fire Brigade Road,Khulna Sadar, Khulna.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 md:flex md:flex-row'>
                        <div className='flex items-center gap-x-1 group '>
                            <FiPhoneCall size={20} className='text-base text-red-800 group-hover:text-red-600' />
                            <h3 className='text-base text-red-800 group-hover:text-red-600'>+01912-667044,</h3>
                        </div>
                        <div className='flex items-center gap-x-1 group'>
                            <FiPhoneCall size={20} className='text-base text-red-800 group-hover:text-red-600' />
                            <h3 className='text-base text-red-800 group-hover:text-red-600'>+01628-190818,</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-red-600 h-[1px] w-full mt-5'></div>
                <div className='flex justify-center mt-5 mb-5'>
                    <h1 className='md:text-2xl text-xl font-SptFont font-semibold text-red-600'>Students Information</h1>
                </div>
                <div className='flex items-center justify-center mt-10 mb-10'>
                    <div className='h-[3px] w-16 bg-red-800'></div>
                    <div className='h-[5px] w-16 bg-red-800'></div>
                    <div className='h-[3px] w-16 bg-red-800'></div>
                </div>
                {/* form Part */}
                <div className="space-y-5">
                    <div className='md:flex md:flex-row flex flex-col justify-evenly
                 items-center'>
                        <div className='flex flex-col gap-y-3'>
                            <div className='flex gap-x-2 items-center'>
                                <h2 className='md:text-xl text-[12px] text-red-800 font-SptFont font-semibold'>Student Name:</h2>
                                <input
                                    type='text'
                                    name='StudentName'
                                    placeholder='StudentName'
                                    className='border-b-2 hover:border-red-800 px-3 py-2 w-3/5'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <h2 className='md:text-xl text-[12px] text-red-800 font-SptFont font-semibold'>School Name:</h2>
                                <input
                                    type='text'
                                    name='SchoolName'
                                    placeholder='SchoolName'
                                    className='border-b-2 hover:border-red-800 px-3 py-2 w-3/5'
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <h2 className='md:text-xl text-[12px] text-red-800 font-SptFont font-semibold'>Contact Number:</h2>
                            <input
                                type='number'
                                name='ContactNumber'
                                placeholder='ContactNumber'
                                className='border-b-2 hover:border-red-800 px-3 py-2 w-3/5'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <div className='flex justify-center'>
                            <h2 className='md:text-2xl text-xl font-SptFont font-semibold text-red-600'>Select Classes and Shifts</h2>
                        </div>
                        <form className=''>
                            <div className='md:flex md:flex-row md:justify-evenly flex flex-col items-center gap-3 text-red-800 md:text-xl text-[16px] font-SptFont '>
                                <h3 className='md:text-xl text-[20px] font-semibold'>Select Classes:</h3>
                                {[3, 4, 5, 6, 7, 8, 9].map((classNumber) => (
                                    <div key={classNumber}>
                                        <input
                                            type="checkbox"
                                            id={`class-${classNumber}`}
                                            checked={selectedClasses.includes(classNumber)}
                                            onChange={() => handleClassCheckbox(classNumber)}
                                        />
                                        <label htmlFor={`class-${classNumber}`}>{`Class ${classNumber}`}</label>
                                    </div>
                                ))}
                                <p className='md:text-xl text-[20px] font-semibold'>Selected Classes: {selectedClasses.join(', ')}</p>
                            </div>
                        </form>
                        <form>
                            <div className='mmd:flex md:flex-row md:justify-evenly flex flex-col items-center gap-3 text-red-800 md:text-xl text-[16px] font-SptFont'>
                                <h3 className='md:text-xl text-[20px] font-semibold'>Select Shifts:</h3>
                                {['Morning', 'Middle', 'Day'].map((shift) => (
                                    <div key={shift}>
                                        <input
                                            type="checkbox"
                                            id={`shift-${shift}`}
                                            checked={selectedShifts.includes(shift)}
                                            onChange={() => handleShiftCheckbox(shift)}
                                        />
                                        <label htmlFor={`shift-${shift}`}>{shift} Shift</label>
                                    </div>
                                ))}
                                <p className='md:text-xl text-[20px] font-semibold'>Selected Shifts: {selectedShifts.join(', ')}</p>
                            </div>
                        </form>
                    </div>
                    {/* Gurdian Information */}
                    <div className='flex justify-center mt-10 mb-5'>
                        <h1 className='md:text-2xl text-xl font-SptFont font-semibold text-red-600'>Gurdian Information</h1>
                    </div>
                    <div className='flex items-center justify-center mt-10 mb-10'>
                        <div className='h-[3px] w-16 bg-red-800'></div>
                        <div className='h-[5px] w-16 bg-red-800'></div>
                        <div className='h-[3px] w-16 bg-red-800'></div>
                    </div>
                    <div className='flex flex-col mt-10 gap-y-3'>
                        <div className='md:flex md:flex-row md:justify-evenly flex flex-col gap-y-3'>
                            <div className='flex gap-x-2 items-center'>
                                <h2 className='md:text-xl text-[12px] text-red-800 font-SptFont font-semibold'>Mothers Name:</h2>
                                <input
                                    type='text'
                                    name='MothersName'
                                    placeholder='MothersName'
                                    className='border-b-2 hover:border-red-800 px-3 py-2 w-3/5'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <h2 className='md:text-xl text-[12px] text-red-800 font-SptFont font-semibold'>Occupation:</h2>
                                <input
                                    type='text'
                                    name='MothersOccupation'
                                    placeholder='MothersOccupation'
                                    className='border-b-2 hover:border-red-800 px-3 py-2 w-3/5'
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='md:flex md:flex-row md:justify-evenly flex flex-col gap-y-3'>
                            <div className='flex gap-x-2 items-center'>
                                <h2 className='md:text-xl text-[12px] text-red-800 font-SptFont font-semibold'>Fathers Name:</h2>
                                <input
                                    type='text'
                                    name='FathersName'
                                    placeholder='FathersName'
                                    className='border-b-2 hover:border-red-800 px-3 py-2 w-3/5'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <h2 className='md:text-xl text-[12px] text-red-800 font-SptFont font-semibold'>Occupation:</h2>
                                <input
                                    type='text'
                                    name='FathersOccupation'
                                    placeholder='FathersOccupation'
                                    className='border-b-2 hover:border-red-800 px-3 py-2 w-3/5'
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='flex gap-x-2 items-center justify-evenly'>
                            <h2 className='md:text-xl text-[12px] text-red-800 font-SptFont font-semibold'>Home Address:</h2>
                            <input
                                type='text'
                                name='HomeAddress'
                                placeholder='Address'
                                className='border-b-2 hover:border-red-800 px-3 py-2 w-3/5'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    {/* Submition */}
                    <div className='flex justify-center mt-20'>
                        <button onClick={handleSubmit} className='px-10 py-3 text-xl hover:text-2xl text-white font-SptFont font-bold bg-red-800 hover:bg-red-600 rounded-2xl'>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Admission;