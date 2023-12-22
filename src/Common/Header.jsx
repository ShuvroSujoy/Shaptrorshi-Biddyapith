import React, { useState } from 'react';
import { MdMobileFriendly } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { Drawer } from 'antd';
import { Link, NavLink } from 'react-router-dom';
// import { TbMailCheck } from "react-icons/tb";
const Header = () => {
    const phoneNumber = '+8801628-190818';
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className='container'>
            {/* Navbar */}
            <nav className='flex justify-between items-center gap-x-5 md:px-10 border-b-2 py-5  '>
                <div className='flex items-center font-SptFont gap-x-1 '>
                    <img className='h-[50px] w-[60px]' src="public/Image/SptLogo2.png" alt="" />
                    <p className='uppercase md:text-3xl text-xl text-red-600 hover:text-red-800 lg:font-extrabold font-bold'><Link to='/'>সপ্তর্ষী বিদ্যাপীঠ</Link></p>
                </div>
                <div className='lg:flex gap-x-5 hidden'>
                    <h2 className='text-xl font-SptFont text-red-800 hover:text-red-600'><Link to='/'>Home</Link></h2>
                    <h2 className='text-xl font-SptFont text-red-800 hover:text-red-600'><Link to='/course'>Courses</Link></h2>
                    <h2 className='text-xl font-SptFont text-red-800 hover:text-red-600'><Link to='/aboutus'>About Us</Link></h2>
                    <h2 className='text-xl font-SptFont text-red-800 hover:text-red-600'><Link to='/admission'>Admission</Link></h2>
                </div>
                <a href={`tel:${phoneNumber}`} className='group flex items-center gap-x-2'>
                    <MdMobileFriendly size={25} className='text-red-800 group-hover:text-red-600 font-bold hidden lg:flex md:flex' />
                    <p className='text-2xl font-SptFont text-red-800 group-hover:text-red-600 hidden lg:flex md:flex'>{phoneNumber}</p>
                </a>
                {/* <div className='group flex items-center gap-x-2'>
                <TbMailCheck size={30} className='text-red-800 group-hover:text-red-600'/>
                <p className='text-xl text-red-800 group-hover:text-red-600'>shaptorshebiddyapith2012@gmail.com</p>
                </div> */}
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <BiMenu onClick={showDrawer} size={40} className='text-red-800' />
                    <Drawer placement="left" onClose={onClose} open={open}>
                        <div className='flex flex-col gap-y-5 items-center'>
                            <h2 className='text-xl font-SptFont text-red-800 hover:text-red-600'><Link to='/'>Home</Link></h2>
                            <h2 className='text-xl font-SptFont text-red-800 hover:text-red-600'><Link to='/course'>Courses</Link></h2>
                            <h2 className='text-xl font-SptFont text-red-800 hover:text-red-600'><Link to='/aboutus'>About Us</Link></h2>
                            <h2 className='text-xl font-SptFont text-red-800 hover:text-red-600'><Link to='/admission'>Admission</Link></h2>
                            <div className='group flex items-center gap-x-2'>
                                <MdMobileFriendly size={30} className='text-xl font-SptFont text-red-800 hover:text-red-600  lg:hidden md:hidden' />
                                <p className='text-xl font-SptFont text-red-800 hover:text-red-600 group-hover:text-red-600  lg:hidden md:hidden'>+8801628-190818</p>
                            </div>
                        </div>
                    </Drawer>
                </label>
            </nav>
        </div>
    );
};

export default Header;