import React from 'react'
import image from '../Pics/yoga.webp'
import image1 from '../Pics/spinning.jpg'
import image2 from '../Pics/functional1.jpg'
import image3 from '../Pics/strength.webp'
import image4 from '../Pics/bollybeaats.jpg'
import image5 from '../Pics/zumba.jpg'

export default function UpperFront() {
  return (
    <div className=''>
    <header>
     <h2 className='text-center text-2xl sm:text-4xl pt-24 py-2 font-bold '>
      FACILITIES AT  M2 FITNESS
     </h2>
   </header>
   <div className='grid sm:grid-cols-1  lg:grid-cols-3 gap-y-16 lg:gap-10 mt-4 w-11/12 mx-auto '>
     <div className='hover:bg-green-500  bg-black text-white '>
       <img src={image} className="object-cover w-full h-full"  alt='Assassin Creed' />
       <div>
         <h2 className='text-center bg-black text-white  text-3xl  p-2 '>
       Yoga
         </h2>
       </div>
     </div>
     <div className='hover:bg-green-500  bg-black text-white '>
       <img src={image1} className="object-cover w-full h-full" alt='Battle Field' />
       <div><h3 className='text-center  bg-black text-white text-3xl p-2'>Spining</h3></div>
     </div>
     <div className='hover:bg-green-500  bg-black text-white'>
       <img src={image2} className="object-cover w-full h-full" alt='GTA 5' />
       <div><h3 className='text-center bg-black text-white text-3xl p-2'>Functional Training</h3></div>
     </div>
   </div>

   <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-10 pt-20 w-11/12 mx-auto '>
     <div className='hover:bg-green-500   '>
       <img src={image3} className="object-cover w-full h-full" alt='Assassin Creed' />
       <div>
         <h2 className='text-center bg-black text-white  text-3xl p-2 '>
         Strength training
         </h2>
       </div>
     </div>
     <div className='hover:bg-green-500  bg-black text-white '>
       <img src={image4} className="object-cover w-full h-full" alt='Battle Field' />
       <div><h3 className='text-center bg-black text-white text-3xl p-2'>Aerobics</h3></div>
     </div>
     <div className='hover:bg-green-500  bg-black text-white '>
       <img src={image5} className="object-cover w-full h-full" alt='GTA 5' />
       <div><h3 className='text-center bg-black text-white text-3xl p-2'>Zumba</h3></div>
     </div>
   </div>
  

  
 </div>
  )
}
