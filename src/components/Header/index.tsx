import { Anton } from "next/font/google"
import Division from "../Division";
import Link from "next/link";

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
        <Link href="#home" className='ml-10 cursor-pointer' >
          Home
        </Link>  
        <Link href='#skills' className='ml-10 cursor-pointer'>
          Meus Trabalhos
        </Link>
        <Link href='#aboutMe' className='ml-10 cursor-pointer'>
          Sobre Mim
        </Link>  
        <Link href='#contact' className='ml-10 cursor-pointer'>
          Fale Comigo
        </Link>
      </header>
      <Division width='98vw' height='2px' marginTop='.5rem' marginBottom='.5rem' marginLeft='auto' marginRight="auto" />
    </div>
  )
}