import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Fetures from '@/components/Fetures'
import Product from '@/components/Product'
import Insights from '@/components/Insights'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
      <Navbar />
      <Hero />
      <Product  product='Products'/>
      <Fetures features='Features'/>
      <Insights  insights ='Insights'/>
      </>
  )
}
