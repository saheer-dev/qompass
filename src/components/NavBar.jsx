import React from 'react'
import logo from '../assets/logo.png'
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineForwardToInbox } from "react-icons/md";


export default function NavBar() {
  return (
    <>
        <div className='border-b-[1px]'>
            <div className='flex justify-between items-center mx-10'>
                <div>
                    <img src={logo} alt="logo image" className='w-[150px]' />
                </div>
                <div className='flex'>
                    <div className='flex justify-center items-center px-5 text-sm'>
                        <div className='w-[30px] h-[30px] bg-gray-100 flex justify-center items-center rounded-full me-2'>
                            <TbPhoneCall className='text-blue-400' />
                        </div>
                        <p>917736172777</p>
                    </div>
                    <div className='flex justify-center items-center px-5 text-sm'>
                        <div className='w-[30px] h-[30px] bg-gray-100 flex justify-center items-center rounded-full me-2'>
                            <MdOutlineForwardToInbox className='text-blue-400' />
                        </div>
                        <p>itsupport@Driverlogistics.In</p>
                    </div>
                    <div className='w-[40px] h-[40px] bg-blue-600 rounded-full'></div>
                </div>
            </div>
        </div>
        <div className='border-b-[1px]'>
            <div className='flex justify-between mx-10 py-1'>
                <p className='text-gray-400 text-sm'>Order Management System</p>
                <p className='text-gray-400 text-sm'>Welcome Guest</p>
            </div>
        </div>
    </>
  )
}
