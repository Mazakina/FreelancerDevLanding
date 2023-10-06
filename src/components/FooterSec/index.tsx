'use client'

import localFont from "next/font/local"
import { Anton } from "next/font/google"
import Link from "next/link"

const blanka = localFont({ src: "../../../public/Blanka.otf" })
const anton = Anton({
  weight:'400',
  subsets:['latin']
})
export default function FooterSec(){
  return(
    <footer id='footer'>
      <div className={`flex max-w-4xl mx-auto  justify-center items-center`}>
        <h2 className={` text-3xl -mt-2 ml-4 ${blanka.className}`}>
          MAZA<span className="text-c-orange500">K</span>INA
        </h2>
        <div className="border mx-6 border-black flex-1 " />
        <p className={`text-sm -mt-1 text-c-orange500 ${blanka.className}`}>
          FRONT-END DEVELOPER
        </p>
        <div className="border ml-6 mr-4 border-black flex-1 " />
      </div>
      <div className={`${anton.className} flex max-w-4xl mb-20 mt-20 mx-auto justify-around`} >
        <ul>
          <h5 className="text-c-orange500 text-lg" >Menu</h5>
          <li className='mt-4'><Link href='#home'>Home</Link></li>
          <li className='mt-4'><Link href='#skills'>Portifolio</Link></li>
          <li className='mt-4'><Link href='#aboutMe'>Sobre Mim</Link></li>
          <li className='mt-4'><Link href='#contact'>Fale Comigo</Link></li>
        </ul>
        <ul>
          <h5 className="text-c-orange500 text-lg" >Redes Sociais</h5>
          <li className='mt-4'><Link target="_blank" href='https://www.instagram.com/mazakina_/'>Instagram</Link></li>
          <li className='mt-4'><Link target="_blank" href='https://www.linkedin.com/in/paulo-mazakina-1236811b4/'>LinkedIn</Link></li>
          <li className='mt-4'><Link target="_blank" href='https://github.com/Mazakina'>GitHub</Link></li>
          <li className='mt-4'><button onClick={()=>navigator.clipboard.writeText('8.mazakina@gmail.com')} >8.mazakina@gmail.com</button></li>
        </ul>
      </div>
    </footer>
  )
}