'use client'

import { Dispatch, SetStateAction, useEffect } from "react";
import { BsCodeSquare } from "react-icons/bs";
import { PiLayoutLight } from "react-icons/pi"
import { HiOutlineSwatch } from "react-icons/hi2"
import { FaUserAstronaut } from "react-icons/fa6";

import cardOne from "@images/card-1.png"
import cardTwo from "@images/card-2.jpg"
import Image from "next/image";
import { motion, useAnimate, } from "framer-motion"

interface CardProps{
  index:number;
  currentActive:number;
  setCurrentActive: Dispatch<SetStateAction<number>>
  title:string;
  content:string;
}

export function Card({index,currentActive,title, content,setCurrentActive }:CardProps){
  const active = index === currentActive;
  const iconClass = `h-9 w-9  [min-width:36px] text-lg text-white`
  const srcUrl = (()=> {
    if(index===0){ return cardOne}
    if(index===1){ return cardTwo}
    if(index===2){ return cardOne}
    return cardOne
  })()

  const [scope,animate] = useAnimate()

  useEffect(()=>{
    if(index===2 && active){
      AnimateShow()
    }
  },)
  
  useEffect(()=>{
    if(active){
      return AnimateShow()
    }
    animatehide()
  },[currentActive])


  function AnimateShow(){
    animate("#vertical-title", {y:'300px'})
    animate("#content" , {left:'0',opacity:1},{ease:"easeInOut",duration:1,delay:.5})

  }

  function animatehide(){
    animate("#vertical-title", {y:'0px'})
    animate("#content" , {left:'-100%',opacity:0},{ease:"easeInOut",duration:.3})
  }

  function handleClick( ){
    setCurrentActive(index)
  }
  return(
    <motion.div
      ref={scope} 
      whileHover={{
        filter:'brightness(1.5)',
      }}
      className={` 
      ml-6
      up-to-md:mt-6
      transition-all 
      [transition-duration:.8s] 
      [border-radius:5px] 
      border 
      overflow-hidden 
      relative  
      flex 
      flex-col 
      up-to-md:w-[320px]
      up-to-md:h-[75px]
      [min-width:76px] 
      up-to-md:[min-height:75px]
      up-to-md:[max-height:320px]
      up-to-md:[max-width:80vw]
      hover:border-c-cyan500
      hover:[box-shadow:_0px_0px_8px_3px_#00FFB2;]
        ${active? 
          'flex-1 [width:76px] up-to-md:w-320 up-to-md:h-[320px] border-c-cyan500 [box-shadow:_0px_0px_8px_3px_#00FFB2;]' 
        : 'border-c-gray200 cursor-pointer [width:76px]'}
      `}
      onClick={handleClick}
      >
      <Image src={srcUrl} alt='' className="absolute  w-full  h-full object-cover brightness-50" />
      <div className={`flex transition-all [transition-duration:.8s] relative z-10 up-to-md:mt-5 mt-8 items-center  ${active? 'ml-8': 'ml-5'}`}>
        { index===0 && <BsCodeSquare className={iconClass} />}
        { index===1 && <PiLayoutLight className={iconClass} />}
        { index===2 && <HiOutlineSwatch className={iconClass} />}
        { index===3 && <FaUserAstronaut className={iconClass} />}
        <div className={`h-8 w-[1px] ml-4 bg-white lg-all:opacity-0 ${active && 'opacity-0'}`}/>
        <p className={`left-20 absolute transition-all [transition-duration:.8s] whitespace-nowrap  tracking-widest ${active? 'w-fit': 'w-0'}  `}>{title}</p>
      </div>
      <div className={` 
        division 
        up-to-md:opacity-0
        z-10  
        transition-all [transition-duration:.8s] 
        mt-4 
        [height:1px]  
        bg-white  
        rounded-sm 
        ${active? 'ml-4 w-full up-to-md:opacity-100': '[margin-left:19px] [width:38px]'}   `}
      />
      <h4 id="vertical-title" className={`up-to-md:hidden [writing-mode:vertical-lr]  z-10 m-auto tracking-widest`}
      >
        {title}
      </h4>
      <p id="content" className={` -left-full top-36 opacity-0 absolute [min-width:276px] w-full p-4 h-full overflow-hidden z-10 `}>
        {content}
      </p>
    </motion.div>
  )
}