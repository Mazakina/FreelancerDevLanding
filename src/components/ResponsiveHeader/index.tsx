'use client'

import localFont from 'next/font/local'
import { Roboto,Noto_Sans } from "next/font/google"
import Link from 'next/link'
import { useState } from 'react'
const blanka = localFont({ src: '../../../public/Blanka.otf' })

const roboto = Roboto({
  weight:'700',
  subsets:['latin']
})
export default function ResponsiveHeader(){

  let [modal, setModal] = useState(true)

  function modalButtonHandle(){
    setModal(false)
  }
  return(
    <>
      <header className='fixed shadow-md shadow-black z-30 [width:100%] hidden ss:flex bg-c-gray700'>
        <div className=' h-14 z-40 [width:100%] flex justify-center bg-c-gray700 '>
          <h2 className={` text-4xl  text-white ${blanka.className}`}>
            MAZA<span className="text-c-orange500">K</span>INA
          </h2>
        </div>
      </header>
      { modal &&
        <div id="header-overlay " className={`fixed  z-30 backdrop-blur-md text-white  [background-color:#0f13164e]  flex-col top-14 w-full hidden ss:flex [height:100vh] ${roboto.className}`} >
          <Link href="#home" onClick={modalButtonHandle} className='ml-10 mt-8 text-lg cursor-pointer' >
            Home
          </Link>
          <Link href='#skills' className='ml-10 mt-8 text-lg cursor-pointer'>
            Meus Trabalhos
          </Link>
          <Link href='#aboutMe' className='ml-10 mt-8 text-lg cursor-pointer'>
            Sobre Mim
          </Link>  
          <Link href='#contact' className='ml-10 mt-8 text-lg cursor-pointer'>
            Fale Comigo
          </Link>
        </div>
      }
    </>
  )
}