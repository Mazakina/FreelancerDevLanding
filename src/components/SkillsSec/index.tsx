import { Anton } from "next/font/google"
import Image from "next/image"
import skills from "@images/skillsArr.png"
import Display from "./display"
import AboutMe from "../AboutMe"
import Carrosel from "../Carrosel"
const anton = Anton({
  weight:"400",
  subsets:['latin']
})
import localFont from 'next/font/local'
const blanka = localFont({ src: '../../../public/Blanka.otf' })


export default function SkillsSec(){
  return(
    <div id='skills' className=" bg-c-gray900 h-screen-2 flex-1 " >
      <div className="flex flex-col pt-8 tracking-widest">
        <h4 className={`${blanka.className} tracking-widest mx-auto inline-block text-3xl text-c-gray100`}>MINHAS SKILLS</h4>
        <Carrosel />
        <h4 className={`${blanka.className} tracking-widest mt-20 mx-auto inline-block text-3xl text-c-gray100`}>PROJE<span className='text-c-orange500'>T</span>OS</h4>
        <Display/>
      </div>
      <AboutMe/>
    </div>
  )
}