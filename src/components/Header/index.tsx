import { Anton } from "next/font/google"

const anton = Anton({
  weight:"400",
  subsets:['latin']
})

interface HeaderSiteProps{
  className?:string;
}
export default function Header({className}:HeaderSiteProps){
  
  return(
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
  )
}