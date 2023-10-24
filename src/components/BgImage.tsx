import bgImg from '@images/giphy4.gif'
import Image from 'next/image'

export default function BgImage() {
  return(
    <div
      className='
      z-0
      w-full
      h-screen-1
      absolute
      overflow-hidden
      '>
      <Image src={bgImg}
        priority
        alt='imagem de fundo' 
        className='
        z-0
        w-full
        h-screen-1
        overflow-hidden
        absolute
        blur-sm
        object-cover
        [object-position:50%2rem]
       '/>
       <div
       style={{
        background:'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5210918114143921) 45%, rgba(0,0,0,0.95) 100%)',
        zIndex:5,
        position:'absolute',
       }}
       className='
       w-full
       h-screen-1
       '
       />
    </div>
  )
}