import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex item-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-4 py-2 sm:px-4 sm:py-2 rounded-full h-10 sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
