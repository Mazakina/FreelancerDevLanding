'use client'
import Link from 'next/link'
import { useState } from 'react'
import { BiHome, BiUserPin, BiMessageAltDetail } from 'react-icons/bi'
import { BsCodeSlash, BsList } from 'react-icons/bs'
import { IoArrowBackOutline } from 'react-icons/io5'
import { orbitron, alexana } from '@/app/ui/fonts'
import { AnimatePresence, motion } from 'framer-motion'
import { HomeLeftSvg } from '../SvgOverlay'

export default function ResponsiveHeader() {
  const [modal, setModal] = useState(false)

  function modalButtonHandle() {
    setModal(!modal)
  }
  return (
    <>
      <header className="fixed backdrop-blur-md z-50 [width:100%] flex ">
        <div className=" h-14 z-40 [width:100%] flex justify-center  ">
          <h2 className={` text-3xl mt-3  text-white ${alexana.className}`}>
            MAZA<span className="text-c-orange500">K</span>INA
          </h2>
        </div>
        <button
          onClick={modalButtonHandle}
          className="z-40 ml-6 [top:10px] absolute  text-4xl hover:text-c-green500 text-white"
        >
          {modal ? <IoArrowBackOutline /> : <BsList />}
        </button>
      </header>
      <AnimatePresence>
        {modal && (
          <motion.div
            id="header-overlay "
            initial={{
              y: '-100%',
              x: '-100%',
              borderRadius: '0 100% 100% 0',
            }}
            animate={{
              y: '0',
              x: '0',
              borderRadius: '0',
            }}
            exit={{
              y: '-100%',
              x: '-100%',
              borderRadius: '100%',
            }}
            transition={{
              type: 'spring',
              duration: 1,
            }}
            className={`fixed
            z-40
            backdrop-blur-md
            text-white
            [background-color:#0f13164e]
            flex-col
            top-14
            w-full
            flex
            [height:100vh]
            ${orbitron.className}`}
          >
            <Link
              href="#home"
              onClick={modalButtonHandle}
              className="flex  ml-10 mt-8 text-lg cursor-pointer hover:text-c-green500"
            >
              <BiHome className="my-auto mr-3 text-2xl text-c-green500" />{' '}
              <p className="">Home</p>
            </Link>
            <Link
              href="#projetos"
              onClick={modalButtonHandle}
              className="flex  ml-10 mt-8 text-lg cursor-pointer hover:text-c-green500"
            >
              <BsCodeSlash className="my-auto mr-3 text-2xl text-c-green500" />{' '}
              <p className="">Meus Trabalhos</p>
            </Link>
            <Link
              href="#about-me"
              onClick={modalButtonHandle}
              className="flex  ml-10 mt-8 text-lg cursor-pointer hover:text-c-green500"
            >
              <BiUserPin className="my-auto mr-3 text-2xl text-c-green500" />{' '}
              <p className="">Sobre Mim</p>
            </Link>
            <Link
              href="#contact"
              onClick={modalButtonHandle}
              className="flex  ml-10 mt-8 text-lg cursor-pointer hover:text-c-green500"
            >
              <BiMessageAltDetail className="my-auto mr-3 text-2xl text-c-green500" />{' '}
              <p className="">Fale Comigo</p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
            z-40
            fixed 
            flex-col 
            justify-center 
            items-center 
            ss:[margin-left:1rem] 
            [margin-left:1.53vw] 
            "
          >
            <HomeLeftSvg />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
