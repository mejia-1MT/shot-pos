import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Frappuccino from '../assets/Dashboard/14-1@2x.png';
import BlackBanner from '../assets/Dashboard/promot2@2x.png';
import Medal from '../assets/Dashboard/promot3-1@2x.png';



function Dashboard() {

  const [mostSoldProducts, setMostSoldProducts] = useState([]);
  const [mostRecentOrders, setMostRecentOrders] = useState([]);

  useEffect(() => {
    fetchMostSoldProducts();
    fetchMostRecentOrders();
  }, []);
  const fetchMostSoldProducts = async () => {
    try {
      // Fetch all products from the server
      const response = await axios.get('http://localhost:9000/products');

      // Sort products based on their sales count in descending order
      const sortedProducts = response.data.sort((a, b) => b.sold - a.sold);

      // Take the top 3 most sold products
      const top3MostSoldProducts = sortedProducts.slice(0, 3);

      // Update the state with the most sold products
      setMostSoldProducts(top3MostSoldProducts);
    } catch (error) {
      console.error('Error fetching most sold products:', error);
    }
  };
  
  const fetchMostRecentOrders  = async () => {
    try {
      // Fetch all products from the server
      const response = await axios.get('http://localhost:9000/orders');

      // Sort products based on their sales count in descending order
      const sortedOrders = response.data.sort((a, b) => b.total - a.total);

      // Take the top 3 most sold products
      const top3MostRecentOrders = sortedOrders.slice(0, 6);

      // Update the state with the most sold products
      setMostRecentOrders(top3MostRecentOrders);
    } catch (error) {
      console.error('Error fetching most sold products:', error);
    }
  };




  return (
    <div className="bg-whitesmoke w-[1033px] h-[1024] text-xl font-poppins">
      <div className="flex items-center bg-white h-[104px]"> 
        <p className="m-0 ml-[42px] text-13xl font-semibold text-gray-200">Dashboard</p>
      </div>
      <div className="relative top-[0px] left-[0px] w-full h-[920px] bg-whitesmoke inline-flex">
        <img
          className="mt-[12px] ml-[42px] rounded-3xs w-[950px] h-[500px] object-cover"
          alt=''
          src={BlackBanner}/>
          <div className="absolute top-[520px] left-[91px] overflow-hidden rounded-lg  ">
              <p className="absolute top-[0px] left-[0px] font-semibold">Summary of Orders</p>
                <div className=' relative w-auto top-[50px] bg-black px-5 pb-5 overflow-hidden rounded-lg'>
                  <div className='flex relative  justify-between items-center text-white py-2'>
                      <p className='m-0'>ID</p>
                      <p className='m-0'>Date</p>
                    <div className='flex w-[45%] justify-between'>
                      <p className='m-0'>Quantity</p>
                      <p className='m-0'>Amount</p>
                    </div>
                  </div>
                  <div className="">
              {
              mostRecentOrders && mostRecentOrders.map(data => {
                return (
                  
                    <div className="relative flex text-[#bababa] font-poppins  bg-[#25282e] p-3 justify-between items-center  left-[0px] mb-[7px] rounded-mini w-[365px] h-[50px]"  key={data.id}>
                      <p className='m-0 font-semibold'>{data.id}</p>
                      <p className='m-0'>{data.date}</p>
                      <p className='m-0 font-semibold'>{data.order_quantity + "x"}</p>
                      <p className='m-0 font-semibold'>{"₱"+data.total}</p>
                    </div>
                 
                )})
              }
                </div>
              </div>
          </div>
          <div className="absolute top-[520px] left-[581px] w-[388px]">
              <p className ="absolute top-[0px] left-[23px] font-semibold ">Top Seller</p>
              {mostSoldProducts && mostSoldProducts.map(data => {
                return (
                  <div className="h-auto" key={data.id}>
                    <div className="relative top-[45px] left-[23px] text-[#bababa] mb-[7px] rounded-mini bg-[#25282e] w-[365px] h-[100px] text-dimgray-200">
                      <img
                      className="absolute left-[15px] rounded-[244.5px] h-[100px] object-cover"
                      alt=""
                      src={data.image}/>
                      <p className="absolute top-[0px] left-[109px] font-semibold">{data.name}</p>
                      <p className="absolute top-[35px] left-[109px] font-semibold">Items Sold: {data.sold}</p>
                      <img 
                      className="absolute top-[0px] left-[310px] w-[55px] h-20 object-cover"
                      alt=""
                      src={Medal}/>
                    </div>
                  </div>
                )})
              }
          </div>
      </div>
      <div className="absolute left-[1321px] top-0 bg-black w-[434px] h-[1024px] overflow-hidden text-xl text-lightgray font-poppins">          
      </div>  
    </div>
 
      );
  
}

export default Dashboard