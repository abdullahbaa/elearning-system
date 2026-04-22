import React from 'react';
import { BiLogoReact } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-state-800 shadow-lg flex items-center justify-around py-3 px-3 fixed top-0 left-0 w-full'>
            {/* Main Page */}
            <Link to="/">
            <span className='font-semibold text-lg flex items-center gap-3 text-blue-400'>
                <BiLogoReact className='text-6xl' />
                <span className='font-semibold text-2xl'>
                    elearning
                </span>
            </span>
            </Link>
            <div className='flex items-center gap-5 text-black'>
                {/* Home Page */}
                <Link to="/Home" className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
                Home
            </Link>
            {/* Dashboard */}
                <Link to="/Dashboard" className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
                Dashboard
            </Link>
            {/* My courses */}
                <Link to="/My Course" className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
                My Course
            </Link>
            {/* All Courses */}
                <Link to="/All Courses" className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
                All Courses
            </Link>
            {/* Course Videos */}
                <Link to="/Course Videos" className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
                Course Videos
            </Link>
            </div>
        </nav>
    );
};

export default Navbar;