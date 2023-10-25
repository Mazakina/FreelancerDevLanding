'use client'
import Label from "./Label";
import Boya from '@images/InstcBoya.png'
import ProjectTwo from '@images/wide2.png'
import ProjectThree from '@images/project3.png'
import ProjectOne from '@images/wide1.png'
// import ProjectOne from '@images/htmlImg1.png'
import { motion } from "framer-motion";

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





  const someArray = [ProjectOne,ProjectTwo,ProjectThree,ProjectOne]
  return(
    <div className="relative  md:w-fit ss:[width:100vw] ">
      <motion.ul 
        variants={container}
        initial="hidden"
        animate="visible"
        className=" flex md:justify-center md:[width:300px] ss:flex-col ss:[width:100vw] w-auto">
      {
        someArray.map((value,index)=>{
          let text;
          index===someArray.length-1?
            text='Sobre Mim' : text='Projetos'
          return(
            <Label className={`${index>1?'ss:hidden md:hidden ':' '}`+ 'ss:mt-5  ml-10 ss:ml-6'} key={index} img={value} text={text} />
          )
        })
      }    
      </motion.ul>
    </div>
  )
}