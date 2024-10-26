import React, { useContext, useState } from 'react';
import { Drawer, Box, Button, TextField, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { ThemeContext } from '../../Home';

export default function EditDrawer() {

    const {toggleDrawerOpen, toggleDrawerClose, isDrawerOpen} = useContext(ThemeContext)

  return (
    <div>
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => toggleDrawerClose(false)}>
        <Box sx={{ width: 800, padding: 3 }}>
          <div className=" flex h-fit px-5 py-3  w-96 font-[600] border-b-[1px] border-slate-200 justify-between">
          <h1>Pickup Details</h1>
          
        </div>
        <div className="flex py-2 border-b-[1px] border-slate-200 text-[12px]">
          <div className="px-5 py-2">
            <p>Pick up Date</p>
            <div className="flex items-center   rounded-[8px] overflow-hidden mt-1.5 ">
              <input
                type="text"
                placeholder="Date"
                className="max-w-[100px] px-3 bg-primary/20 outline-none font-[500]  py-1.5"
              />
              <div className=" px-2 whitespace-nowrap bg-primary font-[500] rounded-r-[8px]  text-white py-1.5 ">
                Select Date 📅
              </div>
            </div>
          </div>

          <div className="px-5 py-2">
            <p>Pick up Date</p>
            <div className="flex items-center   rounded-[8px] overflow-hidden mt-1.5 ">
              <input
                type="text"
                placeholder="Start Time"
                className="max-w-[120px] px-3 border-r-[1px] border-primary bg-primary/20 outline-none font-[500]  py-1.5"
              />
              <input
                type="text"
                placeholder="End Time"
                className="max-w-[100px] px-3 bg-primary/20 outline-none font-[500]  py-1.5"
              />
              <div className=" px-2 whitespace-nowrap bg-primary font-[500] rounded-r-[8px]  text-white py-1.5 ">
                Select Time ⏲️
              </div>
            </div>
          </div>
        </div>

        <div className="  px-5 py-4  w-full font-[600] border-b-[1px] border-slate-200 ">
          <h1>Billing Person Details</h1>
          <div className="text-[13px] font-[500] grid grid-cols-2 gap-5 mt-4">
            <div className="flex flex-col">
              Name
              <input
                type="text"
                className="border-[1px] border-slate-200  outline-none rounded-[6px] px-3 py-1 mt-1"
                placeholder="xxxxxxxxxxxxxxxx"
              />
            </div>

            <div className="flex flex-col">
              Contact Number
              <div className="flex items-center justify-between rounded-[6px] overflow-hidden border-[1px] border-slate-200 mt-1 ">
                <input
                  type="text"
                  className=" outline-none px-3 max-w-[70%] py-1 "
                  placeholder="+91 9874563210"
                />
                <button className="py-1 text-white bg-primary px-2 w-[30%] shrink-0 ">
                  Verify
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              Email Address
              <input
                type="email"
                className="border-[1px] border-slate-200  outline-none rounded-[6px] px-3 py-1 mt-1"
                placeholder="xxxxxx@gmail.com"
              />
            </div>

            <div className="flex flex-col">
              Pan Number
              <input
                type="text"
                className="border-[1px] border-slate-200  outline-none rounded-[6px] px-3 py-1 mt-1"
                placeholder=""
              />
            </div>
          </div>
        </div>

        <div className="  px-5 py-4  w-full font-[600] border-b-[1px] border-slate-200 ">
          <div className="w-full flex items-center justify-between">
            <h1>Contact Details</h1>
            <button className="text-[12px] font-[500] bg-slate-200 px-2 py-1">
              {" "}
              Same as Customer Details
            </button>
          </div>
          <div className="text-[13px] font-[500]  grid grid-cols-2 gap-5 mt-4">
            <div className="flex flex-col">
              Pick-up Contact Name
              <input
                type="text"
                className="border-[1px] border-slate-200  outline-none rounded-[6px] px-3 py-1 mt-1"
                placeholder="xxxxxxxxxxxxxxxx"
              />
            </div>{" "}
            <div className="flex flex-col">
              Email Address
              <input
                type="email"
                className="border-[1px] border-slate-200  outline-none rounded-[6px] px-3 py-1 mt-1"
                placeholder="xxxxxx@gmail.com"
              />
            </div>
            <div className="flex flex-col">
              Pick-up Contact Number
              <input
                type="text"
                className="border-[1px] border-slate-200  outline-none rounded-[6px] px-3 py-1 mt-1"
                placeholder="xxxxxxxxxxxxxxxx"
              />
            </div>
            <div className="flex flex-col">
              Pick-up Secondary Contact Number (Optional)
              <input
                type="text"
                className="border-[1px] border-slate-200  outline-none rounded-[6px] px-3 py-1 mt-1"
                placeholder=""
              />
            </div>
            <div className="flex flex-col">
              Pan Number
              <input
                type="text"
                className="border-[1px] border-slate-200  outline-none rounded-[6px] px-3 py-1 mt-1"
                placeholder=""
              />
            </div>
            <div className="flex flex-col">
              GST
              <input
                type="text"
                className="border-[1px] border-slate-200  outline-none rounded-[6px] px-3 py-1 mt-1"
                placeholder=""
              />
            </div>
          </div>
        </div>

        <div className="p-5 bg-primary/10 flex items-center">
          <div>
            <div
              className="flex items-center select-none gap-3 text-[14px] font-[550]"
            >
              <div
                className={
                  "w-5 h-5 border-[2px] rounded-[4px] flex items-center justify-center bg-primary  border-primary"
                }
              >
              </div>
              Privacy Policy
            </div>

            <p className="w-[80%] text-[12px] mt-2">
              You acknowledge that you have read and understood our Privacy
              Policy.outlining how we collect, use, and protect your personal
              information,
            </p>
          </div>
          <button
            className="px-8 rounded-[6px] py-2 bg-[#0d824c] text-[16px] font-[600] text-white mt-3 whitespace-nowrap"
            onClick={() => toggleDrawerClose(false)}
          >
            Add Details
          </button>
        </div>
        </Box>
      </Drawer>
    </div>
  );
}
