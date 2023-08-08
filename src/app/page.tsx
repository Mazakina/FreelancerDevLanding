import localFont from 'next/font/local'
import Header from '@components/Header'
import ProjectDisplay from '@/components/ProjectDisplay'
import { Anton, Roboto } from "next/font/google"
import Division from '@/components/Division'
import Image from 'next/image'
import Bg from '@images/Bg-full.png'
const blanka = localFont({ src: '../../public/Blanka.otf' })

const anton = Anton({
  weight:"400",
  subsets:['latin']
})

const roboto = Roboto({
  weight:"700",
  subsets:['latin']
})

export default async function Home() {
  return (
    <main>
      <section className='absolute w-full' >
        <Header className="p-auto ml-24 mx-4 z-10"/>
        <Division width='98%' height='2px' marginTop='.5rem' marginBottom='.5rem' marginLeft='auto' marginRight="auto" />
        <div className=" flex">
          <div id='' className="flex flex-col align-middle ml-10">
            <Division  width='2px' height='40vh' marginTop='-2.5rem' marginRight='auto' marginBottom='1rem' marginLeft='auto' />
            <div className="w-4 h-4 rounded-full mx-auto border-c-green500 border-2 " />
            <Division  width='2px' height='10vh' marginTop='1rem' marginRight='auto' marginBottom='1rem' marginLeft='auto' />
            <p className={`text-c-green500 tracking-widest  ${blanka.className}`} style={{writingMode:"vertical-lr"}} >FRONT -END DEVELOPER</p>
            <div className={`mt-2 h-2 w-5 bg-c-green500`} />
            <div className={` mt-1 h-1 w-5 bg-c-green500`} />
            <Division  width='2px' height='70vh' marginTop='1rem' marginRight='auto' marginBottom='1rem' marginLeft='auto' />
          </div>
          <div className={`bg-c-gray100 w-full max-w-7xl min-h-screen justify-center flex-1 mx-auto mt-5 ${anton.className}`}>
            <section className='flex justify-between mt-16' >
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
          <Division  width='2px' height='100vh' marginTop='-2.5rem' marginRight='auto' marginBottom='0rem' marginLeft='auto' />
        </div>
      </section>

    </main>
  )
}
