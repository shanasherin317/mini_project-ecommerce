import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'

function Layout() {
  return (
    <div className='flex w-full  '>
      <div className="">
        <SideBar />
      </div>
      <div className=" w-[60%] bg-slate-900 m-auto h-[90vh] rounded-xl pt-11 ps-12 ">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
