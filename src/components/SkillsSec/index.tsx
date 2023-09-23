import { Anton } from "next/font/google"
import Image from "next/image"
import skills from "@images/skillsArr.png"
import Display from "./display"
import AboutMe from "../AboutMe"
const anton = Anton({
  weight:"400",
  subsets:['latin']
})


export default function SkillsSec(){
  return(
    <div id='skills' className="bg-c-gray900 h-screen-2 flex-1 " >
      <div className="flex flex-col pt-16 tracking-widest">
        <h4 className={`${anton.className} tracking-widest mx-auto inline-block text-3xl text-c-gray100`}>MINHAS SKILLS</h4>
        <Image className="mt-8" src={skills.src} width="1920" height="50" alt='' />
        <h4 className={`${anton.className} tracking-widest mt-24 mx-auto inline-block text-3xl text-c-gray100`}>PROJETOS</h4>
        <Display/>
      </div>
      <AboutMe/>
    </div>
  )
}