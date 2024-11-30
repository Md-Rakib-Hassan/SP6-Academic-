import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const Layout = () => {
    
    return (
        <div>
            <Toaster />
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;