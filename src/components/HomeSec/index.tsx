'use client'

import ProjectDisplay from "../ProjectDisplay";
import BgImage from "../BgImage";

import { orbitron , alexana } from "@/app/ui/fonts"
import { motion } from "framer-motion";
import SocialsLink from "./SocialsLink";


export default function HomeSec(){
  return(
    <section
      id='home'
      style={{}}
      className={`
      h-screen-1
      top-0
      z-20
      justify-center
      flex
      flex-col
      flex-1
      mx-auto
      ${orbitron.className}`}
    >
      <BgImage/>
      <div className="
        z-20
        flex
        justify-center
        mt-auto
        mx-auto
      ">
        <SocialsLink icon='github' href='' />
        <SocialsLink icon='linkedin' href='' />
        <SocialsLink icon='phone' href='' />
      </div>
      <div
        id='center-home'
        className="
        z-20
        absolute
        left-[50%]
        -translate-x-1/2
        flex
        items-center
        flex-col
        "
        >
        <h1
          className={`
          ${alexana.className}
          text-white
          text-[92px]
          tracking-[4.6px]
          `}
          >
          MAZA<span className="text-c-orange500">K</span>INA
        </h1>
        <p className={`
          ${orbitron.className}
          text-white
          tracking-[1px]
          `}>
          Desenvolvedor Front-end | UI | UX | WEB
        </p>
      </div>
      <div className='
        [max-width:50%] 
        ss:h-full 
        ss:flex-col 
        sticky 
        mx-auto
        z-10 
        flex 
        [padding-top:6rem]
        justify-between
        lg:justify-center
        xl:justify-center
        ss:[padding-top:0rem] 
      '>
        <ProjectDisplay/>
      </div>
    </section>
  )
}