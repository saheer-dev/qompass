import React, { createContext, useState } from 'react'
import OrderManagement from './Home/OrderManagement'
import OverView from './Home/OverView'
import Summary from './Home/Summary'

export const ThemeContext = createContext();

export default function Home() {
    const [order, setOrder] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const toggleDrawerOpen = () => setIsDrawerOpen(true);
    const toggleDrawerClose = () => setIsDrawerOpen(false);

  return (
    <ThemeContext.Provider value={{order, setOrder, open, setOpen, handleOpen, handleClose, isDrawerOpen, setIsDrawerOpen, toggleDrawerOpen, toggleDrawerClose}}>
      <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col">
        <div className='lg:w-[70vw] md:w-[70vw] sm:w-[100vw] mt-6 ms-10'>
            <OrderManagement />
            <OverView />
        </div>

        <div className='lg:w-[30vw] md:w-[30vw] sm:w-[100vw] mt-6 me-10 ms-5'>
            <Summary />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
