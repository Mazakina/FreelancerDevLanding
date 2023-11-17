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
      <div className='grid 
        mdall:[grid-template-columns:1fr_1fr_215px] 
        ss:grid-container-phone
        mdall:gap-20 
        mx-auto 
        [width:85%] 
        h-fit
        '
        >
        <div className='h-full '>
          <Image
            className='
            ss:[grid-row:image]
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

        <div className='
          mdall:col-span-1
          ss:[grid-row:display]
          h-full flex  items-center'>
          <div 
            className={` ${orbitron.className} 
            container 
            flex
            ss:flex-col
            mt-auto 
            ss:mt-32
            mb-12 
            flex-1 
            w-[660px] 
            [height:420px]
            ss:h-[615px] 
            mdall:[max-height:420px] 
            `}
            > 
            <Card title={'Clear Code'} content='Durante meu processo foco em códigos limpos e escaláveis, sempre seguindo os bons costumes do mercado.' index={0} currentActive={currentActive} setCurrentActive={setCurrentActive} />

            <Card title={'Alta Fidelidade'} content='' index={1} currentActive={currentActive} setCurrentActive={setCurrentActive} />

            <Card title={'Animação'} content='Movimento gera emoção, e animações são uma ferramenta poderosa que eu uso pra guiar e cativar os úsuarios.' index={2} currentActive={currentActive} setCurrentActive={setCurrentActive} />

            <Card title={'Sobre mim'} content='Movimento gera emoção, e animações são uma ferramenta poderosa que eu uso pra guiar e cativar os úsuarios.' index={3} currentActive={currentActive} setCurrentActive={setCurrentActive} />

          </div>
        </div>
        <div className="
            mdall:col-span-1 
            ss:[grid-row:frame]
            ss:ml-auto

            ">
          <VerticalDivision height='110px'/>
          <div 
          className='
          relative
          h-[150px]
          flex
          items-center
          '
          >
          <h3 className={`
            absolute
            text-6xl
            ss:text-4xl
            ${blanka.className}
            whitespace-nowrap
            mx-4
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
              <div className='rotate-90  -ml-3'>
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
