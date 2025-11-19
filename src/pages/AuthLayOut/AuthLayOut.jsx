import { LogOut } from 'lucide-react';
import React from 'react';

import Logo from '../../components/Logo/Logo'
import { Outlet } from 'react-router-dom';

import authImg from '../../assets/authImage.png';

const AuthLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto'>
                <Logo></Logo>
                <div className='flex'>
                    <div className='flex-1'>
                        <Outlet></Outlet>
                    </div>

                    <div className='flex-1'>
                        <img src={authImg} alt="" />
                    </div>
                </div>
        </div>
    );
};

export default AuthLayOut;