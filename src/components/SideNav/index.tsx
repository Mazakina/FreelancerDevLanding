'use client'

import { motion } from "framer-motion";

export default function SideNav(){
  const pages=['home', 'skills', 'aboutMe', 'contact', 'footer']
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { 
      y: 20,
      opacity: 0, 
      rotate:-135,

    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 45,
      transition: {
        duration: .3,
      }
    }
  };

  return(
  <div id='side-nav' className="z-10 fixed flex justify-center [right:100px] [top:240px] ">
    <div className="h-64 absolute [width:1px] bg-c-green500" />
    <motion.ul 
      className="container w-fit py-2 absolute flex flex-col h-64 justify-around"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {pages.map((value,index)=>{
        return(
          <motion.a key={index}  
          whileTap={{ 
            scale: 0.8, 
            rotate: -90, 
            borderRadius: "100%" 
          }} 
          whileHover={{ 
            scale: 1.1, 
            rotate:135
          }} 
          href={'#'+value}
          className="item [height:5px] [width:5px] cursor-pointer  box-content border-2 bg-c-green500 border-c-green500  " variants={item} 
          />
        )
      })}
    </motion.ul>
  </div>    
  )
}
