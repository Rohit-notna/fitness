import React from 'react';
import image from '../Pics/back1.avif';

export default function Back() {
  const backgroundImage = `url(${image})`;
  const styles = {
    backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set the height of the container to 100% of the viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Set text color to white or another color for better visibility
  };

  return (
    <div>
      <div style={styles}>
        <div className='flex'>
          <h1 className='lg:text-9xl lg:ml-96 text-4xl md:text-6xl ml-20 text-red-900 font-extrabold'>M2</h1>
          <h1 className='lg:text-9xl text-4xl md:text-6xl text-black font-extrabold mb-30'>Fitness <br /> Club</h1>
        </div>
      </div>
    </div>
  );
}
