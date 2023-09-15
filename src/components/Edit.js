import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'
import axios from 'axios'


function Edit ({ open, children, productId, onClose }) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  
  console.log(productId)

  const addRecordToServer = async (data) => {
    try {
      const response = await axios.put(`http://localhost:9000/products/${productId}`, data);
      console.log('Record added successfully:', response.data);
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  const handleEdit = (event) => {
    event.preventDefault();
   
    handleFormSubmit(event);
    onClose();

    
  };



  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newData = {
      name: name,
      price: parseInt(price),
      category: category,
      image: image,
      sold : 0
    };
   
    addRecordToServer(newData);
    // Clear the form fields after submission
    setName('');
    setPrice('');
    setCategory('');
    setImage('');
  };


  if (!open) return null;
  

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-5" />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 z-50 rounded-3xl" >
        
        
        <form className="relative rounded-3xl bg-whitesmoke w-[450px] py-5 ">
        
        <div className="relative  font-semibold flex-grow flex flex-col justify-center mx-5 font-poppins">
            <input type='text' value={name}
            onChange={(e) => setName(e.target.value)}
            required placeholder="Name: " className="text-5xl font-semibold p-2 bg-whitesmoke border border-white border-double rounded-t-md" />

            <input type='text' value={price}
            onChange={(e) => setPrice(e.target.value)}
            required placeholder="Price: " className="text-5xl font-semibold p-2 bg-whitesmoke border border-white border-double" />

            <input type='text' value={category}
            onChange={(e) => setCategory(e.target.value)}
            required placeholder="Category: " className="text-5xl font-semibold p-2 bg-whitesmoke border border-white border-double" />
           
            <input type='text' value={image}
            onChange={(e) => setImage(e.target.value)}
            required placeholder="Image Path: " className="text-5xl font-semibold p-2 bg-whitesmoke border border-white border-double rounded-b-md" />
          </div>

          <div className='px-5 pt-5 flex justify-between'>
            <button
                className="relative w-[25%] h-[46px] rounded-3xl bg-blue-500 text-white text-xl font-poppins"
        
                onClick={handleEdit}
              >
                Edit
              </button>

              <button
                className=" relative w-[25%] h-[46px] rounded-3xl bg-gray-400 text-white text-xl font-poppins"
                onClick={onClose}   
              >
                Close
            </button>
          </div>
        </form>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Edit ;
