import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Hero = () => {
  return (
    <main className='flex items-center justify-center w-full h-[100vh] bg-[#ebebfdec] ' id='hero'>
        <div className='absolute top-0 left-0 md:left-[400px] right-0 bottom-0 bg-black/10 z-[2] bg-fixed bg-center  bg-cover custom-img backdrop-blur '></div>
        <div className='p-4 flex text-left flex-col gap-4 leading-2 backdrop-blur-[8px] sm:backdrop-blur-sm absolute top-[50%] translate-y-[-50%] left-[4px] sm:left-4 z-[4]'>
        <h1 className='text-6xl sm:text-7xl font-light max-w-[720px] mb-4 p-4'>Revolutionize Your Healthcare Experience with HealthHQ</h1>
        <button className=' ml-4 px-8 py-2 border-black border hover:bg-white hover:text-black ease-in-out duration-300 font-semi w-[200px]'>Get Started</button>
        </div>
    </main>
  )
}

export default Hero