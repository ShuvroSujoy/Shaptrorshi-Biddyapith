import React from 'react';
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";

const AboutMemberCard = ({Image,Name,Qualification,ContactNumber,MailId,Designation}) => {
    return (
        <div className='flex flex-col justify-center items-center gap-y-2'>
                <div className='border hover:border-2 hover:border-red-600 rounded-md flex flex-col group hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                    <div className="px-2 flex items-center bg-[url('public/Image/Bgcard1.jpg')] bg-no-repeat bg-cover">
                        <img className='h-44 w-48 ' src={Image} alt="" />
                    </div>
                    <div className='flex flex-col gap-y-1 px-2  group-hover:bg-slate-200 '>
                        <h2 className='text-2xl text-red-800 font-SptFont group-hover:text-red-600 '>{Name}</h2>
                        <h4 className='text-xl text-red-800 font-SptFont group-hover:text-red-600'>{Qualification}</h4>
                        <div className='flex items-center gap-1'>
                        <IoCall size={20} className='text-red-800 group-hover:text-red-600'/>
                        <p className='text-base text-red-800 font-SptFont group-hover:text-red-600'>{ContactNumber}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                        <MdMail size={20} className='text-red-800 group-hover:text-red-600'/>
                        <p className='text-base text-red-800 font-SptFont group-hover:text-red-600'>{MailId}</p>
                        </div>
                    </div>
                </div>
                <h2 className='text-2xl text-red-600 font-SptFont'>{Designation}</h2>
            </div>
    );
};

export default AboutMemberCard;