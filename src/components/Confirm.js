import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BiCheck, BiQuestionMark } from 'react-icons/bi'

function Confirm({ open, purchasedProduct, total, payment_form,  time, date, onClose }) {


  const [confirmOpen, setConfirmOpen] = useState(false);
  const [products, setProducts] = useState()


  const handleConfirm = async () => {
    setConfirmOpen(true);
    const updatePromises = [];

  // Loop through the purchased products and create a promise to update the 'sold' value
     purchasedProduct.forEach((data) => {
    const productId = data.id;
    const newQuantity = data.quantity;
    const currentSold = parseInt(data.sold)

    // Create a promise for updating the 'sold' value for each product
    const updatePromise = axios.patch(`http://localhost:9000/products/${productId}`, {
      sold: currentSold + newQuantity, // Add the new quantity to the current 'sold' value
    });

    // Add the promise to the array
    updatePromises.push(updatePromise);
  });

  // Wait for all the update promises to resolve
  await Promise.all(updatePromises);

    handleFormSubmit();
  };


  

  const handleClose = () => {
    setConfirmOpen(false);
    onClose()
  }

  console.log('Cart Products:', purchasedProduct);
  console.log('Total Amount:', total);



  const [formData, setFormData] = useState({
    // Initialize formData with default values if needed
    id: 0,
    date: '',
    time: '',
    orders: [],
    total: 0,
    order_quantity: 0,
 
  });

  
  
  useEffect(() => {
    // Update the formData when the component mounts
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: date,
      time: time,
      orders: purchasedProduct.map((data) => ({
        name: data.name,
        quantity: data.quantity,
        totalAmount: data.totalAmount,
      })),
      total: total,
      order_quantity: purchasedProduct.reduce((acc, item) => acc + item.quantity, 0),
      payment_form: payment_form,
    }));
  }, [date, time, purchasedProduct, total, payment_form]);

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:9000/orders', formData);
      console.log('Record added successfully:', response.data);
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

 

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
  
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70">
      
        <div className="fixed top-1/2 left-1/2 w-[20%] h-[73%] transform -translate-x-1/2 -translate-y-1/2 bg-[#25282E] px-8 py-6 z-50 rounded-3xl text-white font-poppins " >
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25282e]'>
            <BiQuestionMark size={30}  className='text-[#25282e] m-4 p-2 bg-[#595959] rounded-full'/>
          </div>

          <div className='text-center py-3 px-5 border-b border-[#999999]  border-solid'>
            <p className='font-semibold text-3xl font-inter'>Confirmation</p>
            <p>Please check if the order is correct.</p>
          </div>
  

          <div className='text-center '>
            <p>Total Payment</p>
            <p className="font-semibold text-3xl my-[-4%]">₱ {total + '.00'}</p>
          </div>  
          <div className='grid grid-cols-2 gap-[10px] py-[8%] border-b border-[#999999] border-solid'>
            
            <div className=' border border-[#595959] border-solid rounded-lg'>
            <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Order ID</p>
                <p className="m-0 ">1</p> 
              </div>
            </div>
            <div className='border border-[#595959]  border-solid rounded-lg'>
            <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Order Date</p>
                <p className="m-0 ">{date}</p> 
              </div>
            </div>
            <div className=' border border-[#595959]  border-solid rounded-lg'>
            <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Payment Method</p>
                <p className="m-0 ">{payment_form}</p> 
              </div>
            </div>
            <div className=' border border-[#595959] border-solid rounded-lg'>
              <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Order Time</p>
                <p className="m-0 ">{time}</p> 
              </div>
            </div>
          </div>
      

          <div className='border border-[#595959] border-solid  rounded-lg mt-[7%] h-[200px]'>
            <div className='mx-3'>
              <p className='my-1 text-[#999999] text-xs'>Orders</p>
                { purchasedProduct&& purchasedProduct.map( data => {
                  return (
                    <div className='flex justify-between' key={data.id}>
                      <div className='flex justify-between w-[60%]'>
                        <p className="m-0 w-[70%]">{data.name}</p>
                        <p className="m-0">{data.quantity +'x'}</p>
                      </div>
                      <p className="m-0 ">{'₱' + data.totalAmount + '.00'}</p>
                    </div>
                  )
                })}
            </div>
          </div>  

          <div className="flex justify-center my-[5%]">
            <>
              <button
                      className=" relative w-[90px] h-[35px] mx-[1%] rounded-lg bg-[#25292E] text-white font-poppins border border-[#595959] border-solid"
                      onClick={handleConfirm}>
                      Confirm
              </button>

               
            </>
            <button
                    className=" relative w-[90px] h-[35px] mx-[1%] rounded-lg bg-[#25292E] text-white font-poppins border border-[#595959] border-solid"
                    onClick={onClose}   
                  >
                    Cancel
            </button>
          </div>
          <div className='text-center text-base mt-3'>
          © SHOT Café, 2023
          </div>
        </div>


        { confirmOpen && (

            <div className="fixed top-1/2 left-1/2 w-[20%]  h-[73%]  transform -translate-x-1/2 -translate-y-1/2 bg-[#25282E] px-8 py-6 z-50 rounded-3xl text-white font-poppins " >
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25282e]'>
                <BiCheck size={30}  className='text-[#25282e] m-4 p-2 bg-[#32BA7C] rounded-full'/>
              </div>
              
            <div className='text-center py-3 px-5 border-b border-[#999999]  border-solid'>
              <p className='font-semibold text-3xl font-inter'>Payment Success!</p>
              <p>Payment has been successfuly processed.</p>
            </div>
    
  
            <div className='text-center '>
            <p>Total Payment</p>
            <p className="font-semibold text-3xl my-[-4%]">₱ {total + '.00'}</p>
          </div>  
          <div className='grid grid-cols-2 gap-[10px] py-[8%] border-b border-[#999999] border-solid'>
            
            <div className=' border border-[#595959] border-solid rounded-lg'>
            <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Order ID</p>
                <p className="m-0 ">1</p> 
              </div>
            </div>
            <div className='border border-[#595959]  border-solid rounded-lg'>
            <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Order Date</p>
                <p className="m-0 ">{date}</p> 
              </div>
            </div>
            <div className=' border border-[#595959]  border-solid rounded-lg'>
            <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Payment Method</p>
                <p className="m-0 ">{payment_form}</p> 
              </div>
            </div>
            <div className=' border border-[#595959] border-solid rounded-lg'>
              <div className='ml-3'>
                <p className="my-1 text-[#999999] text-xs">Order Time</p>
                <p className="m-0 ">{time}</p> 
              </div>
            </div>
          </div>
      

          <div className='border border-[#595959] border-solid  rounded-lg mt-[7%] h-[200px]'>
            <div className='mx-3'>
              <p className='my-1 text-[#999999] text-xs'>Orders</p>
                { purchasedProduct&& purchasedProduct.map( data => {
                  return (
                    <div className='flex justify-between' key={data.id}>
                      <div className='flex justify-between w-[60%]'>
                        <p className="m-0 w-[70%]">{data.name}</p>
                        <p className="m-0">{data.quantity +'x'}</p>
                      </div>
                      <p className="m-0 ">{'₱' + data.totalAmount + '.00'}</p>
                    </div>
                  )
                })}
            </div>
          </div>  
            <div className="flex justify-center my-[5%]">
              <>
                <button
                        className=" relative w-[90px] h-[35px] mx-[1%] rounded-lg bg-[#25292E] text-white font-poppins border border-[#595959] border-solid"
                        onClick={handleClose} >
                        Confirm 
                </button>
  
                 
              </>
            </div>
            <div className='text-center text-base mt-3'>
              SHOT Café, 2023
            </div>
          </div>
    
        )}
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Confirm;