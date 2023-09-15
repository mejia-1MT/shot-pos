import React from 'react'
import { useState, useEffect } from 'react'
import {Link as Scroll} from 'react-scroll'
import Vector5 from '../assets/Dashboard/vector-5.svg';
import Confirm from '../components/Confirm'

function Menu() {

    const [payment, setPayment] = useState('Cash')


    const handleToggle = (method) => {
      setPayment(method);
    };

    const [cafe, setCafe] =useState(null); 
    const [premium, setPremium] = useState(null)
    const [cart, setCart] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [amountPaid, setAmountPaid] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetch("http://localhost:9000/products?category=Cafe")
        .then(res=> {
            return res.json();
        })
        .then(data => {
            setCafe(data)
        })
    }, []);

    useEffect(() => {
        fetch("http://localhost:9000/products?category=Premium-Cafe")
        .then(res=> {
            return res.json();
        })
        .then(data => {
            setPremium(data)
        })
    }, []);

    const addProductToCart = async(product) => {
      console.log(product)
      let findProductInCart = await cart.find(i => {
        return i.id === product.id
      });

      if(findProductInCart) {
        let newCart = [];
        let newItem;

        cart.forEach(cartItem => {
          if(cartItem.id === product.id){
            newItem = {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              totalAmount: cartItem.price * (cartItem.quantity + 1)
            }
            newCart.push(newItem);
          }else {
            newCart.push(cartItem);
          }
        });

        setCart(newCart);

      } else {
        let addingProduct = {
          ...product,
          'quantity': 1,
          'totalAmount': product.price 
        }
        setCart([...cart, addingProduct])
      }

    } 

    const clearCart = () => {
      setCart([]);
      setIsOpen(false)
    };
  

    const remove1Product = async (product) => {
      let newCart = [];
    
      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          if (cartItem.quantity > 1) {
            // If the quantity is greater than one, decrement the quantity by one
            const newItem = {
              ...cartItem,
              quantity: cartItem.quantity - 1,
              totalAmount: cartItem.price * (cartItem.quantity - 1),
            };
            newCart.push(newItem);
          } else {
            // If the quantity is one, don't include the product in the newCart array
            // This effectively removes the product from the cart
          }
        } else {
          newCart.push(cartItem);
        }
      });
    
      setCart(newCart);
    };


    useEffect(() => {
      let newTotalAmount = 0;
      cart.forEach(icart => {

        newTotalAmount = newTotalAmount + icart.totalAmount
      })
      setTotalAmount(newTotalAmount)
    },[cart])
    
    const handleAmountPaidChange = (event) => {
      const { value } = event.target;
      setAmountPaid(value);
    };
    
    const change = parseFloat(amountPaid) - totalAmount;

    // THIS IS FOR GETTING CURRENT TIME 
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [orderTime, setOrderTime] = useState(null);

    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true}
    const formattedTime = currentDateTime.toLocaleString(undefined, optionsTime);
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric'}
    const formattedDate = currentDateTime.toLocaleString(undefined, optionsDate);

    const formattedDateTime = `${formattedTime} - ${formattedDate}`
    
    useEffect(() => {
      // Function to update the current date and time every second
      const updateDateTime = () => {
        setCurrentDateTime(new Date());
      };

      // Call the updateDateTime function every second
      const intervalId = setInterval(updateDateTime, 1000);

      // Clear the interval when the component unmounts to prevent memory leaks
      return () => clearInterval(intervalId);
    }, []);

    const handlethis = () => {
      setOrderTime(formattedTime)
      setIsOpen(true)
    }
    


  return (
    <div className='flex flex-row'>
      <div className="bg-whitesmoke w-[1033px] text-xl font-poppins">
        <div className="flex items-center bg-white h-[104px]"> 
          <p className="m-0 ml-[42px] text-13xl font-semibold text-gray-200">Menu</p>
        </div>
        <div className="relative top-[0px] left-[0px] w-full h-[920px] bg-whitesmoke">
          <div className="flex relative top-[16px] left-[15px]">
            <Scroll to='relative top-[40px] left-[15px] mb-5 rounded-mini bg-white  w-[97%] text-base text-darkslategray-200' className="relative flex justify-center items-center rounded-6xl bg-gray-400 w-[107px] h-[46px] " smooth={true} duration={500} offset={-80} spy={true}>
                <div className="text-white " >
                    Cafe</div>
                    
            </Scroll>
            <Scroll to='relative top-[40px] left-[15px] mb-5 rounded-mini bg-white  w-[97%] text-base text-darkslategray-200'  className="relative flex left-[10px] justify-center items-center rounded-6xl bg-gray-400 w-48 h-[46px]" smooth={true} duration={500} offset={-80} spy={true}>
                <div className="text-white">
                    Premium Cafe</div>
            </Scroll>
          </div>
          <div className="relative top-[40px] left-[15px] mb-5 rounded-mini bg-white  w-[97%] text-base text-darkslategray-200">
            <div className="flex justify-center">
              <div className="grid grid-cols-4 gap-14 p-10 ml-[20px]">
                
                {
                  cafe && cafe.map( data => {
                      return (
                        <div className="relative rounded-6xl bg-whitesmoke w-[200px] h-[134px]" key={data.id}  onClick={() => addProductToCart(data)}>
                          <img className="absolute top-[-15px] left-[-45px] w-[114px] h-[165px] object-cover" alt=""
                          src={data.image}/>
        
                          <div className="absolute top-[30px] left-[73px] font-semibold">{data.name}</div>
                          <div className="relative top-[50px] left-[73px] text-sm font-medium inline-block w-[61px]">₱ {data.price}.00</div>
                        </div>      
                      )
                  })
                }
                
                
              </div>
            </div>
          </div>  
          <div className="relative top-[40px] left-[15px] mb-5 rounded-mini bg-white  w-[97%] text-base text-darkslategray-200">
            <div className="flex justify-center">
              <div className="grid grid-cols-4 gap-14 p-10 ml-[20px]">

                {
                  premium && premium.map( data => {
                      return (
                        <div className="relative rounded-6xl bg-whitesmoke w-[200px] h-[134px]" key={data.id}  onClick={() => addProductToCart(data)}>
                          <img className="absolute top-[-15px] left-[-45px] w-[114px] h-[165px] object-cover" alt=""
                          src={data.image}/>
        
                          <div className="absolute top-[30px] left-[73px] font-semibold">{data.name}</div>
                          <div className="relative top-[50px] left-[73px] text-sm font-medium inline-block w-[61px]">₱ {data.price}.00</div>
                        </div>       
                      )
                  })
                }
                
      
              </div>
            </div>
          </div>  
        </div>
    </div>
        <div className="relative bg-black w-[434px] h-[1024px] overflow-hidden text-xl text-lightgray font-poppins">
          <div className="relative top-[0px] left-[0px] bg-gray-500 w-[434px] h-[104px] overflow-hidden text-3xl">
              <p className="absolute top-[21px] left-[40px] m-0 text-xl font-semibold">Current Order</p>
              <p className="absolute top-[54px] left-[40px] m-0 text-mini font-semibold">{formattedDateTime}</p>
          </div>
          <div className="relative bg-gray w-[434px] h-[920px] overflow-hidden text-3xl">
              <div className="relative top-[18px] left-[40px] font-semibold">Orders</div>
              <div className="relative top-[35px] h-[55%]"> 
                  <div className="relative  flex flex-col justify-center items-center rounded-mini bg-gray-500 w-[98%] mb-text-5xl font-semibold">
                      <div className="flex justify-between items-center rounded-3xs bg-gray-400 w-[90%] my-[5%] overflow-hidden">
                          <p className="text-base px-[5%] my-0 w-[50%]">Product</p>
                          <p className="text-base px-[5%] my-0 w-[15%]">Quantity</p>
                          <p className="text-base px-[5%] my-0 w-[35%]">Price</p>
                      </div>  
                      { cart && cart.map((cartProduct, key) => 
                      
                      <div className="flex justify-between items-center rounded-3xs bg-gray-200 w-[90%] h-[47px] mb-[2%] overflow-hidden" onClick={() => remove1Product(cartProduct)} key={key}>
                        <p className="text-base px-[5%] w-[50%]">{cartProduct.name}</p>
                        <p className="text-base px-[5%] w-[15%]">{cartProduct.quantity}x</p>
                        <p className="text-base px-[5%] w-[35%]">₱ {cartProduct.price * cartProduct.quantity} .00</p>
                      </div>  )}  
                      
                      
                  </div>
              </div>

              <div className="relative left-[6px] rounded-mini bg-gray-500 w-[421px] h-[220px] overflow-hidden">
                  <p className="absolute top-[25px] left-[50px] text-3xl font-semibold">Paid:  ₱<input type='text' pattern='[0-9]*' value={amountPaid}
                  onChange={handleAmountPaidChange} placeholder="00.00" className='text-3xl bg-gray-500 text-white focus:outline-none font-semibold font-poppins w-[25%]'></input> </p>
                  <p className="absolute top-[77px] left-[34px] text-base font-semibold">Change: ₱{ change ? change.toFixed(2): '00.00'}</p>
                  <img
                      className="absolute top-[144px] left-[34px] w-[367px] h-0.5"
                      alt=""
                      src={Vector5}/>
                  <p className="absolute top-[135px] left-[34px] text-5xl font-semibold">Total: ₱{` ` + totalAmount + '.00'}</p>
               
              </div>
              <div className="relative top-[20px] left-[6px] rounded-mini bg-gray-500 w-[421px] h-[150px] text-5xl font-semibold">
                  <div className="flex justify-center items-center absolute top-[21px] left-[83px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden"
                  onClick={() => handleToggle('Cash')}>
                      <p type='button' className="text-center text-base ">Cash</p>
                  </div>
                  <div className="flex justify-center items-center absolute top-[21px] left-[227px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden"
                  onClick={() => handleToggle('E-wallet')}>
                      <p className="text-center text-base">E-wallet</p>
                  </div>
                  <div className="flex justify-center items-center absolute top-[84px] left-[64px] rounded-3xs bg-gray-200 w-[293px] h-[47px] overflow-hidden">
                  <div className="z-1"> 
                    <button className="text-center text-base bg-gray-200 text-white font-poppins"
                            onClick={handlethis}>Place Order</button>
                        
                    <Confirm open={isOpen} onClose={clearCart} 
                    purchasedProduct={cart} 
                    total={totalAmount} 
                    change={change} 
                    amountPaid ={amountPaid}
                    time={orderTime}
                    date={formattedDate}
                    payment_form={payment}
                    ></Confirm>
                    
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default Menu