import React from 'react'
import { Link } from 'react-router-dom';
import Title from '../assets/Dashboard/black-white-square-interior-designer-logo2-1@2x.png'
import Title1 from '../assets/Dashboard/black-white-square-interior-designer-logo2-11@2x.png';
import Vector3 from '../assets/Dashboard/vector-3.svg';
import Vector4 from '../assets/Dashboard/vector-4.svg';

function Navbar() {
  return (

        <div className='relative top-[0px] left-[0px] bg-black w-72 h-[1024px] overflow-hidden text-base text-lightgray font-poppins z-1'>
            <div className='absolute top-[0px] left-[0px] bg-gray-500 w-72 h-[104px] overflow-hidden text-xl'>
                <img 
                className="absolute top-[15px] left-[25px] w-[102px] h-[73px] object-cover"
                alt=""
                src={Title}
                />
                <p className="absolute top-[20px] left-[133px] font-semibold">SHOT Café!</p>
            </div>
            <Link to='/menu' className="absolute top-[132px] left-[30px] font-medium cursor-pointer no-underline text-white">Menu</Link>
            
            <img
                className="absolute top-[180px] left-[20px] w-[247.5px] h-0.5"
                alt=""
                src={Vector4}
                />
            <Link to='/settings' className="absolute top-[200px] left-[30px] font-medium cursor-pointer no-underline text-white">Settings</Link>
            <div className='absolute top-[835px] left-[14px] rounded-3xs bg-gray-500 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[260px] h-[180px] overflow-hidden text-sm'>
                <img 
                    className="absolute top-[-10px] left-[5px] w-[102px] h-[104px] object-cover"
                    alt=""
                    src={Title1}
                    />
                <img 
                    className="absolute top-[25.5px] left-[110px] w-0.5 h-[35px]"
                    alt=""
                    src={Vector3}
                />
                <p className="absolute top-[12px] left-[130px] text-lg font-semibold">SHOT Café!</p>
                <p className="absolute top-[63px] left-[18px] font-semibold">Help Center</p>
                <p className="absolute top-[63px] left-[149px] font-semibold">Legal</p>
                <div className='absolute top-[106px] left-[18px] text-xs inline-block w-[232px]'>
                    <p className="m-0">SHOT Café : A POS system created</p>
                    <p className='m-0'>by Group 1 of Polytechnic University of the Philippines 2023</p>
                </div>
            </div>
        </div>

    
  )
}

export default Navbar