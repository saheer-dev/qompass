import React, { useContext, useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { ThemeContext } from '../Home';
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import ModalPopup from './Popups/ModalPopup';
import EditDrawer from './Popups/editDrawer';

export default function Summary() {
    const [openOrderSummary, setOpenOrderSummary] = useState(false);
    const [openPaymentSummary, setPaymentSummary] = useState(false);
    const [values, setValues] = useState({
        totalWeight: "",
        subTotal: ""
    })
    const [check, setCheck] = useState(false);
    const { order, setOrder, open, handleOpen, toggleDrawerOpen, toggleDrawerClose } = useContext(ThemeContext);

    console.log( toggleDrawerOpen, toggleDrawerClose)

    useEffect(() => {
        if (order.length > 0) {
            setValues({
                totalWeight: "118Kg",
                subTotal: "₹2967.00"
            });
        }
    }, [order]);

    const handleOpenOrderSummary = () => {
        setOpenOrderSummary((prev) => !prev);
    };

    const handlePaymentSummary = () => {
        setPaymentSummary((prev) => !prev);
    };

    const handleCheck = (e) => {
        if(e.target.checked) {
            setCheck(true);
        }
    }

    const handlePayment = () => {
        if(check) {
            handleOpen();
        }else{
            Swal.fire({
                text: "Please agree terms and conditions",
                icon: "warning",
                confirmButtonText: "OK",
              });
        }
    }
  return (
    <>
        {/* order summary */}
        <div className='border border-gray-200 rounded-md'>
            <div className='border-b-[1px] bg-[#f4f9fc]'>
                <div className='flex justify-between mx-5 py-4'>
                    <p className='font-semibold'>Order Summary</p>
                    <div className="flex">
                        <div>
                            <p className='text-[12px]'>Total distance 56kms</p>
                        </div>
                        <div className='ms-3' onClick={handleOpenOrderSummary}>
                            <FaChevronDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#f4f9fc] ${
            openOrderSummary
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="border flex-col flex gap-2 p-3 ">
            <h1 className="font- flex-col font-semibold text-sm">
              Pickup Address <span className="text-[#3d64f0]" onClick={() => toggleDrawerOpen(true)}>( Edit )</span>
            </h1>
            <div>
              <p className="font text-xs">
                Borgir St cea Police Station, Fort Negar, Fort Kochi,
              </p>
              <p className="font text-xs">Kochi, Kerala 682001, India</p>
            </div>

            <h1 className="font- flex-col font-semibold text-sm">
              Pickup Contact details
            </h1>
            <p className="font text-xs">
              Jack Goe | +91 9874563210 | jackgoe15215@gmail.com
            </p>

            <h1 className="font- flex-col font-semibold text-sm">
              Pickup Time & Date
            </h1>
            <p className="font text-xs">24/07/2024 | 16:00 - 20:00</p>
          </div>

          <div className="border flex-col flex gap-2 p-3 ">
            <h1 className="font- flex-col font-semibold text-sm">
              Delivery Address <span className="text-[#3d64f0]" onClick={() => toggleDrawerOpen(true)}>( Edit )</span>
            </h1>
            <div>
              <p className="font text-xs">
                B6/40 Mattanchery Cochin, Jew Town Rd, Ernamkulam
              </p>
              <p className="font text-xs">Kochi, Kerala 682001, India</p>
            </div>

            <h1 className="font- flex-col font-semibold text-sm">
              Delivery Contact Details
            </h1>
            <p className="font text-xs">
              Napier | +91 9874563210 | napier15215@gmail.com
            </p>
          </div>

          <div className="border flex-col flex gap-2 p-3 ">
            <h1 className="font- flex-col font-semibold text-xs">
              Product Category
            </h1>
            <p className="w-20 p-1 font text-xs bg-blue-700/10">Electronics</p>
          </div>

          <div className="border flex-col flex gap-2 p-3 ">
            <h1 className="font- flex-col font-semibold text-xs">
              Load Category
            </h1>
            <p className="w-20 p-1 font text-xs bg-blue-700/10">Carton Box</p>
          </div>

          <div className="border flex-col flex gap-2 p-3 ">
            <p className=" p-1 font text-xs flex gap-1">
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              The estimate cost may vary from the final shipping cost based on
              the package dimensions & weight mesured before delivery.
            </p>
          </div>
        </div>

        <EditDrawer />

        {/* payment summary */}
        <div className='border border-gray-200 rounded-md mt-5'>
            <div className={order.length === 0 ? 'border-b-[1px] bg-gray-100 cursor-default opacity-50' : 'border-b-[1px] bg-[#f4f9fc] cursor-pointer'}>
                <div className='flex justify-between mx-5 py-4'>
                    <p className='font-semibold'>Payment Summary</p>
                    <div className="flex">
                        <div>
                            <p className='text-[12px]'>Total Weight 284Kg</p>
                        </div>
                        <div className='ms-3' onClick={order.length === 0 ? null : handlePaymentSummary}>
                            <FaChevronDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          openPaymentSummary ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-blue-700/5">
          <table className="text-[13px] w-full">
            <tr className="">
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-2 py-3">
                Total Shipment Count
              </td>
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-7 py-3">
                10.00
              </td>
            </tr>
            <tr className="">
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-2 py-3">
                Base freight amount
              </td>
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-7 py-3">
                10.00
              </td>
            </tr>
            <tr className="">
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-2 py-3">
                Accessorial freight amount
              </td>
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-7 py-3">
                546kg
              </td>
            </tr>
            <tr className="">
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-2 py-3">
                Docket Charge
              </td>
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-7 py-3">
                ₹2.016.00
              </td>
            </tr>
            <tr className="">
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-2 py-3">
                Stational Charge
              </td>
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-7 py-3">
                ₹50.00
              </td>
            </tr>
            <tr className="">
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-2 py-3">
                Handling Charge(Per Box)
              </td>
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-7 py-3">
                ₹500.00
              </td>
            </tr>
            <tr className="">
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-2 py-3">
                CGST 8%
              </td>
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-7 py-3">
                ₹200.00
              </td>
            </tr>
            <tr className="">
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-2 py-3">
                SGST 8%
              </td>
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-7 py-3">
                ₹200.00
              </td>
            </tr>
            <tr className="">
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-2 py-3">
                IGST 8%
              </td>
              <td className="w-6/12 border-solid border-2 border-gray-200 ps-7 py-3">
                ₹00.00
              </td>
            </tr>
          </table>
        </div>
      </div>

        {/* total weight */}
        <div className='border border-gray-200 rounded-md mt-5'>
            <div className={order.length === 0 ? 'border-b-[1px] bg-gray-100 opacity-50' : 'border-b-[1px] bg-[#f4f9fc]'}>
                <div className='flex justify-between mx-5 py-4'>
                    <p className='font-semibold'>Total Weight</p>
                    <p className='text-[12px]'>{values?.totalWeight}</p>
                </div>
            </div>
        </div>

        {/* sub total */}
        <div className="mt-5">
        <div className={order.length === 0 ? 'border-b-[1px] bg-gray-100 opacity-50' : 'border-b-[1px] bg-[#f4f9fc]'}>
            <div className='flex justify-between mx-5 py-4'>
                <p className='font-semibold'>SUB TOTAL</p>
                <p className='text-[12px]'>{values?.subTotal}</p>
            </div>
        </div>
        </div>

        <div className={
            order.length === 0 ? "hidden" : "block"
        }>
            <div className='flex pt-4'>
                <div>
                    <input type="checkbox" onChange={(e) => handleCheck(e)} />
                </div>
                <div>
                    <p className='font-semibold text-sm ms-3 pt-1'>I agree to this terms and conditions</p>
                </div>
            </div>
            <div>
                <p className='text-[12px] pt-4 text-gray-600'>By checking this box. I confirm that i have read and agree to abide by the terms governing this transaction, including refund and cancellation polices</p>
            </div>
            <div>
                <button className='bg-[#0d824c] text-white text-lg px-7 py-3 mt-5 rounded-md font-bold' onClick={handlePayment}>Pay INR 2967.00</button>
            </div>
        </div>
        <ModalPopup />
    </>
  )
}
