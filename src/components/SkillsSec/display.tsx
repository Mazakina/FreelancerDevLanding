import FirstImage from '@images/htmlImgWebp.webp'
import Project2 from '@images/Rect1.png'
import Project3 from '@images/projeto2 copy.png'
import Image from 'next/image'
import { Anton, Roboto } from 'next/font/google'

const roboto = Roboto({
  weight:"700",
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



  return(
    <div className="box-border border-2 rounded-sm border-c-gray100 display w-3/5 mt-20 mx-auto h-120 relative overflow-hidden">
      <div className="cursor-pointer box-content border-l-2 rounded-sm border-c-gray100 overflow-hidden -skew-x-25 w-4/5 bg-gray-600 absolute h-full right-0">
        <Image height={'480'} width='1440' alt=""  style={{transform:"skew(25deg,0) translatex(-150px)", objectPosition:"60px -60px", filter:"blur(2px)", height:'200%', objectFit:'cover', }} src={FirstImage.src} />
      </div>
      <div className="cursor-pointer box-content border-l-2 rounded-sm border-c-gray100
      overflow-hidden -skew-x-25 w-3/6 absolute h-full right-4">
        <Image height={'480'} width='1440' alt=""  style={{transform:"skew(25deg,0) translatex(-130px)",height:'100%',width:'1000px',maxWidth:'1000px',position:'absolute' ,objectPosition:"-20px 0" ,filter:"blur(1px)", objectFit:'cover', }} src={Project2.src} />
      </div>
      <div className="cursor-pointer box-content border-l-2 rounded-sm border-c-gray100 overflow-hidden -skew-x-25 w-1/3 absolute h-full -right-32">
        <Image height={'480'} width='1440' alt=""  style={{transform:"skew(25deg,0) translatex(-80px)",height:'140%',width:'800px',maxWidth:'800px',position:'absolute',objectPosition:"-70px -150px",filter:"blur(1px)", objectFit:'cover', }} src={Project3.src} />
      </div>
      <div className=" z-30 bg-white absolute h-full w-full ">
        <Image height={'480'} width='1440' alt=""  style={{height:'100%',width:'100%',position:'absolute', objectFit:'cover', }} src={Project3.src} />
        <div className="flex flex-col absolute right-0 h-full w-1/3 bg-transparent backdrop-blur-sm border-l-2 backdrop-brightness-50">
          <h2 className={`text-white text-xl ${anton.className} mx-auto mt-6 `} >Titulo</h2>
          <p className={`text-white text-xl ${anton.className} mx-auto mt-6 `}>Aplicativo JAM-Stack, feito para que artistas brasileiros divulguem suas artes e possiveis clientes entrem em contato. Utilizando de um layout interativo onde se pode arrastar imagens para dentro de albums ou serem deletadas</p>
        </div>
      </div>
    </div>
  )
}