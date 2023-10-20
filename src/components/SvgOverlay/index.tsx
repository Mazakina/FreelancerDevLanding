import newSvg from '@images/svg2.svg'
import Division from '../Division'
import localFont from 'next/font/local'
import {PiAppWindowLight} from 'react-icons/pi'
import {BiRightArrow} from 'react-icons/bi'
import {LiaUserSolid} from 'react-icons/lia'


const blanka = localFont({ src: '../../../public/Blanka.otf' })

export default function SvgOverlay(){
  return(
    
    <div className='relative z-10 [max-width:100vw]'>
      <div id="circle-one" className=" z-0 w-full [margin-top:440px] absolute [right:-74%]">
        <div  className=" absolute rounded-full border-2 borcer-c-green500 [width:650px] [height:650px] brightness-150 border-c-green500" />
        <div  className=" absolute rounded-full border-4 opacity-80 borcer-c-green500 [width:650px] [height:650px] blur-sm border-c-green500" />
      </div>
      <div  id="circle-two" className="absolute  rounded-full border-2 border-c-green500  opacity-30 [right:-11%] [top:100px] [width:600px] [height:600px] " />
      <div  id="circle-three" className="absolute [top:2300px] rounded-full border-2 border-c-green500 opacity-70 [right:-11%] [width:600px] [height:600px] " />
      <div className='absolute [right:1.5vw]'>
        <VerticalDivision height='800px'/>
      </div>
      <div className='absolute flex-col justify-center items-center [margin-left:1.53vw] '>
        <VerticalDivision height='350px'/>
        <div className='w-4 h-4 rounded-full border-1 border-c-green500 shadow-inner mx-auto shadow-c-green500'/>
        <VerticalDivision height='100px'/>
        <p className={`text-c-green500 [writing-mode:vertical-lr] text-sm ${blanka.className} -mr-2 `}>
          FRONT-END DEVELOPER
        </p>
          <VerticalDivision height='640px'/>
        <ProjectSvg />
      </div>
      <svg style={{position:'absolute',
        margin:'1420px 0 0 1.5vw',
        paddingLeft:'.5rem',
        height:'875px', 
        filter: 'drop-shadow(0px 0px 4px rgb(0,226,90)) brightness(1.2)',
        width:'98.5%'}}   
        id="line-box" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none">
        <path d={`M 0 2 L 0 34 L 4 38 L 96 38 L 98 42 L 98 95`}
              fill="none"
              stroke="#00e25aa7"
              stroke-width="2"
              vector-effect="non-scaling-stroke"></path>
      </svg>
      <svg style={{position:'absolute',
        margin:'1420px 0 0 1.5vw',
        paddingLeft:'.5rem',
        height:'875px', 
        filter: 'drop-shadow(0px 0px 4px rgb(0,226,90)) brightness(1.2)',
        width:'98.5%'}} 
        id="line-box" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none">
        <path d={`M 0 2 L 0 34 L 4 38 L 96 38 L 98 42 L 98 95`}
              fill="none"
              stroke="#00e25aa7"
              stroke-width="2"
              vector-effect="non-scaling-stroke"></path>
      </svg>
      <div className='absolute flex-col justify-center items-center  [margin-left:2vw] [margin-top:2200px] '>
        <AboutMeSvg />
        <VerticalDivision height='1300px'/>
      </div>
    </div>
  )
}


export function ProjectSvg(){
  return(
    <div className='mt-8 -ml-1 w-0 '>
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
    <div className='mt-8 -ml-2 w-0 '>
      <div className='w-fit items-center flex flex-row'>
        <div className='hover:brightness-150 transition-all w-7 h-7 relative'>
          <LiaUserSolid className="absolute text-c-green500 -left-1 text-3xl " />
          <div className='absolute bg-c-green500 w-5 h-5 blur-md top-1 left-1' />
          <div className='absolute bg-c-green500 w-5 h-5 blur-xl top-1 left-1' />
        </div>
        <BiRightArrow className="text-c-green500  text-xl"/>
      </div>
    </div>
  )
}

export function VerticalDivision({height}:{height:string}){
  return(
    <div
      style={{ 
      boxShadow: `0px 3px 5px 2px #00e25a92 `,
      height:`${height}`,
      width:'2px',
      backgroundColor:'#00e75d',
      borderRadius:"3px",
      margin:'1rem auto'
      }}
    />
  )
}