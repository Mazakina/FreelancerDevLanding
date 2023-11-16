import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

interface Props {
  img:string|StaticImport;
  className?: React.ComponentProps<'div'>['className'];
}

export function PersonalCard({img, className, content }:any){

  return(
    <div
      className={`
      overflow-hidden
      flex
      border
      justify-center
      items-center
      relative
      border-c-gray200
      hover:brightness-125
      transition-all
      [border-radius:5px]
      overflow-hidden
      bg-black 
      `+className}>
      <Image src={img} alt='foto de fundo de um café' className='[height:100%] absolute [width:100%] object-cover blur-sm brightness-50'/>
      <p className="z-10  m-4">
        {content}
      </p>
    </div>
  )
}