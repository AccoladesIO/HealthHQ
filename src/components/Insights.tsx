import React from 'react'
import Logo from './Logo'


type InsightsProps = {
    insights: string
}
const Insights = (props: InsightsProps) => {
    const {insights} = props
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-[#dbf0fe] relative' id='insights'>
        <div className='absolute top-0 left-0 md:right-[400px] right-0 bottom-0 bg-black/10 z-[2]'></div>
        <div className='flex flex-col-reverse md:flex-row items-center justify-center bg-black/10'>
        <div className='w-full'>
        <h1 className='text-6xl sm:text-7xl font-light max-w-[600px] mb-4 p-4 text-left'>{insights}</h1>      
        <div className='flex flex-col text-left p-4 z-[5] max-w-[600px]'>
            
            <h1 className='text-2xl '>We are partners with major Pharmarceutical companies</h1>
            <h2 className='text-xl mt-4'>you get the list of partner pharmacies, providing users with information about the pharmacies' locations, hours of operation, and available services.</h2>
        </div>
        </div>

        <Logo />
        </div>
    </div>
  )
}

export default Insights