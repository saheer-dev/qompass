import React, { useContext, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { RxCopy } from "react-icons/rx";
import { LuSave } from "react-icons/lu";
import { LuLink } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrPowerCycle } from "react-icons/gr";
import { LuSettings } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { ThemeContext } from '../Home';
import { MdOutlineEdit } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

export default function OverView() {
    const { order } = useContext(ThemeContext);
    const [editTable, setEditTable] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; 
  
    const totalPages = Math.ceil(order.length / itemsPerPage);
  
    const currentItems = order.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    const changePage = (newPage) => {
      if (newPage > 0 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };

    return (
        <div className='border border-gray-300 rounded-md mt-5 min-h-80 overflow-x-auto'>
            <div className='border-b-[1px]'>
                <div className='flex justify-between mx-5 py-4'>
                    <div className='flex justify-center items-center'>
                        <p className='font-semibold'>Order Overview</p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {[
                            IoSearch,
                            FaPlus,
                            RxCopy,
                            LuSave,
                            LuLink,
                            MdOutlineDeleteOutline,
                            GrPowerCycle,
                            LuSettings,
                            HiOutlineDotsVertical
                        ].map((Icon, index) => (
                            <div key={index} className='w-[35px] h-[35px] bg-gray-100 flex justify-center items-center rounded-md'>
                                <Icon />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='relative  pb-20 '>
            <table className='w-full text-xs sm:text-sm'>
                <thead>
                <tr className='bg-[#f4f9fc]'>
                    {['No', 'Invoice no', 'Load type', 'Load Quantity', 'Actual Weight', 'Volumetric', 'Product category', 'HAZMAT class', 'Action'].map((header, index) => (
                    <td key={index} className='px-2 text-[11px] py-3'>{header}</td>
                    ))}
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
                    <tr key={index} className='text-sm'>
                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className='px-3 py-3'>
                        <input type="text" className='text-sm px-2 py-[3px] rounded-sm w-[80px] border text-[10px]' value={item?.Invoice} />
                    </td>
                    <td className='px-3 py-3'>
                        {editTable ? (
                        <select className="text-sm px-2 py-[3px] rounded-sm w-[90px] border text-[10px] bg-white">
                            <option>Carton Box</option>
                            <option>Wooden Box</option>
                            <option>Plastic</option>
                            <option>Others</option>
                        </select>
                        ) : (
                        <input type="text" className='text-sm px-2 py-[3px] rounded-sm w-[90px] border text-[10px]' value={item?.loadType} />
                        )}
                    </td>
                    <td className='px-3 py-3'>
                        <input type="text" className='text-sm px-2 py-[3px] rounded-sm w-[70px] border text-[10px]' value={item?.loadQuantity} />
                    </td>
                    <td className='px-3 py-3'>
                        <input type="text" className='text-sm px-2 py-[3px] rounded-sm w-[70px] border text-[10px]' value={item?.actualWeight} />
                    </td>
                    <td>
                        <div className='flex me-5'>
                        <input type="text" className='text-sm px-2 py-[3px] rounded-sm w-10 border text-[10px]' value={item?.volumetric?.length} />
                        <input type="text" className='text-sm px-2 py-[3px] rounded-sm w-10 border text-[10px]' value={item?.volumetric?.breadth} />
                        <input type="text" className='text-sm px-2 py-[3px] rounded-sm w-10 border text-[10px]' value={item?.volumetric?.height} />
                        </div>
                    </td>
                    <td className='px-3 py-3'>
                        {editTable ? (
                        <select className="text-sm px-2 py-[3px] rounded-sm w-[90px] border text-[10px] bg-white">
                            <option>Consumables</option>
                            <option>Electronics</option>
                            <option>Sports Equipments</option>
                            <option>Cloths Items</option>
                            <option>HouseHold Items</option>
                            <option>Other</option>
                        </select>
                        ) : (
                        <input type="text" className='text-sm px-2 py-[3px] rounded-sm w-[90px] border text-[10px]' value={item?.productCategory} />
                        )}
                    </td>
                    <td className='px-3 py-3'>
                        {editTable ? (
                        <select className="text-sm px-2 py-[3px] rounded-sm w-9/12 border text-[10px] bg-white">
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        ) : (
                        <input type="text" className='text-sm px-2 py-[3px] rounded-sm w-9/12 border text-[10px]' value={item?.hazmat} />
                        )}
                    </td>
                    <td>
                        {editTable ? (
                        <p
                            className="w-20 rounded-md border bg-blue-500/10 flex justify-center item-center"
                            onClick={() => setEditTable(false)}
                        >
                            <LuSave className='text-lg' />
                            <span className="ps-1 text-[10px]">save</span>
                        </p>
                        ) : (
                        <div className='flex px-3 py-3'>
                            <div className='w-[30px] h-[30px] bg-gray-100 flex justify-center items-center rounded-md me-2' onClick={() => setEditTable(true)}>
                            <MdOutlineEdit />
                            </div>
                            <div className='w-[30px] h-[30px] bg-gray-100 flex justify-center items-center rounded-md me-2'>
                            <MdOutlineDeleteOutline />
                            </div>
                            <div className='w-[30px] h-[30px] bg-gray-100 flex justify-center items-center rounded-md me-2'>
                            <RxCopy />
                            </div>
                            <div className='w-[30px] h-[30px] bg-gray-100 flex justify-center items-center rounded-md me-2'>
                            <HiOutlineDotsVertical />
                            </div>
                        </div>
                        )}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex space-x-1 mt-4 pb-5 absolute bottom-0 right-0">
                <button
                className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 disabled:pointer-events-none disabled:opacity-50 ml-2"
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                >
                Prev
                </button>
                {[...Array(totalPages)].map((_, pageIndex) => (
                <button
                    key={pageIndex}
                    className={`min-w-9 rounded-md py-2 px-3 text-center text-sm transition-all shadow-sm ${
                    currentPage === pageIndex + 1
                        ? 'bg-slate-800 text-white'
                        : 'border border-slate-300 text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800'
                    } ml-2`}
                    onClick={() => changePage(pageIndex + 1)}
                >
                    {pageIndex + 1}
                </button>
                ))}
                <button
                className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 disabled:pointer-events-none disabled:opacity-50 ml-2"
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                >
                Next
                </button>
            </div>
            </div>
        </div>
    );
}
