'use client'

import { Orbitron } from "next/font/google"
import localFont from 'next/font/local'
import portrait from '@images/portrait.png'
import Image from "next/image"
import {useState} from 'react'
import { BsCodeSquare } from "react-icons/bs"
import { Card } from "./Card"
const blanka = localFont({ src: '../../../public/Blanka.otf' })

const orbitron = Orbitron({
  weight:"400",
  subsets:['latin']
})


export default function AboutMe(){

  const [currentActive, setCurrentActive] = useState<number>(0)
  
  return(
    <div id='aboutMe' className={`${blanka.className} z-20 sticky flex justify-center  mx-auto w-full flex-col text-cyan-50 mt-56`}>
      <h3 className=" self-center mr-auto ml-32 mb-16 text-3xl tracking-widest ">S<span className={'text-c-orange500'}>O</span>BRE MIM</h3>
      <div className='grid [grid-template-columns:1fr_215px_1fr] gap-24 mx-auto [width:90%] h-120'>
        <div className='col-span-1 h-full '>
          
        </div>
        <div className='col-span-1 h-full flex justify-center items-center'>
          <Image src={portrait.src} alt='portrait' width='215' height='215' />
        </div>
        <div className='col-span-1 h-full flex flex-col items-center'>
          <h4 className={`${orbitron.className}`} >Diferenciais</h4>
          <div 
            id='diferenciais-container'
            className={` ${orbitron.className} container mt-5 flex-1 [height:420px] flex`}
            > 
            <Card title={'Clear Code'} content='' index={0} currentActive={currentActive setCurrentActive={setCurrentActive}} />

            <Card title={'Alta Fidelidade'} content='' index={1} currentActive={currentActive} setCurrentActive={setCurrentActive} />

            <Card title={'UI/UX Design'} content='' index={2} currentActive={currentActive} setCurrentActive={setCurrentActive} />
          </div>
        </div>
      </div>
    </div>
  )
}