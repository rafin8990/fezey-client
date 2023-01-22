import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Cheakout from '../../Cheakout/Cheakout';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 ">
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/customer'>Customer Details</Link></li>
                        <li><Link to='/dashboard/customer'>Customer Details</Link></li>
                    </ul>

                </div>
                <Cheakout></Cheakout>
            </div>
        </div>
    );
};

export default Dashboard;