import React from 'react'
import Vector5 from '../assets/Dashboard/vector-5.svg';

function Footer() {
  return (
    <div 
    // className="absolute top-[0px] left-[1321px] bg-black [filter:blur(4px)] w-[434px] h-[1024px] overflow-hidden"
    className="relative sticky bg-black w-[434px] h-[1024px] overflow-hidden text-xl text-lightgray font-poppins">
        <div className="relative top-[0px] left-[0px] bg-gray-500 w-[434px] h-[104px] overflow-hidden text-3xl">
            <p className="absolute top-[21px] left-[40px] m-0 text-xl font-semibold">Current Order</p>
            <p className="absolute top-[54px] left-[40px] m-0 text-mini font-semibold">Time Here!</p>
        </div>
        <div className="relative bg-gray w-[434px] h-[920px] overflow-hidden text-3xl">
            <div className="relative top-[18px] left-[40px] font-semibold">Orders</div>
            <div className="relative top-[35px] h-[55%]">
                 <div className="relative  flex flex-col justify-center items-center rounded-mini bg-gray-500 w-[98%] py-[5%] text-5xl font-semibold">
                    <div className="flex justify-between items-center rounded-3xs bg-gray-200 w-[90%] h-[47px] my-[3%] overflow-hidden">
                        <p className="text-base px-[5%] w-[50%]">Mocha Frappe</p>
                        <p className="text-base px-[5%] w-[15%]">1x</p>
                        <p className="text-base px-[5%] w-[35%]">₱ 120.00</p>
                    </div>  
                    
                </div>
            </div>

            <div className="relative left-[6px] rounded-mini bg-gray-500 w-[421px] h-[220px] overflow-hidden">
                <p className="absolute top-[25px] left-[34px] text-3xl font-semibold">Subtotal</p>
                <p className="absolute top-[77px] left-[34px] text-base font-semibold">Add-ons</p>
                <img
                    className="absolute top-[144px] left-[34px] w-[367px] h-0.5"
                    alt=""
                    src={Vector5}/>
                <p className="absolute top-[135px] left-[34px] text-5xl font-semibold">Total</p>
            </div>
            <div className="relative top-[20px] left-[6px] rounded-mini bg-gray-500 w-[421px] h-[150px] text-5xl font-semibold">
                <div className="flex justify-center items-center absolute top-[21px] left-[83px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden">
                    <p className="text-center text-base ">Cash</p>
                </div>
                <div className="flex justify-center items-center absolute top-[21px] left-[227px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden">
                    <p className="text-center text-base">E-wallet</p>
                </div>
                <div className="flex justify-center items-center absolute top-[84px] left-[64px] rounded-3xs bg-gray-200 w-[293px] h-[47px] overflow-hidden">
                    <p className="text-center text-base">Place Order</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer