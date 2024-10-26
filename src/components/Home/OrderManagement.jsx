import React, { useContext, useState } from 'react'
import consumebles from '../../assets/Consumables.png';
import electronics from '../../assets/electronics.png';
import sports from '../../assets/sports.png';
import cloths from '../../assets/cloths.png';
import house from '../../assets/house.png';
import others from '../../assets/other.png';
import carton from '../../assets/double box.png';
import box from '../../assets/box.png';
import { ThemeContext } from '../Home';
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function OrderManagement() {
    const [productCategory, setProductCategory] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [loadType, setLoadType] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectLoadType, setSelectedLoadType] = useState("");
    const [loadTypeCount, setLoadTypeCount] = useState("");
    const [values, setValues] = useState({
        volumetric: {
            length: "",
            breadth: "",
            height: "",
        },
        actualWeight: "",
        invoice: "",
    });
    const { order, setOrder } = useContext(ThemeContext);

    const handleSelectedProduct = (productCategory) => {
        setLoadType(true);
        setSelectedProduct(productCategory);
        setProductCategory(false);
    };
    
    const activateLoadType = (index, loadType) => {
        setActiveIndex(index);
        setSelectedLoadType(loadType);
        setLoadTypeCount(6);
    }

    const closeLoadType = () => {
        if(selectLoadType) {
            setLoadType(false);
            setValues({
                volumetric: {
                length: 12,
                breadth: 12,
                height: 12,
                },
                actualWeight: 100,
                invoice: "ADH52VR",
            });
        }
    }

    const handleOrder = () => {
        let currentOrder = {
          Invoice: "ADH52VR",
          loadType: selectLoadType,
          loadQuantity: 6,
          actualWeight: 100,
          volumetric: {
            length: 12,
            breadth: 12,
            height: 12,
          },
          productCategory: selectedProduct,
          hazmat: "No",
        };
        if (currentOrder.loadType && currentOrder.productCategory) {
          setOrder((prevOrder) => [...prevOrder, currentOrder]);
          setSelectedProduct("");
          setSelectedLoadType("");
          setLoadTypeCount("");
          setActiveIndex(null);
          setValues({
            volumetric: {
                length: "",
                breadth: "",
                height: "",
            },
            actualWeight: "",
            invoice: "",
          })
          Swal.fire({
            text: "Your Order Added",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      };
    
  return (
    <div className='border border-gray-300 rounded-md'>
      <div className='border-b-[1px]'>
        <div className='flex justify-between mx-5 py-4'>
            <p className='font-semibold'>Order Management</p>
            <button className='bg-[#3d64f0] text-white p-3 rounded-md text-sm '>New Order +</button>
        </div>
      </div>

      {/* product category */}

      <div className={
        productCategory
        ? 'flex justify-between bg-[#f4f9fc] py-6 px-7 mx-2 mt-5 rounded-md hidden'
        : 'flex justify-between bg-[#f4f9fc] py-6 px-7 mx-2 mt-5 rounded-md'
      }>
        <div>
            <p className='text-sm font-semibold'>Product Category</p>
        </div>
        <div>
            <input type="text" className='text-sm py-2 px-5 rounded-sm w-80 border' value={selectedProduct}/>
            <button className='text-[13px] bg-blue-200 text-gray-500 py-2 px-4 rounded-sm' onClick={() => setProductCategory(true)}>Change</button>
        </div>
      </div>

      <div className={
        productCategory
        ? 'px-7 mx-2 mt-5 pb-5 shadow-xl'
        : 'px-7 mx-2 mt-5 pb-5 shadow-xl hidden'
      }>
        <div className='flex justify-between py-6'>
            <p className='text-sm font-semibold'>Select Product Category</p>
        </div>
        <div className='flex'>
            <div className='border border-gray-200 w-2/12 m-2 py-5 rounded-lg flex hover:shadow-lg flex-col justify-center items-center' onClick={() => handleSelectedProduct("Consumables")}>
                <img src={consumebles} alt="consumebles" className='w-20 p-3' />
                <p className='text-sm font-semibold'>Consumables</p>
            </div>
            <div className='border border-gray-200 w-2/12 m-2 py-5 rounded-lg flex hover:shadow-lg flex-col justify-center items-center' onClick={() => handleSelectedProduct("Electronics")}>
                <img src={electronics} alt="electronics" className='w-20 p-3' />
                <p className='text-sm font-semibold'>Electronics</p>
            </div>
            <div className='border border-gray-200 w-2/12 m-2 py-5 rounded-lg flex hover:shadow-lg flex-col justify-center items-center' onClick={() => handleSelectedProduct("Sports")}>
                <img src={sports} alt="sports" className='w-20 p-3' />
                <p className='text-sm font-semibold'>Sports</p>
            </div>
            <div className='border border-gray-200 w-2/12 m-2 py-5 rounded-lg flex hover:shadow-lg flex-col justify-center items-center' onClick={() => handleSelectedProduct("Cloths")}>
                <img src={cloths} alt="cloths" className='w-20 p-3' />
                <p className='text-sm font-semibold'>Cloths</p>
            </div>
            <div className='border border-gray-200 w-2/12 m-2 py-5 rounded-lg flex hover:shadow-lg flex-col justify-center items-center' onClick={() => handleSelectedProduct("House")}>
                <img src={house} alt="house" className='w-20 p-3' />
                <p className='text-sm font-semibold'>House</p>
            </div>
            <div className='border border-gray-200 w-2/12 m-2 py-5 rounded-lg flex hover:shadow-lg flex-col justify-center items-center' onClick={() => handleSelectedProduct("Others")}>
                <img src={others} alt="others" className='w-20 p-3' />
                <p className='text-sm font-semibold'>Others</p>
            </div>
        </div>
      </div>

      {/* load type */}

      <div className={
        loadType
        ? 'flex justify-between bg-[#f4f9fc] py-6 px-7 mx-2 mt-5 rounded-md hidden'
        : 'flex justify-between bg-[#f4f9fc] py-6 px-7 mx-2 mt-5 rounded-md'
      }>
        <div>
            <p className='text-sm font-semibold'>Load Type</p>
        </div>
        <div>
            <input type="text" className='text-sm py-2 px-3 rounded-sm w-[160px] border' value={selectLoadType}/>
            <input type="text" className='text-sm py-2 px-3 rounded-sm w-[160px] border' value={loadTypeCount}/>
            <button className='text-[13px] bg-blue-200 text-gray-500 py-2 px-4 rounded-sm' onClick={() => setLoadType(true)}>Change</button>
        </div>
      </div>

      <div className={
        loadType
        ? 'px-7 mx-2 mt-5 pb-5 shadow-xl'
        : 'px-7 mx-2 mt-5 pb-5 shadow-xl hidden'
      }>
        <div className='flex justify-between py-6'>
            <p className='text-sm font-semibold'>Select Load Type</p>
        </div>
        <div className='flex'>
            {[
                { src: carton, label: 'Carton Box' },
                { src: box, label: 'Wooden Box' },
                { src: consumebles, label: 'Plastic' },
                { src: others, label: 'Others' },
            ].map((item, index) => (
                <div
                    key={index}
                    className={
                        activeIndex === index 
                            ? 'border border-blue-400 w-2/12 m-2 hover:shadow-lg py-5 rounded-lg flex flex-col justify-center items-center'
                            : 'border border-gray-200 w-2/12 m-2 hover:shadow-lg py-5 rounded-lg flex flex-col justify-center items-center'
                    }
                    onClick={() => activateLoadType(index, item.label)}
                >
                    <img src={item.src} alt={item.label} className='w-20 p-3' />
                    <p className='text-sm font-semibold'>{item.label}</p>
                </div>
            ))}
        </div>
        <div className='mt-4 flex justify-between'>
            <div>
                <button className='border border-blue-600 bg-blue-600 text-white text-sm font-semibold px-4 py-2'>Enter Quantity</button>
                <input type="text" className='border border-blue-600 w-20 text-sm font-semibold px-4 py-2' value={loadTypeCount} />
            </div>
            <div>
                <button className='border-[2px] border-gray-400 text-sm font-semibold px-4 py-2' onClick={closeLoadType}>Proceed</button>
            </div>
        </div>
      </div>

      {/* volumetric data */}

      <div className="flex flex-col md:flex-row md:justify-between bg-[#f4f9fc] py-6 px-4 md:px-7 mx-2 mt-5 mb-5 rounded-md space-y-4 md:space-y-0">
    <div className="w-full md:w-auto flex flex-col items-start">
        <div className="flex items-center space-x-2">
            <p className="text-sm font-semibold">Volumetric</p>
            <div className="flex space-x-2">
                <input
                    type="text"
                    className="text-sm py-1 px-3 rounded-sm w-[65px] sm:w-[75px] border text-[10px]"
                    placeholder="Length"
                    value={values.volumetric.length}
                />
                <input
                    type="text"
                    className="text-sm py-1 px-3 rounded-sm w-[65px] sm:w-[75px] border text-[10px]"
                    placeholder="Breadth"
                    value={values.volumetric.breadth}
                />
                <input
                    type="text"
                    className="text-sm py-1 px-3 rounded-sm w-[65px] sm:w-[75px] border text-[10px]"
                    placeholder="Height"
                    value={values.volumetric.height}
                />
            </div>
        </div>
        <p className="text-[10px] text-gray-500 mt-1">
            Length + Breadth + Height should be at least 15 cm
        </p>
    </div>

    <div className="w-full md:w-auto flex flex-col items-start">
        <div className="flex items-center space-x-2">
            <p className="text-sm font-semibold">Actual Weight</p>
            <div className="flex space-x-2">
                <input
                    type="text"
                    className="text-sm py-1 px-3 rounded-sm w-[65px] sm:w-[75px] border text-[10px]"
                    placeholder="Weight"
                    value={values.actualWeight}
                />
                <input
                    type="text"
                    className="text-sm py-1 px-4 rounded-sm w-[40px] sm:w-[50px] border text-[10px]"
                    defaultValue="kg"
                />
            </div>
        </div>
        <p className="text-[10px] text-gray-500 mt-1">
            Packaged weight should be at least 50 grams
        </p>
    </div>

    <div className="w-full md:w-auto flex flex-col items-start">
        <div className="flex items-center space-x-2">
            <p className="text-sm font-semibold">Invoice No</p>
            <input
                type="text"
                className="text-sm py-1 px-3 rounded-sm w-[75px] sm:w-[75px] border text-[10px]"
                placeholder="00000"
                value={values.invoice}
            />
        </div>
    </div>

    <div className="w-full md:w-auto flex justify-center items-center">
        <button
            className="bg-white text-gray-600 px-4 py-1 hover:bg-[#3d64f0] hover:text-white rounded-md text-sm"
            onClick={handleOrder}
        >
            Add Order +
        </button>
    </div>
</div>

    </div>
  )
}
