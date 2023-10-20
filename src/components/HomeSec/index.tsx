'use client'

import ProjectDisplay from "../ProjectDisplay";
import localFont from 'next/font/local'
import { Anton, Roboto } from "next/font/google"
import {AiOutlineGithub} from "react-icons/ai"
import {BsLinkedin} from  "react-icons/bs"
import BgImage from "../BgImage";
const blanka = localFont({ src: '../../../public/Blanka.otf' })

const anton = Anton({
  weight:"400",
  subsets:['latin']
})

const roboto = Roboto({
  weight:"700",
  subsets:['latin']
})

export default function HomeSec(){
  return(
    <div
      id='home'
      style={{}}
      className={`
      [
      justify-center
      flex-1
      mx-auto
      ${anton.className}`}>
      <BgImage/>
      <section className='[max-width:1550px] sticky z-10 mx-auto flex justify-between pt-24 ' >
        <div className="left-home  flex flex-col left-home align-top justify-left ml-12 mt-20 max-w-112 w-1/3">
          <p className= {`w-fit text-c-orange500 tracking-widest`}>
            Desenvolvedor Front-End | WEB | UI | UX  
          </p>
          <h1 className={`flex text-white text-6xl tracking-wider mt-5 ${roboto.className}`}>
            Torem ipsum,<br/> dolor sit amet
          </h1>
          <h5 className={`flex text-c-gray400 text-right tracking-wider mt-11 `} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec viverra purus. Ut at arcu lacinia, convallis purus, 
          </h5>
        </div>
        <div className={"right-home mt-8 max-w-140 w-fit"}>
          <div className={"project-preview"}>

          </div>
          <div className={"right-home-info mr-12 z-20"}>
            <div>
              <ProjectDisplay/>
              <div className={"text-white ml-40 z-20 mt-12 sticky"}>
                <h2 className={` text-6xl z-40 ${blanka.className}`}>
                MAZA<span className="text-c-orange500">K</span>INA
                </h2>
                <div className={"flex items-center mt-8 ml-24"}>
                  <a  href=""><BsLinkedin className={"text-xl"}/></a>
                  <a className={"ml-6"} href=""><AiOutlineGithub className={"text-2xl"}/></a>
                  <button className={"ml-6"}  onClick={()=>navigator.clipboard.writeText('8.mazakina@gmail.com')} >(11) 99609-2722</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}