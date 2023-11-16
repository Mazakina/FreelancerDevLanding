import newSvg from '@images/svg2.svg'
import Division from '../Division'
import {PiAppWindowLight} from 'react-icons/pi'
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'
import {LiaUserSolid} from 'react-icons/lia'
import { blanka } from '@/app/ui/fonts'



export default function SvgOverlay(){
  return(
    
    <div className='relative z-20 [max-width:100vw]'>
      {/* <div id="circle-one" className=" z-0 w-full ss:hidden [margin-top:440px] absolute [right:-74%]">
        <div  className=" absolute rounded-full border-2 borcer-c-green500 [width:650px] [height:650px] brightness-150 border-c-green500" />
        <div  className=" absolute rounded-full border-4 opacity-80 borcer-c-green500 [width:650px] [height:650px] blur-sm border-c-green500" />
      </div> */}
      {/* <div  id="circle-two" className="absolute ss:hidden rounded-full border-2 border-c-green500  opacity-30 [right:-11%] [top:100px] [width:600px] [height:600px] " /> */}
      {/* <div  id="circle-three" className="absolute  ss:hidden [top:2300px] rounded-full border-2 border-c-green500 opacity-70 [right:-11%] [width:600px] [height:600px] " /> */}
      <div id='right-home-line' className=' ss:hidden absolute [right:1.5vw]'>
        <VerticalDivision height='800px'/>
      </div>
      <div id='left-home-line' 
        className='
        absolute 
        flex-col 
        justify-center 
        items-center 
        ss:[margin-left:1rem] 
        [margin-left:1.53vw] 
      '>
        <VerticalDivision height='420px'/>
        <div className='w-4 h-4 rounded-full border-1  border-c-green500 shadow-inner mx-auto shadow-c-green500'/>
        <VerticalDivision height='100px'/>
        <p className={`text-c-green500 [writing-mode:vertical-lr] text-sm ${blanka.className} -mr-2 `}>
          FRONT-END DEVELOPER
        </p>
        <div
          className='
          [box-shadow:0px_3px_5px_2px_#00e25a92]
          [height:373px]
          ss:[height:325px]
          [width:2px]
          bg-c-green500
          rounded
          [margin:1rem_auto_-.5rem]
          '
        />

        <ProjectSvg />
        <div
          className='
          [box-shadow:0px_3px_5px_2px_#00e25a92]
          [height:30px]
          [width:2px]
          bg-c-green500
          rounded
          [margin:-1rem_auto_1rem]
          '
        />
      </div>
      
      <div className='absolute flex-col justify-center items-center ss:[right:1.5rem] [margin-left:2vw] ss:[margin-top:1800px] [margin-top:1823px] '>
        <AboutMeSvg />
        <VerticalDivision height='1300px'/>
      </div>
    </div>
  )
}


export function ProjectSvg(){
  return(
    <div className='mt-8 mb-10 -ml-1 w-0 '>
      <div className='w-fit items-center flex flex-row'>
        <div className='hover:brightness-150 transition-all w-7 h-7 relative'>
          <PiAppWindowLight className="absolute text-c-green500 -left-1  text-3xl " />
          <div className='absolute bg-c-green500 w-5 h-5 blur-md top-1 left-1' />
          <div className='absolute bg-c-green500 w-5 h-5 blur-xl top-1 left-1' />
        </div>
        <BiRightArrow className="text-c-green500  text-xl"/>
      </div>
    </div>
  )
}

export function AboutMeSvg(){
  return(
    <div className='mt-8 mb-6 -ml-2 ss:-ml-7 w-0 '>
      <div className='w-fit items-center flex flex-row'>
        <BiLeftArrow className="text-c-green500 ss:inline-block hidden  text-xl"/>
        <div className='hover:brightness-150 transition-all w-7 h-7 relative'>
          <LiaUserSolid className="absolute text-c-green500 -left-1 text-3xl " />
          <div className='absolute bg-c-green500 w-5 h-5 blur-md top-1 left-0' />
          <div className='absolute bg-c-green500 w-5 h-5 blur-xl top-1 left-0' />
        </div>
        <BiRightArrow className="text-c-green500 ss:hidden  text-xl"/>
      </div>
    </div>
  )
}

export function VerticalDivision({height}:{height:string}){
  return(
    <div
      className='
      [box-shadow:0px_3px_5px_2px_#00e25a92]
      [width:2px]
      [border-radius:3px]
      [margin:1rem_auto]
      bg-c-green500
      '
      style={{ 
      height:`${height}`,
      }}
    />
  )
}