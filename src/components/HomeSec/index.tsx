import Division from "../Division";
import ProjectDisplay from "../ProjectDisplay";
import localFont from 'next/font/local'
import { Anton, Roboto } from "next/font/google"
const blanka = localFont({ src: '../../../public/Blanka.otf' })

const anton = Anton({
  weight:"400",
  subsets:['latin']
})

const roboto = Roboto({
  weight:"700",
  subsets:['latin']
})

export default function HomeSec(){
  return(
    <div className={`bg-c-gray100 w-full max-w-8xl h-screen-1 justify-center flex-1 mx-auto  ${anton.className}`}>
      <section className='flex justify-between pt-24 ' >
        <div className=" flex flex-col left-home align-center justify-center max-w-112 w-1/3">
          <p className= {`w-fit text-c-orange500 tracking-widest`}>
            Desenvolvedor Front-End | WEB | UI | UX  
          </p>
          <h1 className={`flex text-c-gray700 text-6xl tracking-wider mt-5 ${roboto.className}`}>
            Torem ipsum,<br/> dolor sit amet
          </h1>
          <h5 className={`flex text-c-gray400 text-right tracking-wider mt-11 `} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec viverra purus. Ut at arcu lacinia, convallis purus, 
          </h5>
        </div>
        <div className={"right-home  max-w-140 w-fit"}>
          <div className={"project-preview"}>

          </div>
          <div className={"right-home-info"}>
            <div>
              <ProjectDisplay/>
              <div className={"ml-40 mt-12"}>
                <h2 className={` text-6xl ${blanka.className}`}>
                MAZA<span className="text-c-orange500">K</span>INA
                </h2>
                <div className={"flex mt-8 ml-24"}>
                  <a  href="">IN</a>
                  <a className={"ml-6"} href="">GiT</a>
                  <p className={"ml-6"}>(11) 99609-2722</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}