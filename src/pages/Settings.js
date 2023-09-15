import React, { useNavigate } from 'react'
import { Link } from 'react-router-dom';
import Ced from '../assets/Settings/Ced.png';
import Nard from '../assets/Settings/Nard.png';
import Meji from '../assets/Settings/Meji.png';
import Low from '../assets/Settings/Low.png';
import Git from '../assets/Settings/Git.svg';
import Google from '../assets/Settings/Google.svg';
import Facebook from '../assets/Settings/Facebook.svg';

function Settings() {

  return (
    <div className="bg-whitesmoke w-[1033px] text-xl font-poppins">
      <div className="flex items-center bg-white h-[104px]"> 
        <p className="m-0 ml-[42px] text-13xl font-semibold text-gray-200">Settings</p>
      </div>
      <div className="relative flex justify-center top-[0px] left-[0px] w-full h-[920px] bg-whitesmoke inline-flex">
        <div className="absolute top-[36px] left-[389px] font-medium">
          Created and Design by:
        </div>
        <div className="absolute top-[51px] left-[443px] text-17xl font-semibold">
          GROUP 1
        </div>
        <div className="flex justify-center h-[700px] mt-40">
          <div className="grid grid-cols-2 gap-5">
            <div className="w-[300px] h-[275px] ">
              <div className="relative  rounded-6xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[300px] h-[275px]">
              
                <div className="absolute top-[-25%] left-[50px] rounded-[50%] bg-gainsboro w-[200px] h-[200px]">
                  <img className="absolute h-[100%]  rounded-81xl max-w-full overflow-hidden max-h-full object-cover" alt=""
                  src={Low}/>
                </div>
              
                <div className="absolute top-[145px] left-[49px] font-semibold">
                  John Louie Campos</div>
                  <Link to='https://github.com/CodexLoww' target='.blank'><img className="absolute top-[224px] left-[168px] w-5 h-5 overflow-hidden" alt=""
                  src={Git}/> </Link>
                <Link to='mailto:johnlouiecampos18@gmail.com' target='.blank'><img className="absolute top-[224px] left-[140px] w-5 h-5 overflow-hidden" alt=""
                  src={Google}/></Link>
                <Link to='https://www.facebook.com/Jlc31Lowenggg/' target='.blank'><img className="absolute top-[224px] left-[112px] w-5 h-5 overflow-hidden" alt=""
                  src={Facebook}/></Link>
                <div className="absolute top-[175px] left-[89px] text-base font-medium text-black">
                  UI/UX Designer</div>
              </div> 
            </div>   
            <div className="w-[300px] h-[275px]">
              <div className="relative  rounded-6xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[300px] h-[275px]">
              
                <div className="absolute top-[-25%] left-[50px] rounded-[50%] bg-gainsboro w-[200px] h-[200px]">
                  <img className="absolute h-[100%]  rounded-81xl max-w-full overflow-hidden max-h-full object-cover" alt=""
                  src={Meji}/>
                </div>
              
                <div className="relative top-[145px] left-[49px] font-semibold">
                  Juan Paulo Mejia</div>
                  <Link to='https://github.com/mejia-1MT' target='.blank'><img className="absolute top-[224px] left-[168px] w-5 h-5 overflow-hidden" alt=""
                  src={Git}/> </Link>
                <Link to='mailto:mejiapaulo13@gmail.com' target='.blank'><img className="absolute top-[224px] left-[140px] w-5 h-5 overflow-hidden" alt=""
                  src={Google}/></Link>
                <Link to='https://www.facebook.com/s0mejuan' target='.blank'><img className="absolute top-[224px] left-[112px] w-5 h-5 overflow-hidden" alt=""
                  src={Facebook}/></Link>
                <div className="absolute top-[175px] left-[89px] text-base font-medium text-black">
                  UI/UX Designer</div>
              </div> 
            </div>
            <div className="w-[300px] h-[275px]">
              <div className="relative rounded-6xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[300px] h-[275px]">
              
                <div className="absolute top-[-25%] left-[50px] rounded-[50%] bg-gainsboro w-[200px] h-[200px]">
                  <img className="absolute h-[100%]  rounded-81xl max-w-full overflow-hidden max-h-full object-cover" alt=""
                  src={Nard}/>
                </div>
              
                <div className="absolute top-[145px] left-[49px] font-semibold">
                  Leinard Rapiza</div>
                  <Link to='/' target='.blank'><img className="absolute top-[224px] left-[168px] w-5 h-5 overflow-hidden" alt=""
                  src={Git}/> </Link>
                <Link to='mailto:elrapiza@gmail.com' target='.blank'><img className="absolute top-[224px] left-[140px] w-5 h-5 overflow-hidden" alt=""
                  src={Google}/></Link>
                <Link to='https://www.facebook.com/leinard.rapiza.03' target='.blank'><img className="absolute top-[224px] left-[112px] w-5 h-5 overflow-hidden" alt=""
                  src={Facebook}/></Link>
                <div className="absolute top-[175px] left-[89px] text-base font-medium text-black">
                  UI/UX Designer</div>
              </div> 
            </div>
            <div className="w-[300px] h-[275px]">
              <div className="relative rounded-6xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[300px] h-[275px]">
              
                <div className="absolute top-[-25%] left-[50px] rounded-[50%] bg-gainsboro w-[200px] h-[200px]">
                  <img className="absolute h-[100%]  rounded-81xl max-w-full overflow-hidden max-h-full object-cover" alt=""
                  src={Ced}/>
                </div>
              
                <div className="absolute top-[145px] left-[49px] font-semibold">
                  John Cedrick Tolentino</div>
                <Link to='/' target='.blank'><img className="absolute top-[224px] left-[168px] w-5 h-5 overflow-hidden" alt=""
                  src={Git}/> </Link>
                <Link to='mailto:johncedrick0408@gmail.com' target='.blank'><img className="absolute top-[224px] left-[140px] w-5 h-5 overflow-hidden" alt=""
                  src={Google}/></Link>
                <Link to='https://www.facebook.com/johncedrick.tolentino.3' target='.blank'><img className="absolute top-[224px] left-[112px] w-5 h-5 overflow-hidden" alt=""
                  src={Facebook}/></Link>
                <div className="absolute top-[175px] left-[89px] text-base font-medium text-black">
                  UI/UX Designer</div>
              </div> 
            </div>
          </div>   
        </div>
        <div className="absolute top-[849px] left-[33px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden cursor-pointer text-mini text-lightgray">
          <div 

          className="text-white absolute top-[12px] left-[30px] font-semibold inline-block w-[53px]">
         
         Logout</div>
        </div>
      </div>
      <div className="absolute left-[1321px] top-0 bg-black w-[434px] h-[1024px] overflow-hidden text-xl text-lightgray font-poppins">          
      </div> 
    </div>
  )
}

export default Settings