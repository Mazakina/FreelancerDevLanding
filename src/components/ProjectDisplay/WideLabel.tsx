import Image, { StaticImageData } from "next/image"

interface Props{
  img:StaticImageData,
  className:React.ComponentProps<'div'>['className'],
  text:string,
  index:number
}
export default function WideLabel({img,className='',text,index}:Props){
  const isFirst = index===0
  return(
    <a
      className={`
      ${!isFirst && '-scale-y-100 mt-4 '}
      w-[280px]
      h-[95px]
      mdall:hidden
      cursor-pointer
      clip-path-wide-frame
      bg-[linear-gradient(200deg,_#005B56AB,_#00BF58);]
      `}
      >
      <div
        className={`
        relative
        mx-auto
        w-[262px]
        h-[95px]
        clip-path-wide
        bg-[${img}]
        `}
      >
        <Image 
        className={
        `brightness-75
        ${!isFirst && '-scale-y-100'}
        `
        }
        src={img} alt='' />
        <p className={`
          -translate-x-1/2 left-1/2
          -translate-y-1/2 top-1/2
          absolute
          whitespace-nowrap
          text-lg
          font-bold
          tracking-widest
          ${!isFirst && '-scale-y-100'}
          text-white`}
          >{text}</p>
      </div>
    </a>
  )
}