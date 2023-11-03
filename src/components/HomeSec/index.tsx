'use client'

import ProjectDisplay from "../ProjectDisplay";
import { Orbitron, Roboto } from "next/font/google"
import {AiOutlineGithub} from "react-icons/ai"
import {BsLinkedin} from  "react-icons/bs"
import BgImage from "../BgImage";
import localFont from 'next/font/local'
const blanka = localFont({ src: '../../../public/Blanka.otf' })

const orbitron = Orbitron({
  weight:"500",
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
      [height:800px]
      justify-center
      flex-1
      mx-auto
      ${orbitron.className}`}
    >
      <BgImage/>
      <section className='
        [max-width:1550px] 
        ss:h-full 
        ss:flex-col 
        sticky 
        z-10 
        mx-auto 
        flex 
        [padding-top:6rem]
        justify-between
        lg:justify-center
        xl:justify-center
        ss:[padding-top:0rem] 
      '>
        <div
          className="
          left-home  
          flex 
          flex-col 
          align-top 
          justify-left 
          ml-12 mt-20 
          max-w-112 
          w-1/3
          ss:w-fit ss:[margin-top:4rem]
          md:[min-width:350px]
          ">
          <p className= {`w-fit text-c-gray400 ss:hidden tracking-widest`}>
            Desenvolvedor Front-End | WEB | UI | UX  
          </p>
          <h1 className={`flex text-white ss:text-4xl text-6xl  tracking-wider mt-5 ${blanka.className}`}>
            PAULO<br/> &nbsp;&nbsp;&nbsp;Mazakina
          </h1> 
          <h5 className={`flex max-w-xs ml-14  text-white text-right tracking-widest mt-11 ss:hidden`} >
          ▓░▓▒▒▒██▓▒▓ ██▒░&gt;░█▒▓ &lt;█▒░██▓▓█
          </h5>
        </div>
        <div className={"right-home mt-8 max-w-140 md:w-fit ss:h-full  ss:mr-auto mr-12 z-20"}>
            <ProjectDisplay/>
 
            <div className={" ss:hidden text-white ml-40 z-20 mt-12 sticky"}>
              <h2 className={` text-6xl z-40 ${blanka.className}`}>
              MAZA<span className="text-c-orange500">K</span>INA
              </h2>
              <div className={"  flex items-center mt-8 ml-24"}>
                <a  href=""><BsLinkedin className={"text-xl"}/></a>
                <a className={"ml-6"} href=""><AiOutlineGithub className={"text-2xl"}/></a>
                <button className={"ml-6"}  onClick={()=>navigator.clipboard.writeText('8.mazakina@gmail.com')} >(11) 99609-2722</button>
              </div>
            </div>
            <p className= {`w-fit text-c-orange500 text-sm [margin-top:18rem] mb-1rem mx-auto text-white hidden ss:flex tracking-widest`}>
              Desenvolvedor Front-End | WEB | UI | UX  
            </p>
        </div>
      </section>
    </div>
  )
}