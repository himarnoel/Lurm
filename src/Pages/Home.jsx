import React from 'react'
import logo from '../assets/logo.png'
const Home = () => {
  return (
    <div className='max-w-[1240px]  bg-blue-300  mx-auto  flex justify-center items-center flex-col'>
      <img src={logo} alt="" className="object-contain" />
      <p className="text-3xl font-bold text-black">Landmark University</p>
      <p className="text-2xl font-bold text-black">Resource Manager</p>
      <div className="bg-red-500 h-26 w-[60vw] flex justify-center items-center ">
        <input type="button" value="sdfa" />
      </div>

    </div>
  )
}

export default Home