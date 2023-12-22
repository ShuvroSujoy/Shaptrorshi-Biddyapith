import React from 'react';
import { RxDoubleArrowRight } from "react-icons/rx";
import SptCourses2 from './SptCourses2';

const Courses = () => {
    return (
        <div className='container'>
            <div className='flex flex-col items-center gap-10 mt-10'>
                <h1 className='md:text-4xl text-xl text-red-600 text-center font-SptFont2'>Our Courses And Teaching Methode</h1>
                <div className='flex items-center'>
                    <div className='h-[3px] w-16 bg-red-800'></div>
                    <div className='h-[5px] w-16 bg-red-800'></div>
                    <div className='h-[3px] w-16 bg-red-800'></div>
                </div>
            </div>
            <div className='bg-slate-100 flex flex-col gap-5 mt-10 md:p-5 p-2 border border-2 hover:border-red-600 rounded-md'>
                <div className='flex gap-1 items-center group'>
                    <RxDoubleArrowRight size={25} className='text-red-800 group-hover:text-red-600 font-bold' />
                    <h2 className='text-red-800 group-hover:text-red-600 md:text-2xl text-base font-SptFont md:font-semibold'>We Teach Our Students accroding to main book with maintain the reality.</h2>
                </div>
                <div className='flex gap-1 items-center group'>
                    <RxDoubleArrowRight size={25} className='text-red-800 group-hover:text-red-600 font-bold' />
                    <h2 className='text-red-800 group-hover:text-red-600 md:text-2xl text-base font-SptFont md:font-semibold'>After Completing Sesson Presentation Are Also Given.</h2>
                </div>
                <div className='flex gap-1 items-center group'>
                    <RxDoubleArrowRight size={25} className='text-red-800 group-hover:text-red-600 font-bold' />
                    <h2 className='text-red-800 group-hover:text-red-600 md:text-2xl text-base font-SptFont md:font-semibold'>To get better ablity in english language debate on speaking enlish is mandatory. </h2>
                </div>
                <div className='flex gap-1 items-center group'>
                    <RxDoubleArrowRight size={25} className='text-red-800 group-hover:text-red-600 font-bold' />
                    <h2 className='text-red-800 group-hover:text-red-600 md:text-2xl text-base font-SptFont md:font-semibold'>We Take better care about Bngla language</h2>
                </div>
                <div className='flex gap-1 items-center group'>
                    <RxDoubleArrowRight size={25} className='text-red-800 group-hover:text-red-600 font-bold' />
                    <h2 className='text-red-800 group-hover:text-red-600 md:text-2xl text-base font-SptFont md:font-semibold'>Special Classes also taken on Math,Sceince And Degital Technology.</h2>
                </div>
            </div>
            <SptCourses2 />
        </div>
    );
};

export default Courses;