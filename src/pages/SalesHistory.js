import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'

function SalesHistory() {

  const [isSalesOpen, setIsSalesOpen] =useState(false)
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch("http://localhost:9000/orders")
    .then(res=> {
        return res.json();
    })
    .then(data => {
        setProducts(data)
        console.log(products)
    })
}, []);

const formatTimeToHHMM = (timeString) => {
  const [time, period] = timeString.split(' ');
  const [hours, minutes] = time.split(':');

  let formattedHours = parseInt(hours, 10);
  if (period === 'PM' && formattedHours !== 12) {
    formattedHours += 12;
  } else if (period === 'AM' && formattedHours === 12) {
    formattedHours = 0;
  }

  const formattedTime = `${String(formattedHours).padStart(2, '0')}:${minutes}`;
  return formattedTime;
};

  const formatDateToDDMMYY = (dateString) => {
    const parsedDate = new Date(dateString);
    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1; // Month is 0-indexed, so we add 1 to get the correct month
    const year = parsedDate.getFullYear() % 100; // Get the last two digits of the year
  
    // Pad single-digit day and month with leading zeros if necessary
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;
  
    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  const [isSortedAsc, setIsSortedAsc] = useState(null)
  const [isSortedDesc, setIsSortedDesc] = useState(null)

  const sortDataByIdAsc = () => {
    const sortedData = [...products].sort((a, b) => a.id - b.id);
    setProducts(sortedData);
    setIsSortedAsc(true);
    setIsSortedDesc(false);
  };

  // Sort the data by ID in descending order
  const sortDataByIdDesc = () => {
    const sortedData = [...products].sort((a, b) => b.id - a.id);
    setProducts(sortedData);
    setIsSortedDesc(true);
    setIsSortedAsc(false);
  };

  const clickedOption = () => {
  setIsSalesOpen(false)
  sortDataByIdAsc()
  
  }


  const dclickedOption = () => {
  setIsSalesOpen(false)
  sortDataByIdDesc()

  }



  return (
    <div className="bg-whitesmoke w-[1033px] text-xl font-poppins overflow-y-auto overflow-x-hidden" >
      <div className="flex items-center bg-white h-[104px]"> 
        <p className="m-0 ml-[42px] text-13xl font-semibold text-gray-200">Sales History</p>
      </div>
      <div className="relative top-[0px] left-[0px] w-full h-[920px] bg-whitesmoke">
        <div className="relative top-[16px] left-[42px] font-semibold"><p>
          Products Sold</p></div>
        <div className= 'relative flex justify-end left-[700px] w-72 text-darkslategray-100 font-montserrat'>
          <div className='relative ml-l '>
            <p className='my-1  text-base'>Sales Date</p>
            <div className="relative flex flex-col items-center w-[250px] rounded-lg">
              <button onClick={() => setIsSalesOpen ((prev) => !prev)} className="bg-white px-4 py-3 w-full flex items-center text-base justify-between text-[#999999]  font-poppins rounded-lg tracking-wider border-2 border-transparent focus:border-gray-100 duration-300">
                Sort Sales Data
                {!isSalesOpen ? (
                  <BiChevronDown size={20} />
                ): (
                  <BiChevronUp size={20} />
                )}

              </button>
              {isSalesOpen && (
                 <div className='w-full absolute top-[3rem] z-50'>
                 <ul className="bg-white mt-1 flex flex-col items-start rounded-lg p-2 cursor-pointer list-none">
                   <li className="p-2 text-sm hover:text-blue-800 w-full px-4 py-3 w-full flex items-center text-base justify-between text-[#999999]  font-poppins" onClick={clickedOption} disabled={isSortedAsc}>Ascending</li>
                   <li className="p-2 text-sm hover:text-blue-800 w-full px-4 py-3 w-full flex items-center text-base justify-between text-[#999999]  font-poppins" onClick={dclickedOption} disabled={isSortedDesc}>Descending</li>

                 </ul>
               </div>
              )}
            </div>
          </div>
          <div className='relative ml-5'>
            <p className='my-1  text-base'>Payment Method</p>
            <div className="relative flex flex-col items-center w-[250px] rounded-lg">
              <input input type='text' placeholder='ID Number'
                onChange={(e) => setSearch(e.target.value)} className="bg-white px-4 m-0 py-3  w-[214px] flex items-center text-base justify-between text-gray-400  font-poppins rounded-lg tracking-wider border-2 border-transparent focus:border-gray-100 duration-300">

              </input >
 
            </div>
          </div>
        </div>

        <div className=" relative top-[30px] left-[15px] mb-5  bg-white  w-[97%] text-base text-darkslategray-200">
          <div className="flex justify-center p-5">
          
              
            <table className="relative w-full h-auto text-center table-fixed "> 
   
                    <thead>
                    <tr className=' bg-gray-100 text-white flex flex-row'>
                        <th className="border-l border-r border-solid border-white m-0 py-4 w-[10%]">ID</th>
                        <th className="border-l border-r border-solid border-white m-0 py-4 w-[10%]">Date</th>
                        <th className='border-l border-r border-solid border-white m-0 py-4 w-[10%] '>Time</th>
                        <th className="border-l border-r border-solid border-white m-0 py-4 w-[40%]">Orders</th>
                        <th className='border-l border-r border-solid border-white m-0 py-4 w-[10%]'>Quantity</th>
                        <th className='border-l border-r border-solid border-white m-0 py-4 w-[10%]'>Total</th>
                        <th className='border-l border-r border-solid border-white m-0 py-4 w-[10%]'>Payment</th>
                    </tr>
                    </thead>
                  <tbody>

                  { products && products.filter((data) => {
                    return search === '' ? data : String(data.id).includes(search)
                  }).map( data => {
                    return (
                      <tr className="bg-whitesmoke border border-gray-400 flex flex-row" key={data.id}>
                        
                        <td className="border-l border-r border-b border-solid border-white m-0 py-4 w-[10%]">{data.id}</td>
                        <td className="border-l border-r border-b border-solid border-white m-0 py-4 w-[10%]">{formatDateToDDMMYY(data.date)}</td>
                        <td className='border-l border-r border-b border-solid border-white m-0 py-4 w-[10%] '>{formatTimeToHHMM(data.time)}</td>
                        <td className="border-l border-r border-b border-solid border-white m-0 py-4 w-[40%] ">
                          {data.orders.map((order) => (
                           <div className='flex flex-row justify-between'key={order.id}>
                              <div className='flex justify-between w-[60%]'>
                                <p className="m-0 w-[70%]">{order.name}</p>
                                <p className="m-0">{order.quantity +'x'}</p>
                              </div>
                              <div className='w-[25%]'>
                                <p className="m-0 w-full text-center ">{'₱' + order.totalAmount + '.00'}</p>
                              </div>
                           </div> 
                           ))}
                           </td>
                        <td className='border-l border-r border-b border-solid border-white m-0 py-4 w-[10%]'>{data.order_quantity}</td>
                        <td className='border-l border-r border-b border-solid border-white m-0 py-4 w-[10%]'>{data.total}</td>
                        <td className='border-l border-r border-b border-solid border-white m-0 py-4 w-[10%]'>{data.payment_form}</td>

                      </tr>
                      )
                    })
                  
                   }
                </tbody>
                    
                   
            </table>

          </div>
        </div>  
      </div>
      <div className="absolute left-[1321px] top-0 bg-black w-[434px] h-[1024px] overflow-hidden text-xl text-lightgray font-poppins">          
      </div> 
    </div>
  )
}

export default SalesHistory;