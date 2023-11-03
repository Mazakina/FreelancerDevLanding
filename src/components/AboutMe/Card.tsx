'use client'

import { Orbitron } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
import { BsCodeSquare } from "react-icons/bs";
import { PiLayoutLight } from "react-icons/pi"
import { HiOutlineSwatch } from "react-icons/hi2"
import cardOne from "@images/card-1.png"
import Image from "next/image";

const orbitron = Orbitron({
  weight:"400",
  subsets:['latin']
})

interface CardProps{
  index:number;
  currentActive:number;
  setCurrentActive: Dispatch<SetStateAction<number>>
  title:string;
  content:string;
}

export function Card({index,currentActive,title, content,setCurrentActive }:CardProps){
  let active = index=== currentActive;
  let iconClass = `h-9 w-9 ${active? 'ml-8': 'mx-auto  '} text-lg text-white`
  let srcUrl = cardOne
  console.log(srcUrl)
  return(
    <div 
      className={` border overflow-hidden relative border-white rounded-lg title flex flex-col ml-4 ${active? 'flex-1' : '[width:75px]'}  `}
      onClick={setCurrentActive}
      >
      <Image src={cardOne} alt='' className="absolute  w-full h-full object-cover brightness-90" />
      <div className={`flex ${active? 'ml-8': ''} z-10 mt-8 items-center`}>
        { index===0 && <BsCodeSquare className={iconClass} />}
        { index===1 && <PiLayoutLight className={iconClass} />}
        { index===2 && <HiOutlineSwatch className={iconClass} />}
        <p className={`${active? '': 'hidden'}  ml-8 tracking-widest`}>{title}</p>
      </div>
      <div className={`${active? 'ml-4 w-full': 'mx-auto [width:38px]'}  z-10 mt-4 [height:1px]  bg-white  rounded-sm`}/>
      <h4 className={`${active? 'hidden': ''}[writing-mode:vertical-lr]  z-10 m-auto tracking-widest`}>
        {title}
      </h4>
    </div>
  )
}