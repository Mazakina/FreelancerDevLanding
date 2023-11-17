'use client'

import portrait from '@images/portrait.png'
import banner from '@images/Long-banner.png'
import Image from "next/image"
import {useState} from 'react'
import { Card } from "./Card"

import { orbitron , blanka } from "@/app/ui/fonts"
import { AboutMeSvg, VerticalDivision } from '../SvgOverlay'


export default function AboutMe(){

  const [currentActive, setCurrentActive] = useState<number>(3)
  
  return(
    <div id='aboutMe' className={`${orbitron.className} z-20 sticky flex justify-center  mx-auto w-full flex-col text-cyan-50 `}>
      <div className='grid [grid-template-columns:1fr_1fr_215px] gap-20 mx-auto [width:85%] h-120'>
        <div className='col-span-1 h-full '>
          <Image
          className='
          absolute
          mt-4
          opacity-[0.15]
          hover:opacity-[0.3]
          transition-all
          '
          src={banner}
          alt=''
          />

        </div>

        <div className='col-span-1 h-full   flex flex-col items-center'>
          <div 
            id='diferenciais-container'
            className={` ${orbitron.className} container mt-auto mb-12 flex-1 w-[660px] [height:420px] [max-height:420px] flex`}
            > 
            <Card title={'Clear Code'} content='Durante meu processo foco em códigos limpos e escaláveis, sempre seguindo os bons costumes do mercado.' index={0} currentActive={currentActive} setCurrentActive={setCurrentActive} />

            <Card title={'Alta Fidelidade'} content='' index={1} currentActive={currentActive} setCurrentActive={setCurrentActive} />

            <Card title={'Animação'} content='Movimento gera emoção, e animações são uma ferramenta poderosa que eu uso pra guiar e cativar os úsuarios.' index={2} currentActive={currentActive} setCurrentActive={setCurrentActive} />

            <Card title={'Animação'} content='Movimento gera emoção, e animações são uma ferramenta poderosa que eu uso pra guiar e cativar os úsuarios.' index={3} currentActive={currentActive} setCurrentActive={setCurrentActive} />

          </div>
        </div>
        <div className="
            col-span-1 
            ">
          <VerticalDivision height='110px'/>
          <div 
          className='
          relative
          h-[150px]
          '
          >
          <h3 className={`
            absolute
            text-6xl
            ss:text-4xl
            ${blanka.className}
            whitespace-nowrap
            ss:whitespace-normal
            w-screen
            right-[0%]
            text-right
            `}>
            Um trabalho que  fala mais <br className='ss:hidden'/> do que palavras
          </h3>
          </div>
          <VerticalDivision height='680px'/>
          <div className='
            rounded-md 
            flex 
            relative
            border-[5px]
            border-c-cyan500 
            justify-center
            ss:w-[175px] ss:min-h-[350px] w-[215px] h-[520px] 
            items-center'>
            <div className='
            absolute 
            left-[55%] 
            -top-72
            tracking-[3px]
            '>
              <div className='rotate-90 -ml-3'>
                <AboutMeSvg />
              </div>
              <h5
                className={`
                ${blanka.className}
                text-3xl
                [writing-mode:vertical-lr]
                `}
                >
                S<span className='text-c-orange500'>o</span>bre Mim
              </h5>
            </div>
            <Image className='object-cover ss:w-[175px] ss:min-h-[350px] w-[215px] h-[520px]' src={portrait.src} alt='portrait' fill />
          </div>
        </div>
      </div>
    </div>
  )
}
