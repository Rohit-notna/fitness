import React from 'react'
import image from '../Pics/m2logo2.png'

export default function M2fitness() {
  return (
    <div className='bg-[#35363a] pt-36'>
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 text-center  bg-black  w-11/12 mx-auto '>
      <div className='mx-auto'>
          <img className='mt-12 ' src={image} alt=""/>
        </div>
        <div className='p-10 '>
          <h1 className='text-6xl font-bold text-white '>M2 Fitness Club</h1>
          <p className='mt-8 text-md text-white'>Experience the essence of "Workout Happiness" at our gym, where our dedicated and energetic team is here to help you become a healthier and happier version of yourself. Our friendly and welcoming atmosphere encourages positive interactions and helps you reach your health goals. We offer a variety of fitness options customized to your unique needs, promoting a positive and health-focused mindset. With years of experience in the field, we firmly believe that sticking with your fitness routine comes from seeing real results. To achieve these results, our members just need to visit our gym regularly and use our different fitness programs designed to fit their health needs. Join us on the journey to real fitness success and long-lasting happiness.</p>
        </div>
       
      </div>
    </div>
  )
}
