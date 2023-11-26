import { PiAppWindowLight } from 'react-icons/pi'
import { LiaUserSolid } from 'react-icons/lia'
import { blanka } from '@/app/ui/fonts'

export default function SvgOverlay() {
  return (
    <div className="relative  z-[30] [max-width:100vw]">
      <div
        id="right-home-line"
        className=" z-10  ss:hidden absolute [right:1.5vw]"
      >
        <VerticalDivision height="800px" />
      </div>
      <div
        id="left-home-line"
        className="
        
        absolute 
        flex-col 
        justify-center 
        items-center 
        ss:[margin-left:1rem] 
        [margin-left:1.53vw] 
      "
      >
        <VerticalDivision height="420px" />
        <div className="w-4 h-4 rounded-full border-1  border-c-green500 shadow-inner mx-auto shadow-c-green500" />
        <VerticalDivision height="100px" />
        <p
          className={`text-c-green500 [writing-mode:vertical-lr] text-sm ${blanka.className} -mr-2 `}
        >
          FRONT-END DEVELOPER
        </p>
        <div
          className="
          [box-shadow:0px_3px_5px_2px_#00e25a92]
          [height:414px]
          [width:2px]
          bg-c-green500
          rounded
          [margin:1rem_auto_-.5rem]
          "
        />

        <ProjectSvg />
        <div
          className="
          [box-shadow:0px_3px_5px_2px_#00e25a92]
          [height:30px]
          [width:2px]
          bg-c-green500
          rounded
          [margin:-1rem_auto_1rem]
          "
        />
      </div>

      <div
        className="
        absolute 
        flex-col 
        justify-center 
        items-center 
        ss:[right:1.5rem] 
        [margin-left:2vw] 
        ss:[margin-top:1800px] 
        [margin-top:1823px] 
        "
      ></div>
    </div>
  )
}

export function ProjectSvg() {
  return (
    <div className="mt-8 mb-10 ml-1 w-0 ">
      <div className="w-fit items-center flex flex-row">
        <div className="hover:brightness-150 -left-2 transition-all w-7 h-7 relative">
          <PiAppWindowLight className="absolute text-c-green500   text-3xl " />
          <div className="absolute bg-c-green500 w-5 h-5 blur-md left-1" />
          <div className="absolute bg-c-green500 w-5 h-5 blur-xl left-1" />
        </div>
      </div>
    </div>
  )
}

export function AboutMeSvg() {
  return (
    <div className="hover:brightness-150 transition-all w-7 h-7 relative">
      <LiaUserSolid className="absolute text-c-green500 -left-1 text-3xl " />
      <div className="absolute bg-c-green500 w-5 h-5 blur-md top-1 left-0" />
      <div className="absolute bg-c-green500 w-5 h-5 blur-xl top-1 left-0" />
    </div>
  )
}

export function VerticalDivision({ height }: { height: string }) {
  return (
    <div
      className="
      [box-shadow:0px_3px_5px_2px_#00e25a92]
      [width:2px]
      [border-radius:3px]
      [margin:1rem_auto]
      bg-c-green500
      "
      style={{
        height: `${height}`,
      }}
    />
  )
}
