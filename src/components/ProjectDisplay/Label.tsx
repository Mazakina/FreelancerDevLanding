'use client'
import Image from "next/image"
import { motion } from "framer-motion";


export default function Label({img,className,text}:any){
  
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
  return(
    
    <motion.a
      href='#skills'
      className={`item relative  ${className} pb-6`}
      variants={item} 
    >
      <div
        className="bg-c-gray200 "
        style={{
          height:'442px',
          width:' 96px',
          objectFit: 'cover',
          zIndex: 2,
          clipPath: 'path("M0 442V41.0122L0.0121926 41.0244L41.0244 0.012207L41.0122 0H96V401.012L55.0122 442H0Z")'
        }}
      />
      <div
        className="absolute top-6 hover:top-3  cursor-pointer transition-all  duration-500 
        ease-in-out
        "
        style={{
          height:'442px',
          width:' 96px',
          objectFit: 'cover',
          zIndex: 2,
          clipPath: 'path("M0 442V41.0122L0.0121926 41.0244L41.0244 0.012207L41.0122 0H96V401.012L55.0122 442H0Z")'
        }}
      >
        <Image
          style={{
            position:'absolute',
            height:'442px',
            width:' 96px',
            objectFit: 'cover',
            zIndex: 2,
          }}
          src={img}
          alt=""
        />
        <div 
        className="
          opacity-0
          hover:opacity-100
          w-full
          h-full
          backdrop-blur-sm
          flex
          justify-center
          items-center
          absolute z-20
          transition-all
        ">
          <p className="
          [writing-mode:vertical-lr] 
          text-lg
          tracking-widest
          text-white
          "
          >{text}</p>
        </div>
      </div>

    </motion.a>
  )
}
