import Display from "./display"
import AboutMe from "../AboutMe"
import Carrosel from "../Carrosel"
import { blanka } from "@/app/ui/fonts"



export default function SkillsSec(){
  return(
    <div id='skills' className="z-10 sticky bg-[#0c0c0c7e]   h-screen-2 flex-1 " >
      <div className="flex flex-col pt-8 tracking-widest">
        <h4 className={`${blanka.className} z-10 tracking-widest mx-auto inline-block text-3xl text-c-gray100`}>MINHAS SKILLS</h4>
        <Carrosel velocity={-2} />
        <Display/>
      </div>
      <AboutMe/>
    </div>
  )
}