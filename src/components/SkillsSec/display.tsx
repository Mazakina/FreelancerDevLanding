'use client'

import FirstImage from '@images/htmlImgWebp.webp'
import Project2 from '@images/Rect1.png'
import Project3 from '@images/projeto2 copy.png'
import Image from 'next/image'
import { Anton, Roboto } from 'next/font/google'
import { useState } from 'react'
import Link from 'next/link'

const roboto = Roboto({
  weight:["400","500"],
  subsets:['latin']
})

const anton = Anton({
  weight:"400",
  subsets:['latin']
})

export default function Display(){
  const allProjects = [
    {
      id:0,
      backgroundImg:'/images/projeto1.png',
      tools:['reactJs','html'],
      title:'Portfolio',
      language:'HTML & CSS',
      site:'/#',
      github:'https://github.com/Mazakina/PersonalWeb',
      description:' Projeto em React e Next Js, utiliziando Api de Framer Motion para criar transições simples. Um trabalho sempre em desenvolvimento',
    },{
      id:1,
      backgroundImgWebp:'/images/htmlImgWebp.webp',
      backgroundImg:'/images/htmlImg.png',
      tools:['html'],
      title:'Space Travel',
      language:'HTML & CSS',
      description:'Space Travel é um site informativo, feito para saciar algumas curiosidade dos amantes do espaço. Utilizando os fundamentos, sem framework, apenas HTML/CSS para criar uma experiencia responsiva e otimizada',
      site:'https://uss-enterprise.vercel.app/',
      github:'https://github.com/Mazakina/UssEnterprise',
  },{
      id:2,
      backgroundImg:'/images/Rect1.png',
      tools:['nextJs','reactJs','stripe','prismic','html'],
      title:'IgNews',
      language: 'Next JS',
      site:'https://ignite-ig-news-main.vercel.app/',
      github:'https://github.com/Mazakina/Ignite-IgNews-main',
      description:' Trabalho em Next Js para entrega de conteudo DEV com preview antes de se inscrever. Criado com Stripe para pagamentos, Next Auth para validação, e Prismic como CMS '
  },{
      id:3,
      backgroundImg:'/images/projeto2.png',
      tools:['reactJs','nextJs','prismic','html'],
      title:'Ink-Trail',
      language: 'React JS',
      site:'https://inktrail.vercel.app/',
      github:'https://github.com/Mazakina/ArtMatch',
      description:`Aplicativo JAM-Stack, feito para que artistas brasileiros divulguem suas artes e possiveis clientes entrem em contato. Utilizando de um layout interativo onde se pode arrastar imagens para dentro de albums ou serem deletadas`,
  }]

  let [displayOn, setDisplayOn] = useState(true)

  function onClickChangeDisplayHandler(){
    setDisplayOn(!displayOn)
  }  

  const [current, setCurrent] = useState(0)
  const hiddenProperties = '-right-full  opacity-0 '
  return(
    <div  className="box-border border-2 rounded-sm border-c-gray100 display w-3/5 mt-20 mx-auto h-120 relative overflow-hidden">
      <div onClick={onClickChangeDisplayHandler} className={`transition-all duration-700  bg-white absolute h-full w-full `}>
        <Image height={'480'} width='1440' alt=""  style={{height:'100%',width:'100%',position:'absolute', objectFit:'cover', }} src={Project2.src} />
        <div className="flex flex-col absolute px-4 right-0 h-full w-1/3 bg-transparent backdrop-blur-sm border-l-2 backdrop-brightness-50">
          <h2
            className={`text-white
            text-xl
            ${anton.className}
            mx-auto
            mt-6`
          }>{allProjects[current].title}</h2>
          <p
            className={`text-white
            text-base
            ${roboto.className}
            mx-auto
            mt-6`
            }>{allProjects[current].description}</p>
          <div className={'flex justify-around font-bold text-white mt-auto mb-10'}>
           <Link
              href={allProjects[current].github}
              className={'flex justify-center border-white  w-24 border-2 p-2 rounded-sm  hover:text-c-orange500  hover:border-c-orange500 hover:bg-white'}> GitHub</Link>
            <Link href={allProjects[current].site} className={' flex justify-center border-white w-24  border-2 p-2 rounded-sm hover:text-c-orange500 hover:border-c-orange500 hover:bg-white'}> Visitar </Link>
          </div>
        </div>
      </div>

      <div onClick={onClickChangeDisplayHandler} className={`${displayOn? ('opacity-1 right-0'): hiddenProperties} transition-all duration-1000 cursor-pointer box-content border-l-2 rounded-sm border-c-gray100 overflow-hidden -skew-x-25 w-4/5 bg-gray-600 absolute h-full `}>
        
        <Image 
          height={'480'} 
          width='1440' 
          alt=""  
          style={{transform:"skew(25deg,0) translatex(-150px)", objectPosition:"60px -60px", filter:"blur(2px)", height:'200%', objectFit:'cover', }} src={FirstImage.src} />
        <p
          className={`[writing-mode:vertical-rl]
          [transform:scale(-1)skew(25deg)rotate(25deg)]
          top-40
          text-lg
          skew
          left-3
          z-10
          text-white
          bg-transparent
          absolute
          ${roboto.className}
          font-medium`}>Texto</p>
      </div>

      <div 
        onClick={onClickChangeDisplayHandler} 
        className={` ${displayOn? ('opacity-1 right-4'): hiddenProperties} transition-all duration-1000 cursor-pointer box-content border-l-2 rounded-sm border-c-gray100
      overflow-hidden -skew-x-25 w-3/6 absolute h-full`}>
        <Image 
          height={'480'} 
          width='1440' 
          alt=""  
          style={{transform:"skew(25deg,0) translatex(-130px)",height:'100%',width:'1000px',maxWidth:'1000px',position:'absolute' ,objectPosition:"-20px 0" ,filter:"blur(1px)", objectFit:'cover', }} src={Project2.src} />
        <p
          className={`[writing-mode:vertical-rl]
          [transform:scale(-1)skew(25deg)rotate(25deg)]
          top-40
          skew
          left-3
          z-10
          text-lg
          text-white
          absolute
          ${anton.className}
          font-medium`}>Texto</p>
      </div>

      <div onClick={onClickChangeDisplayHandler} className={` ${displayOn? ('opacity-1 -right-32'): hiddenProperties} top-0 transition-all duration-1000 cursor-pointer box-content border-l-2 rounded-sm border-c-gray100 overflow-hidden -skew-x-25 w-1/3 absolute h-full `}>
        <Image
          height={'480'}
          width='1440'
          alt=""
          style={{transform:"skew(25deg,0) translatex(-80px)",height:'140%',width:'800px',maxWidth:'800px',position:'absolute',objectPosition:"-70px -150px",filter:"blur(1px)",
          objectFit:'cover',
          }}
          src={Project3.src} />
        <p
          className={`[writing-mode:vertical-rl] 
          [transform:scale(-1)skew(25deg)rotate(25deg)]
          top-40
          skew
          left-3
          z-10
          text-white
          text-lg
          absolute
          ${anton.className}
          font-medium`}>Texto</p>
      </div>
    </div>
  )
}