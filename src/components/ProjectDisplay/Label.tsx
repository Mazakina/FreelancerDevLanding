'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function Label({img,className='',text,index}:any){
  
  const [isHovering, setIsHovering] = useState(false)

  const item = {
    hidden: { 
      y: 20,
      opacity: 0, 

    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .3,
      }
    }
  };
  const [disp,setdisp] = useState(false)
  useEffect(()=>{
    console.log('start')
  },[isHovering])
  return(
    <motion.div

      className={`
      item 
      clip-path-container
      rotate-[45deg]
      relative 
      ss:[height:96px] ss:[width:330px] ss:[max-width:80vw]
      ss:ml-auto ss:mr-5
      ss:[filter:drop-shadow(5px_10px_5px_rgba(0,0,0,0.5))]
      h-[409px] w-[110px]  
      ${className}  
      `}
    >
      <svg
        className={`
        absolute 
        ss:[height:96px] ss:[width:330px] ss:[max-width:80vw]
        h-[409px] w-[110px] 
        clip-path-container 
        ${isHovering && 
        '[filter:drop-shadow(0px_0px_10px_#00f7ff)]'  
        }
        `}
      >
        <motion.path
          onClick={()=>{console.log('click')}}
          onHoverStart={()=>setIsHovering(true)}
          onHoverEnd={()=>setIsHovering(false)}
          variants={item} 
          width="110" height="409"
          fill="url(#conic-gradient)"
          d="M0 409V40.5256L40.3503 0.175303L40.1751 0.000132182L110 6.10352e-05V369.175L70.1752 409H0Z"
          className="
          h-[409px] w-[110px] 
          [stroke:#00FFB2]
          cursor-pointer
          [fill:conic-gradient(from_180deg_at_50%_50%,_rgba(0, 91, 86, 0.67)_24.37500089406967deg,_#00AFB9_202.5deg);]
          [stroke-width:2px]
        "
        />
        <defs>
          <linearGradient id={"conic-gradient"} gradientTransform="rotate(-45)">
            <stop offset="0%" stop-color={`rgba(0, 91, 86, 0.67)`} />
            <stop offset="50.5%" stop-color="#bf0046ab" />
          </linearGradient>
        </defs>
      </svg>
      <motion.div 
        onClick={()=>{console.log('click')}}
        onHoverStart={()=>setIsHovering(true)}
        onHoverEnd={()=>setIsHovering(false)}
        className="
        clip-path-height
        absolute
        top-2
        left-2
        
        cursor-pointer
        h-[394px] w-[94px] 
        ">
        <Image
          className={`
            ${!isHovering&& 'blur-[2px] brightness-75'}
            h-[394px] w-[94px] 
            [z-index:2]
            absolute
            object-cover
            [object-position:40%_50%]
            ss:[height:394px] ss:[width:94px] 
          `}
          src={img}
          alt=""
        />
        <div 
        className={`
          clip-path-height
          ${isHovering && 'opacity-0'}
          brightness-200
          w-full
          h-full
          flex
          justify-center
          items-center
          absolute 
          z-20
          transition-all
        `}>
          <p className="
          -rotate-[90deg]
          whitespace-nowrap
          ss:[writing-mode:horizontal-tb]
          text-lg
          tracking-widest
          text-white
          "
          >{text}</p>
        </div>
      </motion.div>
    </motion.div>


  )
}
// <Image
// className="
//   absolute
//   h-[350px] w-[320px] 

//   [z-index:2]
//   object-cover
//   ss:[height:96px] ss:[width:330px] 
// "
// src={''}
// alt=""
// />
