import React from 'react'
import image1 from '../pics1/slider1.jpg'
import image2 from '../pics1/slider2.jpg'
import image3 from '../pics1/slider3.jpg'
import image4 from '../pics1/slider4.jpg'
import image5 from '../pics1/slider5.jpg'
import image6 from '../pics1/slider6.jpg'
import image7 from '../pics1/slider7.jpg'
import image10 from '../pics1/pic1.jpg'
import image11 from '../pics1/pic2.jpg'
import image12 from '../pics1/pic3.jpg'
import image13 from '../pics1/pic4.jpg'
import image14 from '../pics1/pic5.jpg'
import image15 from '../pics1/pic6.jpg'
import image16 from '../pics1/pic7.jpg'
import image17 from '../pics1/pic11.jpg'
import image18 from '../pics1/pic12.jpg'
import image19 from '../pics1/pic13.jpg'
import image20 from '../pics1/pic14.jpg'
import image30 from '../pics1/training.jpg'
import image31 from '../pics1/training1.jpg'
import image32 from '../pics1/training2.jpg'
import image33 from '../pics1/traning3.jpg'
import image34 from '../pics1/IMG_3477.jpg'
import image35 from '../pics1/IMG_3482.jpg'
import image36 from '../pics1/IMG_3483.jpg'
import image37 from '../pics1/IMG_3485.jpg'
import image38 from '../pics1/IMG_3486.jpg'
import image39 from '../pics1/IMG_3488.jpg'
import image40 from '../pics1/IMG_3491.jpg'
import image41 from '../pics1/IMG_3498.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
  return (
   <div className='pt-20' >
    <Carousel autoPlay infiniteLoop className='z-50'>
                <div>
                    <img src={image1} />

                </div>
                <div>
                    <img src={image2} />
                   
                </div>
                <div>
                    <img src={image3} />
                </div>
                <div>
                    <img src={image4} />
                </div>
                <div>
                    <img src={image5} />
                </div>
                <div>
                    <img src={image6} />
                </div>
                <div>
                    <img src={image7} />
                </div>
            </Carousel>
            <div className='flex gap-2 '>
                <div className='w-1/2'>
                <Carousel autoPlay infiniteLoop>
                <div>
                    <img src={image10} />

                </div>
                <div>
                    <img src={image11} />
                   
                </div>
                <div>
                    <img src={image12} />
                </div>
                <div>
                    <img src={image13} />
                </div>
                <div>
                    <img src={image14} />
                </div>
                <div>
                    <img src={image15} />
                </div>
                <div>
                    <img src={image16} />
                </div>
                <div>
                    <img src={image17} />
                </div>
                <div>
                    <img src={image18} />
                </div>
                <div>
                    <img src={image19} />
                </div>
                <div>
                    <img src={image20} />
                </div>
            </Carousel>
                </div>
                <div className='w-1/2 h-40' >
                <Carousel autoPlay infiniteLoop>
                <div>
                    <img src={image30} />

                </div>
                <div>
                    <img src={image31} />

                </div>
                <div>
                    <img src={image32} />
                   
                </div>
                <div>
                    <img src={image33} />
                </div>
                <div>
                    <img src={image34} />
                </div>
                <div>
                    <img src={image35} />
                </div>
                <div>
                    <img src={image36} />
                </div>
                <div>
                    <img src={image37} />
                </div>
                <div>
                    <img src={image38} />
                </div>
                <div>
                    <img src={image39} />
                </div>
               
                <div>
                    <img src={image41} />
                </div>
            </Carousel>
                </div>
            </div>
   </div>
  )
}
