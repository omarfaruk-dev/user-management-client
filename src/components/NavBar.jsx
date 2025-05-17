import React from 'react';
import { FaUsersCog } from 'react-icons/fa';

const NavBar = () => {
    return (
        <div className="bg-secondary ">
            <p className="text-center text-2xl font-semibold py-2 text-white flex items-center justify-center gap-2">
                <FaUsersCog size={30} className='text-white' /> User Management System
            </p>
        </div>
    );
};

export default NavBar;