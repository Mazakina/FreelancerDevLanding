'use client'

import ProjectOne from '@images/wide1.png'
import ProjectTwo from '@images/wide2.png'
import { easeInOut, motion } from 'framer-motion'
import { blanka } from '@/app/ui/fonts'
import WideLabel from './WideLabel'

export default function ProjectDisplay() {
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }
  const seeMore = {
    hidden: {
      y: 0,
      opacity: 1,
    },
    visible: {
      y: 10,
    },
  }
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className=" 
      w-[85%] 
      mx-auto
      [min-height:100px]
      mb-12
      flex 
      justify-around 
      relative 
      ss:items-center 
      ss:flex-col
      ss:mt-auto
      ss:mb-20
       "
    >
      <div className="flex flex-col">
        <WideLabel
          href="#projects"
          className="mdall:hidden mb-4"
          index={1}
          img={ProjectOne}
          text={'Projetos'}
        />
        <WideLabel
          href="#contact"
          className="mdall:hidden ml-12"
          index={0}
          img={ProjectTwo}
          text={'Fale Comigo'}
        />
      </div>

      <motion.a
        id="see-more"
        variants={seeMore}
        initial="hidden"
        animate="visible"
        transition={{
          ease: easeInOut,
          repeat: Infinity,
          duration: 2,
          repeatType: 'mirror',
        }}
        href="#projetos"
        className="
        cursor-pointer
        ss:hidden
        absolute 
        hover:text-c-green500
        -translate-x-1/2
        left-[49.3%]
         z-10  "
      >
        <svg
          className="
          absolute
          -translate-x-1/2
          text-center
          left-1/2
          "
          width="150px"
          height="130px"
          viewBox="0  0 110 110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            strokeWidth={2}
            fill="#00000034"
            stroke="#ffffff"
            points="20,20 100,20 60,90"
            strokeDasharray="40"
            strokeDashoffset={30}
          />
        </svg>
        <p
          className={`
        ${blanka.className}
        text-c-green500
        absolute
        -translate-x-1/2
        text-center
        left-1/2
        mt-9
        ml-2
        `}
        >
          Scroll
        </p>
      </motion.a>
      <div className=" flex flex-col">
        {/* <WideLabel
          className="ml-12 ss:ml-0 mb-4"
          href="#projects"
          index={0}
          img={ProjectThree}
          text={'Projetos'}
        />
        <WideLabel
          className=""
          index={1}
          href="#about-me"
          img={ProjectFour}
          text={'Sobre mim'}
        /> */}
      </div>
    </motion.ul>
  )
}
