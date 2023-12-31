import React from 'react';
import { Link } from 'react-router-dom';
import avatar from "../assets/avatar.png"

const Navbar = () => {
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/events">UpComming Events</Link></li>
        <li><Link>Contact Us</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Job Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
               <img className='w-14 rounded-full' src={avatar} alt="" />
            </div>
        </div>
    );
};

export default Navbar;