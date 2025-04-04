import React from 'react'
import { Bebas_Neue, Tiro_Devanagari_Hindi } from 'next/font/google';

const bebasFont = Bebas_Neue({
  subsets: ['latin'],
  weight : "400"
})

const devanagari = Tiro_Devanagari_Hindi({
  subsets: ['devanagari'],
  weight: '400',
});

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
     
      <p className={`${bebasFont.className} text-5xl text-amber-800 text-shadow-md
         text-shadow-amber-300 animate-bounce`}>I am using the imported font.</p>
       
      <p className={`${devanagari.className}`}>मेरा नाम आदर्श गुप्ता है।</p>
    </div>
  )
}

export default Home
