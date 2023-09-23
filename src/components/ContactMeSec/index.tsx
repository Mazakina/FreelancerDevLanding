import { Anton,Noto_Sans } from "next/font/google"

const anton = Anton({
  weight:"400",
  subsets:['latin']
})

const sans = Noto_Sans({
  weight:'400',
  subsets:['latin']
})


export default function ContactMeSec(){
  const inputContact = 'rounded-md bg-c-blue800 border border-c-orange500 text-white p-1 '+ sans.className
  return(
    <div id='contact' className= {`max-w-4xl mx-auto  mt-16 mb-20`}>
      <form method='post' action='contact'>
        <fieldset className="mx-auto ">
          <legend className={`${anton.className} flex justify-center mx-auto text-2xl mb-9`}>Fale Comigo</legend>
            <div className={`${anton.className} flex justify-center text-base`} >
              <div className="flex flex-col w-2/5">
                <label htmlFor="name">Seu nome:</label>
                <input className={`${inputContact}  h-10`} type="text" id="name" placeholder="Digite aqui."  />
              </div>
              <div className="flex flex-col w-2/5  pl-8" >
                <label htmlFor="email">E-mail:</label>
                <input className={`${inputContact} h-10`} type="email" id="email" placeholder="Email" />
              </div>
            </div>
            <div className={`${anton.className} flex justify-center text-base`} >
              <div className="flex flex-col w-1/5" >
                <label htmlFor="telefone">Telefone:</label>
                <input className={`${inputContact} h-10`} type="tel" id="telefone" placeholder="(**) _____-____"  />
              </div>
              <div className="flex flex-col w-3/5 pl-8" >
                <label htmlFor="assunto">Assunto:</label>
                <input className={`${inputContact} h-10`} type="text" id="assunto" placeholder='Digite aqui.'  />
              </div>
            </div>
            <div className={`${anton.className} mx-auto w-4/5 flex flex-col justify-center text-base`}>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea className={`${inputContact} h-32`} placeholder="Me mande uma mensagem." id="mensagem"/>
            </div>
            <div className="flex mx-auto justify-end w-4/5 mt-6">
              <button className="bg-c-orange500 border-2 border-c-orange500 text-white py-2 px-8 hover:bg-c-gray100 hover:text-c-orange500  rounded-md " type="submit" name="enviar">Enviar</button>        
            </div>
        </fieldset>
      </form>
    </div>
  )
}