import React from 'react'
import ReactDOM from 'react'
import { BiCheck } from 'react-icons/bi'

function Receipt({open, children, onClose}) {

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#25282E] px-8 py-6 z-50 rounded-3xl text-white font-poppins " >
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25282e]'>
            <BiCheck size={30}  className='text-[#25282e] m-4 p-2 bg-[#595959] rounded-full'/>
          </div>

          <div className='text-center py-3 px-5 border-b border-[#999999]  border-solid'>
            <p className='font-semibold text-3xl font-inter'>Confirmation</p>
            <p>Please check if the order is correct.</p>
          </div>
  

          <div className='text-center '>
            <p>Total Payment</p>
            <p className="font-semibold text-3xl my-[-4%]">p 250.00</p>
          </div>  
          <div className='grid grid-cols-2 gap-[10px] py-[8%] border-b border-[#999999] border-solid'>
            
            <div className=' border border-[#595959] border-solid rounded-lg'>
            <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Order Time</p>
                <p className="m-0 ">11:25 PM</p> 
              </div>
            </div>
            <div className='border border-[#595959]  border-solid rounded-lg'>
            <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Order Time</p>
                <p className="m-0 ">11:25 PM</p> 
              </div>
            </div>
            <div className=' border border-[#595959]  border-solid rounded-lg'>
            <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Order Time</p>
                <p className="m-0 ">11:25 PM</p> 
              </div>
            </div>
            <div className=' border border-[#595959] border-solid rounded-lg'>
              <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Order Time</p>
                <p className="m-0 ">11:25 PM</p> 
              </div>
            </div>
          </div>
      

          <div className='border border-[#595959] border-solid  rounded-lg mt-[7%] h-[200px]'>
            <div className='mx-3'>
              <p className='my-1 text-[#999999] text-xs'>Orders</p>
                <div className='flex justify-between'>
                <p className="m-0">Mocha</p>
                <p className="m-0">1x</p>
                <p className="m-0">P 130.00</p>
              </div>
          </div>
        </div>  

          <div className="flex justify-center my-[5%]">
            <button
                    className=" relative w-[90px] h-[35px] mx-[1%] rounded-lg bg-[#25292E] text-white font-poppins border border-[#595959] border-solid"
                  >
                    Confirm
            </button>
          </div>
          <div className='text-center text-base mt-3'>
            SHOT Café, 2023
          </div>
        </div>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Receipt