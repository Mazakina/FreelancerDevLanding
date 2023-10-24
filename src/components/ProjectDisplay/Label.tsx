'use client'
import Image from "next/image"
import { motion } from "framer-motion";


export default function Label({img,className='',text}:any){
  
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
      className={`item 
      relative 
      ss:[height:96px] ss:[width:330px] ss:[max-width:80vw]
      ss:ml-auto ss:mr-5
      pb-6 ss:pb-0
      ${className}  
      `}
      variants={item} 
    >
      <div
        className='
        bg-c-gray200 
        ss:hidden 
        [height:442px] 
        [width:96px] 
        object-cover
        [z-index:2]
        clip-path-wide
        mdall:clip-path-height
        '
      />
      <div
        className='absolute 
        top-6 hover:top-3 
        [height:442px] [width:96px] 
        cursor-pointer 
        transition-all  
        duration-500 
        ease-in-out
        clip-path-wide
        mdall:clip-path-height
        ss:[height:96px] ss:[width:330px] 
        ss:top-0 
        object-cover
        [z-index:2]
        '

      >
        <Image
          className="
            absolute
            [height:442px]
            [width:96px]
            [z-index:2]
            object-cover
            ss:[height:96px] ss:[width:330px] 
          "
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
          absolute 
          z-20
          transition-all
        ">
          <p className="
          [writing-mode:vertical-lr] 
          ss:[writing-mode:horizontal-tb]
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
