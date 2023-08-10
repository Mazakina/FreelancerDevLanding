import { Anton } from "next/font/google"
import Division from "../Division";

const anton = Anton({
  weight:"400",
  subsets:['latin']
})

interface HeaderSiteProps{
  className?:string;
}
export default function Header({className}:HeaderSiteProps){
  
  return(
    <div className="absolute -translate-x-1/2 left-1/2">
      <header  className={`${className} ${anton.className} mt-4`  }  >
        <a className='ml-10 cursor-pointer' >
          Home
        </a>  
        <a className='ml-10 cursor-pointer'>
          Meus Trabalhos
        </a>
        <a className='ml-10 cursor-pointer'>
          Sobre Mim
        </a>  
        <a className='ml-10 cursor-pointer'>
          Fale Comigo
        </a>
      </header>
      <Division width='95vw' height='2px' marginTop='.5rem' marginBottom='.5rem' marginLeft='auto' marginRight="auto" />
    </div>
  )
}