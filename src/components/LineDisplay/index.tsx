import Division from "../Division";
import localFont from 'next/font/local'
import { Anton, Roboto } from "next/font/google"

const blanka = localFont({ src: '../../public/Blanka.otf' })

const anton = Anton({
  weight:"400",
  subsets:['latin']
})

const roboto = Roboto({
  weight:"700",
  subsets:['latin']
})

export default function LineDisplay(){
  <div id='' className="flex flex-col align-middle ml-10">
    <Division  width='2px' height='40vh' marginTop='-2.5rem' marginRight='auto' marginBottom='1rem' marginLeft='auto' />
    <div className="w-4 h-4 rounded-full mx-auto border-c-green500 border-2 " />
    <Division  width='2px' height='10vh' marginTop='1rem' marginRight='auto' marginBottom='1rem' marginLeft='auto' />
    <p className={`text-c-green500 tracking-widest  ${blanka.className}`} style={{writingMode:"vertical-lr"}} >FRONT -END DEVELOPER</p>
    <div className={`mt-2 h-2 w-5 bg-c-green500`} />
    <div className={` mt-1 h-1 w-5 bg-c-green500`} />
    <Division  width='2px' height='70vh' marginTop='1rem' marginRight='auto' marginBottom='1rem' marginLeft='auto' />
  </div>
}