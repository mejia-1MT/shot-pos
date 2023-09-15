import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Add from '../components/Add'
import pen from '../assets/Inventory/pen.svg'
import trash from '../assets/Inventory/trash.svg'
import Edit from '../components/Edit'
import axios from 'axios'



function Inventory() {

    const [product, setProduct] =useState(null); 
    const [isOpen, setIsOpen] = useState(null)
    const [isEopen, setIsEopen] = useState(null)
    const [prodId, setProdId] = useState(null)


    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = async () => {
        fetch("http://localhost:9000/products")
        .then(res=> {
            return res.json();
        })
        .then(data => {
            setProduct(data)
        })
    }

    const handleDeleteRecord = async (recordId) => {
        try {
          await axios.delete(`http://localhost:9000/products/${recordId}`);
          // After successful deletion, update the list of records by refetching the data
        fetchProducts()
        } catch (error) {
          console.error('Error deleting record:', error);
        }
      };
    
    const handleEdit = (productId) => {
        setProdId(productId)
        setIsEopen(true)
    }

  return (
    <div className="bg-whitesmoke w-[1033px] text-xl font-poppins overflow-auto">
        <div className="flex items-center bg-white h-[104px]"> 
            <p className="m-0 ml-[42px] text-13xl font-semibold text-gray-200">Inventory</p>
        </div>
        <div className="relative top-[0px] left-[0px] w-full h-[920px]">
            <div className="relative flex justify-center items-center top-[16px] left-[16px] rounded-6xl bg-gray-400 w-[150px] h-[46px] z-1"> 
                <button className="bg-gray-400 text-white text-xl font-poppins"
                        onClick={() => setIsOpen(true)}>Product++</button>
                
            <Add open={isOpen} onClose={() => setIsOpen(false)}></Add>
            
            </div>

            <div className="relative top-[40px] left-[15px] rounded-mini bg-white  w-[97%] text-base text-darkslategray-200">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-14 py-10 ">
                        
                        {
                            product && product.map( data => {
                                return (
                                    <div className="relative flex rounded-6xl bg-whitesmoke w-[450px] h-[134px]" key={data.id}>
                                        <div className='w-[114px]'>
                                            <img className="absolute top-[-15px] left-[0px] w-[114px] h-[165px] object-cover" alt=""
                                            src={data.image}/>
                                        </div> 

                                        <div className="relative  font-semibold flex-grow flex flex-col justify-center ml-1">
                                            <div className="border border-white border-double rounded-t-md"> 
                                                <p className="ml-3 m-1">Name: {data.name}</p></div>
                                            <div className="border border-white border-double"> 
                                                <p className="ml-3 m-1">Price: ₱ {data.price}.00</p></div>
                                            <div className="border border-white border-double rounded-b-md"> 
                                                <p className="ml-3 m-1">Category: {data.category}</p></div>
                                        </div>
                                        <div className="bg-blue w-[75px] flex flex-col justify-center items-center">
                                            <div>
                                                <img className='bg-blue-500 p-2 rounded-md' alt=''
                                                src={pen} onClick={() => handleEdit(data.id)} data = {product}/>
                                                
                                            <Edit open={isEopen} onClose={() => setIsEopen(false)}
                                            productId={prodId}></Edit>
                                            </div>
                                            <div>
                                                <img className='bg-red-500 p-2 rounded-md' alt=''
                                                src={trash} onClick={() => handleDeleteRecord(data.id)}/> 
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    <div className="absolute left-[1321px] top-0 bg-black w-[434px] h-[1024px] overflow-hidden text-xl text-lightgray font-poppins">          
    </div> 
    </div>
  )
}

export default Inventory