'use client';
import { FormEvent, FormEventHandler, InvalidEvent, useReducer, useRef, useState } from "react";
import { blanka, orbitron, sans } from "@/app/ui/fonts";
import { motion, useInView, useAnimation, AnimatePresence, easeInOut } from "framer-motion";
import { sendContactForm } from "@/lib/contact";

interface State {
  name: string;
  email:string,
  telefone:string,
  assunto:string,
  mensagem:string,
  isLoading:boolean
}

type ActionTypes = typeof ACTIONS[keyof typeof ACTIONS]

const initialState: State = {
  name:'',
  email:'',
  telefone:'',
  assunto:'',
  mensagem:'',
  isLoading:false
}

function reducer(state:State, action:any){
  switch(action.type){
    case ACTIONS.SET_NAME:
      return {...state, name:action.payload};
    case ACTIONS.SET_EMAIL:
      return {...state, email:action.payload};
    case ACTIONS.SET_TELEFONE:
      return {...state, telefone:action.payload};
    case ACTIONS.SET_ASSUNTO:
      return {...state, assunto:action.payload};
    case ACTIONS.SET_MENSAGEM:
      return {...state, mensagem:action.payload};
    case ACTIONS.SET_IS_LOADING:
      return {...state, isLoading:action.payload};
    case ACTIONS.RESET:
      return initialState
    default:
      return state;
  }
}

const ACTIONS = {
  SET_NAME:'set-name',
  SET_EMAIL:'set-email',
  SET_TELEFONE:'set-telefone',
  SET_ASSUNTO:'set-assunto',
  SET_MENSAGEM:'set-mensagem',
  SET_IS_LOADING:'is-loading',
  RESET:'reset'
}

export default function ContactMeSec() {
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

  const [ state , dispatch ]= useReducer(reducer,initialState)
  
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "60px 0px 0px 0px "
  });


  function handleValueChange(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>,type:ActionTypes) {
    handleChange(event)
    dispatch({ type: type, payload: event.target.value })
  }


  async  function submitHandler(event:React.FormEvent<HTMLFormElement>) {
      event?.preventDefault()
      dispatch({type:ACTIONS.SET_IS_LOADING,isLoading:true})
      const response = await sendContactForm(state)
      const data = await response.json()
      console.log(data)
  }

  const handleInvalid = (event:InvalidEvent<HTMLInputElement>) => {
    if (event.target.setCustomValidity) {
      event.target.setCustomValidity('Preencha este campo');
    }
  };

  const handleChange = (event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    event.target.setCustomValidity('');
  };
  
  const inputContact = ' rounded-md bg-c-blue800 mt-1 text-white p-1 ' + sans.className

  return (
    <div id='contact' className={`max-w-4xl  text-white  mx-auto z-20 sticky mt-16 mb-20`}>
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
                  <label htmlFor="name">Seu nome: <span className="text-red-400">*</span></label>
                  <input
                    required
                    onInvalid={handleInvalid}
                    className={`${inputContact} h-10 `}
                    type="text"
                    id="name"
                    placeholder="Digite aqui."
                    value={state.name}
                    onChange={(event)=>handleValueChange(event,ACTIONS.SET_NAME)} />
                </div>
                <div className="flex mx-auto ss:[width:100%]  flex-col w-3/5 ss:pl-0  pl-8">
                  <label htmlFor="email">E-mail: <span className="text-red-400">*</span></label>
                  <input
                    onInvalid={handleInvalid}
                    className={`${inputContact}
                      h-10`}
                    required
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={state.email}
                    onChange={(event)=>handleValueChange(event,ACTIONS.SET_EMAIL)}  />
                </div>
              </motion.div>
              <motion.div
                variants={item}
                className={`${orbitron.className}  
                transition-all duration-1000 w-4/5 mt-3  ss:flex-col flex justify-center text-base`}>
                <div className="flex flex-col ss:mx-auto ss:[width:100%] ss:pl-0 w-1/5">
                  <label htmlFor="telefone">Telefone:</label>
                  <input
                    className={`${inputContact}
                      h-10  `}
                    type="tel"
                    id="telefone"
                    placeholder="(**) _____-____"
                    value={state.telefone}
                    onChange={(event)=>handleValueChange(event,ACTIONS.SET_TELEFONE)}  />
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
                      value={state.assunto}
                      onChange={(event)=>handleValueChange(event,ACTIONS.SET_ASSUNTO)}/>
                </div>
              </motion.div>
              <motion.div
                variants={item}
                className={`${orbitron.className} 
                transition-all duration-1000mx-auto mt-3 w-4/5 flex flex-col justify-center text-base`}>
                <label  htmlFor="mensagem">Mensagem: <span className="text-red-400">*</span></label>
                <textarea
                  onInvalid={handleInvalid}
                  required
                  className={`${inputContact}
                    h-32`}
                  placeholder="Me mande uma mensagem."
                  id="mensagem"
                  value={state.mensagem}
                  onChange={(event)=>handleValueChange(event,ACTIONS.SET_MENSAGEM)}  />
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
