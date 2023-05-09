import React from 'react'
import img1 from '../../public/logo3.webp'
import img2 from '../../public/logo3.webp'
import img3 from '../../public/logo3.webp'
import img4 from '../../public/logo3.webp'
import LogoImg from './LogoImg'

const Logo = () => {
  return (
    <div className='flex justify-center items-center flex-col h-[100%] max-w-[1024px] mx-auto text-center py-4 z-[5] bg-purple-100 '>
        <p className='text-2xl font-bold px-4'>Trusted by top healthcare workers and million other users.</p>
        <p>HealthHQ</p>
        <div className='grid grid-cols-2  gap-2 p-4 w-[400px] mx-auto max-h-[550px]'>
            <LogoImg socialImg={img1}/>
            <LogoImg socialImg={img2}/>
            <LogoImg socialImg={img3}/>
            <LogoImg socialImg={img4}/>
        </div>
    </div>
  )
}

export default Logo