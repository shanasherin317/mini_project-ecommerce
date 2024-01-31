import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
    return (
        <div className="w-[300px] bg-slate-800 h-screen flex justify-content-center items-center">
            <ul className='w-full'>
                <li className='my-1 text-white rounded-xl h-[50px] flex ps-6 hover:text-black items-center  w-[90%] m-auto hover:bg-slate-200'>
                    <NavLink className={''} to={'/admin/home'} >Home</NavLink>
                </li>
                <li className='my-1 text-white rounded-xl h-[50px] flex ps-6 hover:text-black items-center  w-[90%] m-auto hover:bg-slate-200'>
                    <NavLink to={'/admin/orders'}>Orders</NavLink>
                </li>
                <li className='my-1 text-white rounded-xl h-[50px] flex ps-6 hover:text-black items-center  w-[90%] m-auto hover:bg-slate-200'>
                    <NavLink className={''} to={'/admin/transactions'}>Transactions</NavLink>
                </li>
                <li className='my-1 text-white rounded-xl h-[50px] flex ps-6 hover:text-black items-center  w-[90%] m-auto hover:bg-slate-200'>
                    <NavLink className={''} to={'/admin/users'}>Users</NavLink>
                </li>
                <li className='my-1 text-white rounded-xl h-[50px] flex ps-6 hover:text-black items-center  w-[90%] m-auto hover:bg-slate-200'>
                    <NavLink className={''} to={'/admin/products'}>Product</NavLink>
                </li>
                <li className='my-1 text-white rounded-xl h-[50px] flex ps-6 hover:text-black items-center  w-[90%] m-auto hover:bg-slate-200'>
                    <NavLink className={''} to={'/admin/profile'}>Profile</NavLink>
                </li>

            </ul>
        </div>)
}

export default SideBar
