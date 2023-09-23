import { Anton } from "next/font/google"

const anton = Anton({
  weight:"400",
  subsets:['latin']
})


export default function AboutMe(){


  
  return(
    <div id='aboutMe' className={`${anton.className} flex justify-center  mx-auto w-full flex-col text-cyan-50 mt-60`}>
      <h3 className=" self-center mx-auto mb-16 text-3xl tracking-widest ">S<span className={'text-c-orange500'}>O</span>BRE MIM</h3>
      <div className="center grid text-xl grid-cols-2 grid-rows-2 text-cyan-50">
        <div className='row-span-2 col-span-1'>
         IMAGE
        </div>
        <div className='row-span-1 col-span-1 max-w-md'>
        “To develop a complete mind: Study the science of art; Study the art of science. Learn how to see. Realize that everything connects to everything else.”
        </div>
        <div className='mt-44 row-span-1 col-span-1 max-w-md'>
          Sempre conectado com Arte e Tecnologia, a programação é onde eu expresso minha logica de forma criativa. 
        </div>
      </div>
    </div>
  )
}