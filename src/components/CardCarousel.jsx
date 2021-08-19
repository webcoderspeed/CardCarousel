import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { data } from '../data';
import { GoClock } from 'react-icons/go';
import { SiAdobeacrobatreader } from 'react-icons/si';
import { BsBookmarkFill, BsFillBookmarkFill } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';


const CardCarousel = () => {


  const Card = data?.map(item => {
          return (
            <div key={item.id}
            className='rounded-md bg-white shadow-md w-96'
            >
              <div>
                <img src={item.image} alt={item.title} 
                  className='rounded-t-md h-full w-full'
                />
                <h1
                className='text-white bg-gradient-to-r from-indigo-400 via-white via-blue-600 to-blue-800 flex items-center font-semibold px-4 py-2 text-xl gap-2'
                >
                  <GoClock className='mt-1 text-2xl'/>
                  {item.startIn}</h1>
              </div>
              <div className='flex flex-col gap-10 p-4'>
                  <h1 className='font-bold text-xl md:text-2xl text-left'>{item.title.substring(0, 40)+'...'}</h1>
                  <div>
                   <div className='flex-1 flex items-center gap-2'>
                     <AiOutlineYoutube className='text-red-400 text-xl mt-1'/>
                     <span className='text-gray-800 opacity-50 font-semibold'>{item.classes}</span>
                   </div>
                   <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center gap-2'>
                     <BsBookmarkFill className='text-yellow-400 text-xl mt-1'/>
                     <span className='text-gray-800 opacity-50 font-semibold'>{item.question}</span>
                   </div>
                   <div className='flex items-center gap-2'>
                     <SiAdobeacrobatreader className='text-red-800 text-xl mt-1'/>
                     <span className='text-gray-800 opacity-50 font-semibold'>{item.notes}</span>
                   </div>
                   </div>
                  </div>
              </div>
            </div>
          )
        })


  return (
    <Carousel 
    autoPlay infiniteLoop showThumbs={false}  showStatus={false} className='w-full mt-4' 
    showArrows={false}
    >
      <div className='p-4 flex justify-center items-center gap-5 md:flex-row flex-col'>
          {Card}
      </div>
      <div className='p-4 flex justify-center items-center gap-5 md:flex-row flex-col'>
          {Card}
      </div>
      <div className='p-4 flex justify-center items-center gap-5 md:flex-row flex-col'>
          {Card}
      </div>
    </Carousel>
  )
}

export default CardCarousel
