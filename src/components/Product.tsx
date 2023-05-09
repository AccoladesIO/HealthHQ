import React from 'react'
import Image from 'next/image'

type ProductProps = {
    product: string
}
const Product = (props: ProductProps) => {
    const {product} = props
  return (
    <div className='w-full min-h-[100vh] flex justify-center items-center bg-[#ebebfdec] relative' id='products'>
        <div className='absolute top-0 left-0 md:right-[400px] right-0 bottom-0 bg-black/10 z-[2]'></div>

         <div className='flex item-center text-right flex-col md:flex-row leading-2 backdrop-blur-[4px]  z-[4] w-[95%] mx-auto bg-black/10 drop-shadow-xl'>
         <div className='w-full h-full flex justify-center items-center'>
        <Image
        src="/pharm.jpg"
        alt="My Image"
        width={700}
        height={700}
         />
        </div>
        <div className='w-full'>
        <h1 className='text-6xl sm:text-7xl font-light max-w-[720px] mb-4 p-4 text-left'>{product}</h1>      
        <div className='flex flex-col text-left p-4 z-[5] max-w-[600px]'>
            
            <h1 className='text-2xl '>We are partners with major Pharmarceutical companies</h1>
            <h2 className='text-xl mt-4'>you get the list of partner pharmacies, providing users with information about the pharmacies' locations, hours of operation, and available services.</h2>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Product