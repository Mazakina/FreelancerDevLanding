'use client'

import localFont from 'next/font/local'
import { Orbitron,Noto_Sans } from "next/font/google"
import Link from 'next/link'
import { useState } from 'react'
import {BiHome , BiUserPin , BiMessageAltDetail } from "react-icons/bi"
import {BsCodeSlash} from "react-icons/bs"
import {IoArrowBackOutline} from "react-icons/io5"
import {BsList} from "react-icons/bs"

const blanka = localFont({ src: '../../../public/Blanka.otf' })

const orbitron = Orbitron({
  weight:'700',
  subsets:['latin']
})
export default function ResponsiveHeader(){

  let [modal, setModal] = useState(false)


  function modalButtonHandle(){
    setModal(!modal)
  }
  return(
    <>
      <header className='fixed shadow-md shadow-black z-30 [width:100%] hidden ss:flex bg-c-gray700'>
        <div className=' h-14 z-40 [width:100%] flex justify-center bg-c-gray700 '>
          <h2 className={` text-4xl mr-8 text-white ${blanka.className}`}>
            MAZA<span className="text-c-orange500">K</span>INA
          </h2>
        </div>
        <button onClick={modalButtonHandle} className='z-40 ml-6 [top:10px] absolute  text-4xl hover:text-c-green500 text-white'>
          {modal? 
            <IoArrowBackOutline/>:  <BsList/>
          }
        </button>
      </header>
      { modal &&
        <div id="header-overlay " className={`fixed  z-30 backdrop-blur-md text-white  [background-color:#0f13164e]  flex-col top-14 w-full hidden ss:flex [height:100vh] ${orbitron.className}`} >
          <Link href="#home" onClick={modalButtonHandle} className='flex  ml-10 mt-8 text-lg cursor-pointer' >
            <BiHome className='my-auto mr-3 text-2xl text-c-green500'/>  <p className=''>Home</p>
          </Link>
          <Link href='#skills' onClick={modalButtonHandle} className='flex  ml-10 mt-8 text-lg cursor-pointer'>
            <BsCodeSlash className='my-auto mr-3 text-2xl text-c-green500'/>  <p className=''>Meus Trabalhos</p>
          </Link>
          <Link href='#aboutMe' onClick={modalButtonHandle} className='flex  ml-10 mt-8 text-lg cursor-pointer'>
            <BiUserPin className='my-auto mr-3 text-2xl text-c-green500'/>  <p className=''>Sobre Mim</p>
          </Link>  
          <Link href='#contact' onClick={modalButtonHandle} className='flex  ml-10 mt-8 text-lg cursor-pointer'>
            <BiMessageAltDetail className='my-auto mr-3 text-2xl text-c-green500'/>  <p className=''>Fale Comigo</p>
          </Link>
        </div>
      }
    </>
  )
}

