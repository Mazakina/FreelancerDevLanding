'use client'

import portrait from '@images/portrait.png'
import Image from "next/image"
import cafe from "@images/cafe.jpg"
import {useState} from 'react'
import { Card } from "./Card"
import { PersonalCard } from "./PersonalCard"

import { orbitron , blanka } from "@/app/ui/fonts"


export default function AboutMe(){

  const [currentActive, setCurrentActive] = useState<number>(0)
  
  return(
    <div id='aboutMe' className={`${orbitron.className} z-20 sticky flex justify-center  mx-auto w-full flex-col text-cyan-50 mt-48`}>
      <h3 className={`${blanka.className} self-center mr-auto ml-32 mb-16 text-3xl tracking-widest `} >S<span className={'text-c-orange500'}>O</span>BRE MIM</h3>
      <div className='grid [grid-template-columns:1fr_215px_1fr] gap-20 mx-auto [width:85%] h-120'>
        <div className='col-span-1 h-full '>
          <div className='flex flex-col h-fit'>
            <PersonalCard img={cafe} className='h-48 [width:580px] ml-auto'  content={'Sou Paulo Mazakina, Desenvolvedor Web com experiência em design audiovisual. Minha especialidade é transformar designs em sites.'} />
            <div className='flex mt-6'>
              <PersonalCard img={cafe} className='h-32 [width:196px] mt-auto ml-auto' content='a' />
              <PersonalCard img={cafe} className='h-56 [width:290px] ml-6' content='a'/>
            </div>
          </div>
        </div>
        <div className='
        col-span-1 
        h-fit 
        mt-56
        rounded-md 
        flex 
        border
        border-c-cyan500 
        justify-center 
        items-center'>
          <Image src={portrait.src} alt='portrait' width='215' height='215' />
        </div>
        <div className='col-span-1 h-full mt-28  flex flex-col items-center'>
          <h4 className={`${orbitron.className}`} >Diferenciais</h4>
          <div 
            id='diferenciais-container'
            className={` ${orbitron.className} container mt-5 flex-1 [height:420px] flex`}
            > 
            <Card title={'Clear Code'} content='Durante meu processo foco em códigos limpos e escaláveis, sempre seguindo os bons costumes do mercado.' index={0} currentActive={currentActive} setCurrentActive={setCurrentActive} />

            <Card title={'Alta Fidelidade'} content='' index={1} currentActive={currentActive} setCurrentActive={setCurrentActive} />

            <Card title={'Animação'} content='Movimento gera emoção, e animações são uma ferramenta poderosa que eu uso pra guiar e cativar os úsuarios.' index={2} currentActive={currentActive} setCurrentActive={setCurrentActive} />
          </div>
        </div>
      </div>
    </div>
  )
}