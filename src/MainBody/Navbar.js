import React, { useState } from 'react'
import Image from '../Pics/m2logo1.png'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const down = {
        1: { label: 'Home', link: '/' },
        2: { label: 'Gallery', link: 'Gallery' },
        3: { label: 'Facilities', link: 'Facilities' },
        4: { label: 'About Us', link: 'AboutUs' },
      };
    
      const [icon, setIcon] = useState(<Icon icon="octicon:three-bars-16" />);
      const [showDropdown, setShowDropdown] = useState(false);
    
      const handleChange = () => {
        if (icon.props.icon === 'octicon:three-bars-16') {
          setIcon(<Icon icon="maki:cross" />);
          setShowDropdown(true);
        } else if (icon.props.icon === 'maki:cross') {
          setIcon(<Icon icon="octicon:three-bars-16" />);
          setShowDropdown(false);
        }
      };

  return (
    <div>
      <div className='grid grid-cols-3 fixed md:pl-8 pl-2  bg-black  text-white py-4 w-full pr-2 md:pr-8 z-10'>
        <div className='w-1/3'>
         <img src={Image} className='w-full md:w-7/12'  alt="Logo"/>
        </div>
        <div className='mx-auto hidden md:block lg:block'>
          <ul className='gap-8 flex pt-0 lg:pt-3 '>

          <Link to="/"> <li className='lg:text-lg'>Home</li></Link> 
        <Link to="/Gallery">    <li className='lg:text-lg'>Gallery</li></Link> 
        <Link to="/Facilities">     <li className='lg:text-lg'>Facilities</li></Link> 
        <Link to="/Aboutus">    <li className='lg:text-lg'>About us</li></Link> 
          </ul>
        </div>

        <div className='md:ml-auto  md:pt-3 md:hidden lg:hidden ml-48'>
      <button className="md:text-2xl lg:text-2xl p-1 text-xl   rounded-md" onClick={handleChange}>
             {icon}
            </button>
            {showDropdown && (
              <ul className="absolute top-12 right-0 bg-gray-950 text-white p-4">
                <li className="py-3 px-3"><Link to="/">Home</Link></li>
                <li className="py-3 px-3"><Link to="Gallery">Gallery</Link></li>
                <li className="py-3 px-3"><Link to="Facilities">Facilities</Link></li>
                <li className="py-3 px-3"><Link to="AboutUs">AboutUs</Link></li>
              </ul>
            )}

      </div>


      </div>
     
    </div>
  )
}
