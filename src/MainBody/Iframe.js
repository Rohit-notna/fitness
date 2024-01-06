import React from 'react';


export default function Iframe() {
  return (
    <div className='bg-[#35363a] pt-28 pb-12'>
    <div className='text-white bg-black  w-11/12 mx-auto    pb-4 l pt-12 mb-12'>
    
      <div className='grid sm:grid-cols-1 lg:grid-cols-2  text-center md:text-left '>
        <div className='md:py-4 md:px-4 sm:px-4 sm:py-2   mt-6'>
        <h6 className='text-3xl font-bold  mt-8 '>Contact us</h6>
          <h6 className='text-3xl font-bold  mt-8'>Phone number</h6>
          <p className='mt-1  text-md '>9503363863, 9503271863</p>
          <h6 className='text-3xl font-bold  mt-8'>Timing</h6>
          <p className='mt-1  text-md '>6am-10pm</p>
          <h6 className='text-3xl font-bold  mt-8'>Location</h6>
          <p className='mt-1  text-md '>First Floor, ITI Rd, above Hotel Mainland China, near Sarjaa Hotel,<br></br>  Aundh, Pune, Maharashtra 411007</p>
        </div>
        <div className='p-10'>
        <iframe className='rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4807937367004!2d73.80673837393655!3d18.5523505682052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd98182a20f%3A0xe56b0a7d85e75b00!2sM2%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1698844851495!5m2!1sen!2sin" width="100%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    </div>
  );
}
