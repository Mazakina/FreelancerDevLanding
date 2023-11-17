'use client';
import { useEffect, useRef, useState } from "react";
import { blanka, orbitron, sans } from "@/app/ui/fonts";
import { motion, useInView, useAnimation, AnimatePresence, easeInOut } from "framer-motion";




export default function ContactMeSec() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "60px 0px 0px 0px "
  });


  function handleNameChange(event: any) {
    setName(event.target.value);
  }
  function handleEmailChange(event: any) {
    setEmail(event.target.value);
  }
  function handleTelefoneChange(event: any) {
    setTelefone(event.target.value);
  }
  function handleAssuntoChange(event: any) {
    setAssunto(event.target.value);
  }
  function handleMensagemChange(event: any) {
    setMensagem(event.target.value);
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity:1,
      transition:{
        staggerChildren: 0.3
      }
    }
  }
  
  const item = {
    hidden: { 
      opacity: 0,
      transition:{
        duration:.5,
        ease:easeInOut
      }
    },
    show: {
      opacity:1,
    }
  }

  function submitHandler(event: any) {
    //   event?.preventDefault()
    //   Email.send({
    //     SecureToken :  'abca405b-09bc-49b2-beab-c10be4fe658e',
    //     To : 'them@website.com',
    //     From : "you@isp.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );
  }

  const inputContact = ' rounded-md bg-c-blue800  text-white p-1 ' + sans.className;
  return (
    <div id='contact' className={`max-w-4xl text-white  mx-auto z-20 sticky mt-16 mb-20`}>
      <form ref={ref} method='post' action='contact' onSubmit={submitHandler}>
        <AnimatePresence>
          {isInView ? (
          <motion.fieldset
            variants={container}
            initial="hidden"
            animate="show"
            className="ss:[width:90%] mx-auto flex flex-col justify-center items-center "
          >
            <motion.legend 
              variants={item}
              className={`${blanka.className} 
              transition-all duration-1000
              flex justify-center mx-auto text-2xl mb-9`}>Fale Comigo
            </motion.legend>
            <motion.div 
              variants={item}
              className={`${orbitron.className} transition-all duration-1000 w-4/5  ss:flex-col flex justify-center text-base`}>
              <div className=" ss:mx-auto ss:[width:100%] flex flex-col  w-2/5">
                <label htmlFor="name">Seu nome: *</label>
                <input
                  className={`${inputContact} h-10 `}
                  type="text"
                  id="name"
                  placeholder="Digite aqui."
                  value={name}
                  required
                  onChange={handleNameChange} />
              </div>
              <div className="flex mx-auto ss:[width:100%]  flex-col w-3/5 ss:pl-0  pl-8">
                <label htmlFor="email">E-mail:</label>
                <input
                  className={`${inputContact}
                    h-10`}
                  required
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange} />
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className={`${orbitron.className}  
              transition-all duration-1000 w-4/5  ss:flex-col flex justify-center text-base`}>
              <div className="flex flex-col ss:mx-auto ss:[width:100%] ss:pl-0 w-1/5">
                <label htmlFor="telefone">Telefone:</label>
                <input
                  className={`${inputContact}
                    h-10  `}
                  type="tel"
                  id="telefone"
                  placeholder="(**) _____-____"
                  value={telefone}
                  onChange={handleTelefoneChange} />
              </div>
              <div className=" flex flex-col w-4/5 pl-8 mx-auto ss:[width:100%] ss:pl-0">
                <label htmlFor="assunto">Assunto:</label>
                <input
                  className={`${inputContact}
                    h-10`}
                  type="text"
                  id="assunto"
                  placeholder='Digite
                    aqui.'
                  value={assunto}
                  onChange={handleAssuntoChange} />
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className={`${orbitron.className} 
              transition-all duration-1000mx-auto w-4/5 flex flex-col justify-center text-base`}>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                required
                className={`${inputContact}
                  h-32`}
                placeholder="Me mande uma mensagem."
                id="mensagem"
                value={mensagem}
                onChange={handleMensagemChange} />
            </motion.div>
            <motion.div
              variants={item}
              className="flex mx-auto justify-end w-4/5 mt-6">
              <button
                className="bg-c-orange500 border-2 border-c-orange500 text-white py-2 px-8 hover:bg-transparent hover:text-c-orange500  rounded-md "
                type="submit"
                name="enviar">Enviar</button>
            </motion.div>
          </motion.fieldset>
          ):(
            <div className="[height:400px]"/>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
