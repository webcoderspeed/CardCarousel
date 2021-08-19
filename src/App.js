import React from 'react';
import CardCarousel from './components/CardCarousel';


const App = () => {
  return (
    <div className='bg-gray-100 p-4'>
      <div className='flex justify-center md:justify-start gap-5 items-center'>
          <div className='flex items-center justify-center gap-2 bg-red-600 opacity-80 rounded-md px-2 py-1'>
            <span className='bg-white p-1 rounded-full'></span>
            <span className='text-white font-bold md:text-2xl uppercase'>Live</span>
          </div>
          <h1 className='font-bold md:text-2xl'>Upcoming Live Coaching</h1>
        </div>
      <CardCarousel />
    </div>
  )
}

export default App

