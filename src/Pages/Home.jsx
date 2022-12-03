import React from 'react'
import logo from '../assets/logo.png'
import { BiSearch } from "react-icons/bi";
const Home = () => {
  return (
    <div className='max-w-[1240px] h-full   lg:mx-auto  flex justify-center items-center flex-col'>
      <img src={logo} alt="" className="object-contain w-20 lg:" />
      <p className="text-xl lg:text-2xl font-bold text-black">Landmark University</p>
      <p className="text-lg lg:text-xl font-bold text-black">Resource Manager</p>
      {/* Search  */}
      <div className="bg-white h-26 w-[90vw] h-10 flex justify-center items-center shadow-xl rounded-lg ">
      <div class="absolute  left-2 bottom- flex items-center pl-3 ml-2">
    <BiSearch size={22}/>
  </div>
  <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
</div>
      </div>

    
  )
}

export default Home