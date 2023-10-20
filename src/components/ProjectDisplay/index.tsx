'use client'
import Label from "./Label";
import Boya from '@images/InstcBoya.png'
import ProjectTwo from '@images/projeto2.png'
import ProjectThree from '@images/project3.png'
import ProjectOne from '@images/htmlImg1.png'
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
    <div className="relative">
      <div className="absolute">
        <div />
      </div>
      <motion.ul 
        variants={container}
        initial="hidden"
        animate="visible"
        className="container flex w-auto">
      {
        someArray.map((value,index)=>{
          let ml;
          let text;
          index===0?
            ml="" : ml= "ml-10"
          index===someArray.length-1?
            text='Sobre Mim' : text='Projetos'
          return(
            <Label className={ml} key={index} img={value} text={text} />
          )
        })
      }    
      </motion.ul>
    </div>
  )
}