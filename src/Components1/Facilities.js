import React from 'react'
import image from '../Pics/yoga.webp'
import image1 from '../Pics/spinning.jpg'
import image2 from '../Pics/functional1.jpg'
import image3 from '../Pics/strength.webp'
import image4 from '../Pics/bollybeaats.jpg'
import image5 from '../Pics/zumba.jpg'

export default function UpperFront() {
  const imageStyles = {
    width: '100%',
    height: '50%',
    objectFit: 'cover',
  };

  return (
    <div className='pt-20 bg-black'>
      <header className='w-11/12 mx-auto bg-black text-white mt-1 pt-8 pb-4'>
        <h2 className='text-center text-2xl sm:text-4xl  py-2 font-bold '>
          FACILITIES AT  M2 Fitness Club
        </h2>
      </header>
      <div className='grid sm:grid-cols-1  lg:grid-cols-3 gap-y-16 lg:gap-10  w-11/12 mx-auto bg-black text-white pt-10 pl-6 pr-6'>
        <div className='border rounded-3xl '>
          <img src={image} className='rounded-tl-3xl rounded-tr-3xl' style={imageStyles} alt='Assassin Creed' />
          <div className=' '>
            <h2 className='text-center text-3xl p-2'>
            Yoga
            </h2>
            <p className='p-2 text-base'>Yoga is a practice that combines physical postures, breathing techniques, and meditation to promote physical and mental well-being. It helps improve flexibility, strength, and balance, reduces stress, and enhances overall relaxation. Yoga can also enhance focus and concentration.</p>
          </div>
        </div>
        <div className='border rounded-3xl'>
          <img src={image1} className='rounded-tl-3xl rounded-tr-3xl' style={imageStyles} alt='Battle Field' />
          <div className='  rounded-3xl '>
            <h3 className='text-center text-3xl p-2'>Spining</h3>
            <p className='p-2 text-base'>Experience the thrill of our intense spinning workouts at the gym! Ignite your fitness journey with high-energy cycling sessions, sculpting your body while torching calories. Join the spin revolution and pedal your way to a healthier, stronger you!</p>
          </div>
        </div>
        <div className='border rounded-3xl'>
          <img src={image2} className='rounded-tl-3xl rounded-tr-3xl' style={imageStyles} alt='GTA 5' />
          <div className=' rounded-3xl'>
            <h3 className='text-center text-3xl p-2'>Functional Training</h3>
            <p className='p-2 text-base'>Functional training consists of exercises that replicate everyday movements like bending, lifting, and walking. It helps improve strength and flexibility in our muscles, making daily tasks easier. This type of training enhances our overall physical fitness and well-being.</p>
          </div>
        </div>
      </div>

      <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-10 pt-5 w-11/12 mx-auto pb-4 md:pt-24 md:pb-16 bg-black text-white pl-6 pr-6'>
        <div className='border rounded-3xl'>
          <img src={image3} className='rounded-tl-3xl rounded-tr-3xl' style={imageStyles} alt='Assassin Creed' />
          <div className=''>
            <h2 className='text-center text-3xl p-2 '>
            Strength training
            </h2>
            <p className='text-base p-2'>
            Strength training is a form of exercise focused on lifting weights or using resistance to make muscles stronger. It helps increase muscle mass, improve bone density, and boost metabolism, promoting better overall physical health and strength.
            </p>
          </div>
        </div>
        <div className='border rounded-3xl'>
          <img src={image4} className='rounded-tl-3xl rounded-tr-3xl' style={imageStyles} alt='Battle Field' />
          <div className=''>
            <h3 className='text-center text-3xl p-2'>Aerobics</h3>
            <p className='text-base p-2'>Aerobics is a form of exercise that involves continuous, rhythmic movements like dancing, running, or cycling. It helps improve cardiovascular fitness, increases lung capacity, and burns calories, promoting a healthy heart and better endurance.</p>
          </div>
        </div>
        <div className='border rounded-3xl'>
          <img src={image5} className='rounded-tl-3xl rounded-tr-3xl' style={imageStyles} alt='GTA 5' />
          <div className=' '>
            <h3 className='text-center text-3xl p-2'>Zumba</h3>
            <p className='p-2 text-base'>Zumba is a fun and energetic dance-based fitness program. It helps improve cardiovascular fitness, enhances coordination, and burns calories, promoting overall health and well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
