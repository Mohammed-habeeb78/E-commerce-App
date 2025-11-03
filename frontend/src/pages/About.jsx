import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-3xl text-center pt-8 border-t'>
        <Title text1={'About '} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit suscipit nostrum magnam, nihil quos laboriosam cumque beatae voluptatibus. Debitis error atque soluta laborum nulla sequi? Consequatur perspiciatis rem id.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum, quod incidunt accusamus repellendus eos facilis ipsam eaque officiis nulla sequi eum iure? Beatae architecto ipsam minima at quos eligendi.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi tenetur ipsa. Voluptates, deserunt quibusdam officiis vero labore doloremque facilis unde maiores tempora cupiditate doloribus saepe, maxime quod ipsum corporis.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'Why '} text2={'Choose Us?'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus obcaecati quibusdam laudantium modi doloremque quam amet illum voluptas perspiciatis eligendi, alias nulla porro necessitatibus inventore nobis quasi ipsum fugiat at?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convineince:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus obcaecati quibusdam laudantium modi doloremque quam amet illum voluptas perspiciatis eligendi, alias nulla porro necessitatibus inventore nobis quasi ipsum fugiat at?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Service:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus obcaecati quibusdam laudantium modi doloremque quam amet illum voluptas perspiciatis eligendi, alias nulla porro necessitatibus inventore nobis quasi ipsum fugiat at?</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
