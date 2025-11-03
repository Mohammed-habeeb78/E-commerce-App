import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div >
            <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hazzle free exchane policy</p>
      </div>
      <div >
            <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
            <p className='font-semibold'>Top Notch Quality</p>
            <p className='text-gray-400'>We sell the number 1 quality products</p>
      </div>
      <div >
            <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
            <p className='font-semibold'>Best Customer Service</p>
            <p className='text-gray-400'>We offer 24/7 customer service</p>
      </div>
    </div>
  )
}

export default OurPolicy
