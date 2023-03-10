import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import logo from '../../Assets/logo.png'
import { FaCartPlus } from "react-icons/fa";
import { CounterContext } from '../Context/CountProvider';

const Navbar = () => {
    const { count } = useContext(CounterContext)
    const { user, logOut } = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/products'>Products</Link></li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                        </ul>
                    </div>
                    <img className=' w-32' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label htmlFor="my-modal-3">
                        <div className="indicator mr-5">
                            <span className="indicator-item badge badge-secondary">{count}</span>
                            <p className='text-4xl'><FaCartPlus></FaCartPlus></p>
                        </div>
                    </label>


                    {
                        user?.uid ?
                            <button onClick={logOut} className='btn btn-sm btn-error'>Log Out</button>
                            :
                            <Link to='/login'><button className='btn btn-sm btn-success'>Sign In</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;