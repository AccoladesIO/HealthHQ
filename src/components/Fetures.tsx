import Image from 'next/image'
import React from 'react'
import Logo from './Logo'


type FeturesProps = {
    features: string
}
const Fetures = (props: FeturesProps) => {
    const { features } = props
    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-center items-center bg-[#dbf0fe] relative' id='features'>
            <div className='absolute top-0 left-0 md:right-[400px] right-0 bottom-0 bg-black/10 z-[2]'></div>

            <div className='flex item-center text-right flex-col-reverse md:flex-row-reverse leading-2 backdrop-blur-[4px]  z-[4] w-[95%] mx-auto bg-black/10 drop-shadow-xl'>
                <div className='w-full h-full flex justify-center items-center'>
                    <Image
                        src="/bg.avif"
                        alt="My Image"
                        width={700}
                        height={700}
                    />
                </div>
                <div className='w-full'>
                    <h1 className='text-6xl sm:text-7xl font-light max-w-[720px] mb-4 p-4 text-left'>{features}</h1>
                    <div className='flex flex-col text-left p-4 z-[5] max-w-[600px]'>
                        <h1 className='text-2xl '>Consolidate your information, medical history and appointments details in one place</h1>
                        <h2 className='text-xl mt-4'>Book appointments, save and export healthcare information conveniently and directly</h2>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fetures
