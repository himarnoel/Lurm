import React from 'react'
import logo from '../assets/logo.png'
const Home = () => {
  return (
    <div className='max-w-[1240px] h-full   lg:mx-auto  flex justify-center items-center flex-col'>
      <img src={logo} alt="" className="object-contain w-20 lg:" />
      <p className="text-xl lg:text-2xl font-bold text-black">Landmark University</p>
      <p className="text-lg lg:text-xl font-bold text-black">Resource Manager</p>
      <div className="bg-white h-26 w-[90vw] flex justify-center items-center shadow-xl rounded-lg ">
            <input type="text" id=""
             className="bg-gray-50  text-gray-900 text-sm   w-full p-1.5 rounded-lg"  required/>
      </div>

    </div>
  )
}

export default Home