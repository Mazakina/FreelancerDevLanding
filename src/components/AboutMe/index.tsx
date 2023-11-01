import { Anton } from "next/font/google"

const anton = Anton({
  weight:"400",
  subsets:['latin']
})


export default function AboutMe(){


  
  return(
    <div id='aboutMe' className={`${anton.className} flex justify-center  mx-auto w-full flex-col text-cyan-50 mt-56`}>
      <h3 className=" self-center mr-auto ml-32 mb-16 text-3xl tracking-widest ">S<span className={'text-c-orange500'}>O</span>BRE MIM</h3>
      <div className="mx-8 [max-height:650px] ss:grid-cols-1 ss:grid-rows-3 center grid text-xl grid-cols-2 grid-rows-2 text-cyan-50">

      </div>
    </div>
  )
}