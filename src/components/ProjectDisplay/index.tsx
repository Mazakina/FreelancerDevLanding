'use client'
import Label from "./Label";
import ProjectTwo from '@images/projeto3.png'
import ProjectOne from '@images/projeto1.png'
import { circInOut, easeInOut, motion, spring } from "framer-motion";
import { blanka } from "@/app/ui/fonts";
import WideLabel from "./WideLabel";

export default function ProjectDisplay(){
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const seeMore={
    hidden:{
      translateY:0,
      opacity:1
    },
    visible:{
      translateY: 10,
      transition:{
        ease:easeInOut,
        repeat:Infinity,
        duration:2,
        repeatType:'mirror',
      }
    }
  }
  return(
    <motion.ul 
      variants={container}
      initial="hidden"
      animate="visible"
      className=" 
      w-full 
      ml-2 
      mr-6 
      flex 
      justify-around 
      relative 
      ss:items-center 
      ss:flex-col
      ss:mt-auto
      ss:mb-20
       ">
      <Label className={'ss:hidden '}  index={0} img={ProjectOne} text={'Projetos'} />
      <WideLabel className="" index={0} img={ProjectOne} text={'Projetos'} />
      <motion.div 
        id='see-more'
        variants={seeMore}
        initial="hidden"
        animate="visible"

        className='
        ss:hidden
        absolute 
        hover:text-c-green500
        md:top-[15%]

        -translate-x-1/2
        top-[60%] z-10 left-1/2  '>
        <svg className='
          absolute
          -translate-x-1/2
          text-center
          left-1/2
          text-white
          ' width="150px" height="130px" viewBox="0  0 110 110" xmlns="http://www.w3.org/2000/svg">
          <polygon 
              fill='transparent' strokeWidth={2} stroke='#d6fcf0' points="20,20 100,20 60,90"   strokeDasharray="40" strokeDashoffset={30}    />
        </svg>
        <p className={`
        ${blanka.className}
        absolute
        -translate-x-1/2
        text-center
        left-1/2
        mt-9
        ml-2
        text-white
        `}>Scroll</p>
      </motion.div>
      <WideLabel className=" " index={1} img={ProjectTwo} text={'Sobre mim'} />
      <Label className={'ss:mt-5  ml-10 ss:ml-6'}  index={1} img={ProjectTwo} text={'Sobre mim'} />
    </motion.ul>
  )
}