'use client'

import FirstImage from '@images/htmlImgWebp.webp'
import Project2 from '@images/Rect1.png'
import Project3 from '@images/projeto2.png'
import M from '@images/M.png'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { roboto, orbitron, blanka } from "@/app/ui/fonts"
import { motion, useInView } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { PiFigmaLogoBold } from 'react-icons/pi'

export default function Display(){
  const allProjects = [
    {
      id:0,
      backgroundImg:Project2.src,
      tools:['reactJs','html'],
      title:'Portfolio',
      language:'HTML & CSS',
      site:'/#',
      github:'https://github.com/Mazakina/PersonalWeb',
      figma:'',
      description:' Projeto em React e Next Js, utiliziando Api de Framer Motion para criar transições simples. Um trabalho sempre em desenvolvimento',
    },{
      id:1,
      backgroundImg:Project3.src,
      tools:['html'],
      title:'Space Travel',
      language:'HTML & CSS',
      description:'Space Travel é um site informativo, feito para saciar algumas curiosidade dos amantes do espaço. Utilizando os fundamentos, sem framework, apenas HTML/CSS para criar uma experiencia responsiva e otimizada',
      site:'https://uss-enterprise.vercel.app/',
      github:'https://github.com/Mazakina/UssEnterprise',
      figma:'',
  },{
      id:2,
      backgroundImg:Project2.src,
      tools:['nextJs','reactJs','stripe','prismic','html'],
      title:'IgNews',
      language: 'Next JS',
      site:'https://ignite-ig-news-main.vercel.app/',
      github:'https://github.com/Mazakina/Ignite-IgNews-main',
      description:' Trabalho em Next Js para entrega de conteudo DEV com preview antes de se inscrever. Criado com Stripe para pagamentos, Next Auth para validação, e Prismic como CMS ',
      figma:'',
  },{
      id:3,
      backgroundImg:FirstImage.src,
      tools:['reactJs','nextJs','prismic','html'],
      title:'Ink-Trail',
      language: 'React JS',
      site:'https://inktrail.vercel.app/',
      github:'https://github.com/Mazakina/ArtMatch',
      description:`Aplicativo JAM-Stack, feito para que artistas brasileiros divulguem suas artes e possiveis clientes entrem em contato. Utilizando de um layout interativo onde se pode arrastar imagens para dentro de albums ou serem deletadas`,
      figma:'',
  }]

  const ref = useRef(null)
  const isInView = useInView(ref,{
    margin: "60px 0px 0px 0px "
  })
  let [displayOn, setDisplayOn] = useState(true)

  function onClickChangeDisplayHandler(num:number){
    setCurrent(num)
    setDisplayOn(!displayOn)
  }  

  const [current, setCurrent] = useState(0)
  const hiddenProperties = '[right:-130%]  opacity-0 '
  return(
    <>
      <h4 
        id='projects'
        className={` 
        ${isInView ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}
        ${blanka.className}
        transition-all duration-1000  
        tracking-widest 
        mt-[180px] ml-24 mr-auto 
        inline-block text-3xl text-c-gray100
        `}>PROJE<span className='text-c-orange500'>T</span>OS</h4>
      <motion.div 
        ref={ref} 
        id='project-sec'
        className={`
        ${isInView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
        transition-all duration-1000  
        ${orbitron.className}
        box-border 
        border-t-2
        border-b-2
        [box-shadow:_0px_0px_8.4px_2px_#FF3D00;]
        rounded-sm
        border-c-orange500
        w-full 
        mt-16 
        mx-auto 
        [height:520px] 
        relative 
        overflow-hidden`}>
        <div id='overal-display'
          className={`transition-all duration-700  
          absolute 
          h-full w-full 
          `}>
            <Image
              onClick={()=>onClickChangeDisplayHandler(0)} 
              className={`
              transition-all
              duration-500
              h-full
              w-full
              absolute
              object-cover           
              ${!displayOn? 'opacity-100': 'opacity-0'}
              `}
              height={'480'} 
              width='1440' alt="
              Projeto em destaque
              "  
              src={allProjects[current].backgroundImg} 
            />
            <Image
              onClick={()=>onClickChangeDisplayHandler(0)} 
              className={`
              h-full
              w-full
              absolute
              blur-xl
              brightness-50
              hover:brightness-100
              hover:blur-none
              object-cover
              transition-all
              duration-500
              ${displayOn? 'opacity-100': 'opacity-0'}
              `}
              height={'480'} 
              width='1440' alt="
              primeiro projeto
              "  
              src={allProjects[0].backgroundImg} 
            />

          <div 
            onClick={(e)=>{e.stopPropagation()}}
            className={`
            ${displayOn?'opacity-0':'opacity-100'}
            [transition:all_1300ms_ease-in-out]
            flex 
            backdrop-blur-2xl
            border-l
            border-[#ffffff38]
            flex-col 
            absolute 
            [min-width:260px]
            right-0 
            h-full 
            w-2/5 
            bg-[conic-gradient(from_90deg_at_1px_1px,#0000_90deg,blue_0)_0_0/50px_50px;] 
              `}
          >
            <div
              className={`
                mx-24
                transition-all
                duration-700
                mt-6
                mr-auto
                items-center
                flex
              `}
              >
                <Image src={M.src} className='
                  transition-all
                  duration-700 h-16 mr-4 w-16 rounded-full' width={64} height={64} alt=''/ >
              <h2
                className={`
                text-white
                text-xl
                `
              }>
                {allProjects[current].title}
              </h2>
            </div>
            <p
              className={`
              text-gray-300
              text-base
              transition-all
              duration-500
              mx-auto
              ml-16
              mr-8 
              mt-6`
              }>
              {allProjects[current].description}
            </p>
            <div className={'flex justify-around font-bold text-white mt-auto mb-10'}>
              <Link 
                href={allProjects[current].site} 
                className={` 
                border-b-2 
                flex 
                justify-center  
                whitespace-nowrap
                w-24  
                transition-all 
                duration-300  p-2 rounded-sm 
                hover:border-c-green500
                `}> 
                Visitar &gt; 
              </Link>
              <div className='flex'>
                <Link
                  href={allProjects[current].github}
                  className='
                  flex 
                  mr-12 
                  h-fit
                  justify-center  
                  border-4 
                  border-white 
                  transition-all 
                  duration-300  
                  rounded-full 
                  hover:[filter:drop-shadow(0px_0px_15px_#2ff8ff)]
                  hover:border-c-green500 '>
                  <FaGithub className={'w-9 border-transparent border h-9'} />
                </Link>
                <Link
                  href={allProjects[current].figma}
                  className='
                  flex 
                  justify-center  
                  items-center  
                  h-fit
                  border-4 
                  border-white 
                  transition-all 
                  duration-300  
                  hover:[filter:drop-shadow(0px_0px_15px_#2ff8ff)]
                  rounded-full hover:border-c-green500 '>
                  <PiFigmaLogoBold  className={' bg-white border-black border-2 rounded-full text-black w-9 h-9 p-1'} />
                </Link>
              </div>

            </div>
          </div>
        </div>

        <div id='first-project' 
          onClick={()=>onClickChangeDisplayHandler(1)} 
          className={`${displayOn? 
          ('opacity-1 right-0  border-c-orange500 [box-shadow:_0px_0px_8.4px_2px_#FF3D00;] ')
          : hiddenProperties}
          group
          transition-all 
          duration-700 
          cursor-pointer 
          box-content 
          border-l-2 
          rounded-sm 
          overflow-hidden 
          -skew-x-25 
          w-4/5 
          bg-gray-600 
          absolute 
          h-full 
        `}>
          <Image 
            height={'480'} 
            className='
            absolute
            [transform:skew(25deg,0)_translatex(-130px)]
            [object-position:-50px_-30px]
            h-[600px]
            w-[1000px]
            [max-width:1000px]
            bg-cover
            -top-5
            transition-all
            duration-500
            blur-md
            brightness-75
            group-hover:blur-none
            group-hover:brightness-100
            '
            width='1440' 
            alt=""  
            src={Project3.src} />
          <p
            className={`
            ss:[writing-mode:vertical-rl]
            ss:[transform:scale(-1)skew(25deg)rotate(25deg)]
            top-52
            ss:top-52
            text-2xl
            skew
            w-full
            pl-5
            mdall:h-14
            border-t
            border-b
            [line-height:56px]
            group-hover:bg-c-gray900     
            group-hover:text-c-green500
            z-10
            text-white
            absolute
            font-medium`}>{allProjects[3].title}</p>
        </div>

        <div id='second-project'
          onClick={()=>onClickChangeDisplayHandler(2)}
          className={`
            ${displayOn?
            ('opacity-1 right-4  border-c-orange500 [box-shadow:_0px_0px_8.4px_2px_#FF3D00;] '):
            hiddenProperties}
            group
            transition-all
            duration-700
            cursor-pointer
            box-content
            border-l-2
            rounded-sm
            overflow-hidden
            -skew-x-25
            w-3/6
            absolute
            h-full`}>
          <Image 
            height={'580'} 
            width='1440' 
            alt="" 
            className='
            absolute
            [transform:skew(25deg,0)_translatex(-130px)]
            [object-position:-50px_-30px]
            h-[600px]
            w-[1300px]
            [max-width:1300px]
            bg-cover
            -top-5
            transition-all
            duration-500
            blur-md
            brightness-75
            group-hover:blur-none
            group-hover:brightness-100
            '
            src={Project2.src} />
          <p
            className={`
            ss:[writing-mode:vertical-rl]
            ss:[transform:scale(-1)skew(25deg)rotate(25deg)]
            top-52
            ss:top-52
            text-2xl
            skew
            z-10
            text-white
            w-full
            pl-5
            mdall:h-14
            [line-height:56px]
            border-t
            border-b
            group-hover:bg-c-gray900   
            group-hover:text-c-green500
            absolute
            font-medium`}>{allProjects[2].title}</p>
        </div>

        <div id='third-project'
          onClick={()=>onClickChangeDisplayHandler(3)}
          className={`
          ${displayOn?
          ("opacity-1 [right:-75%] border-c-orange500 [box-shadow:_0px_0px_8.4px_2px_#FF3D00;] "):
          hiddenProperties}
          group 
          top-0
          transition-all
          duration-700
          cursor-pointer
          box-content
          border-l-2
          
          rounded-sm
          overflow-hidden
          -skew-x-25
          w-full
          absolute
          h-full
          `}>
          <Image
            height={'480'}
            width='1440'
            alt=""
            className='
            transition-all
            duration-500
            transform 
            skew-x-25 
            translate-x-[-80px] 
            h-[140%] w-[800px] 
            max-w-[800px] 
            absolute 
            object-cover 
            blur-md
            brightness-75
            group-hover:blur-none
            group-hover:brightness-100
            '
            src={FirstImage.src} />
          <p
            className={`
            ss:[writing-mode:vertical-rl]
            ss:[transform:scale(-1)skew(25deg)rotate(25deg)]
            top-52
            ss:top-52
            text-2xl
            skew
            z-10
            text-white       
            w-full
            pl-5            
            border-t
            border-b
            mdall:h-14
            [line-height:56px]
            group-hover:bg-c-gray900   
            group-hover:text-c-green500
            absolute
            font-medium`}>{allProjects[1].title}</p>
        </div>
      </motion.div>
    </>
  )
}