import React from 'react'
import logo from '../assets/logo.png'
const Home = () => {
  return (
    <div className='max-w-[1200px]   h-full mx-auto  flex justify-center items-center flex-col'>
      <img src={logo} alt="" className="object-contain" />
      <p className="text-2xl font-bold text-black">Landmark University</p>
      <p className="text-xl font-bold text-black">Resource Manager</p>
        
    </div>
  )
}

export default Home