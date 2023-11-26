import bgImg from '@images/1.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function BgImage() {
  const [test, setTest] = useState(false)
  setTimeout(() => {
    setTest(true)
  }, 500)

  const [screenWidth, setScreenWidth] = useState<number>(769)

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    updateScreenWidth()

    window.addEventListener('resize', updateScreenWidth)

    return () => {
      window.removeEventListener('resize', updateScreenWidth)
    }
  }, [])

  const isLarge = screenWidth > 768

  return (
    <div
      className="
      z-0
      w-full
      h-screen-1
      fixed
      overflow-hidden
      bg-teal-800
      "
    >
      <svg
        className="absolute ss:ml-4 -translate-x-1/2 z-10 left-1/2  "
        width="900px"
        height="900px"
        viewBox="0  0 900 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        {test && (
          <>
            <motion.circle
              className="
          "
              animate={{
                rotate: -360,
                transition: {
                  ease: 'linear',
                  duration: 66,
                  repeat: Infinity,
                },
              }}
              fill="transparent"
              stroke="#d6fcf0"
              cx="50%"
              cy="48%"
              strokeWidth={3}
              strokeDasharray="10"
              r={isLarge ? '300px' : '138px'}
            />
            <motion.circle
              animate={{
                rotate: 360,
                transition: {
                  ease: 'linear',
                  duration: 60,
                  repeat: Infinity,
                },
              }}
              fill="transparent"
              stroke="#d6fcf0"
              cx="50%"
              cy="48%"
              strokeWidth={3}
              strokeDasharray="12"
              r={isLarge ? '315px' : '130px'}
            />
          </>
        )}
      </svg>

      <Image
        src={bgImg}
        priority
        alt="imagem de fundo"
        className="
        w-full
        h-screen-1
        blur-[3px]
        overflow-hidden
        absolute
        object-cover
        ss:[object-position:50%2rem]
        [object-position:50%_40%]
       "
      />
      <div
        style={{
          opacity: 0.7,
          background:
            'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5210918114143921) 45%, rgba(0,0,0,0.95) 100%)',
          zIndex: 5,
          position: 'absolute',
        }}
        className="
      w-full
      h-screen-1
      "
      />

      <div
        className="
        [background-image:_radial-gradient(#d4ce7d73_1px,_transparent_0);]
        [background-size:_40px_40px;] 
        absolute
        top-[-5px]
        w-full
        h-screen-1
        [background-position:_-19px_-19px;]
      "
      />
    </div>
  )
}
