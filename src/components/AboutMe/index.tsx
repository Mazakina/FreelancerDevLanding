'use client'

import portrait from '@images/portrait.png'
import banner from '@images/Long-banner.png'
import Image from 'next/image'
import { useState } from 'react'
import { Card } from './Card'
import { orbitron, blanka } from '@/app/ui/fonts'
import { AboutMeSvg, VerticalDivision } from '../SvgOverlay'

export default function AboutMe() {
  const [currentActive, setCurrentActive] = useState<number>(3)

  return (
    <div
      className={`${orbitron.className} z-20 sticky flex justify-center  mx-auto w-full flex-col text-cyan-50 `}
    >
      <div
        className="grid 
        mdall:[grid-template-columns:1fr_1fr_215px] 
        ss:grid-container-phone
        mdall:gap-20 
        mx-auto 
        [width:85%] 
        h-fit
        "
      >
        <div className="h-full ">
          <Image
            className="
            ss:[grid-row:image]
            absolute
            mt-4
            opacity-[0.15]
            ss:opacity-10
            hover:opacity-[0.3]
            transition-all
            "
            src={banner}
            alt=""
          />
        </div>

        <div
          className="
          mdall:col-span-1
          ss:[grid-row:display]
          h-full flex  items-center"
        >
          <div
            className={` ${orbitron.className} 
            container 
            flex
            mt-auto 
            mb-12 
            md:mb-0
            flex-1 
            md:w-[350px]
            lg-all:w-[660px] 
            [height:420px]
            ss:mt-32 
            up-to-md:h-[615px]
            up-to-md:flex-col
            lg-all:[max-height:420px] 
            `}
          >
            <Card
              title={'Clear Code'}
              content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, sapiente?"
              index={0}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />

            <Card
              title={'Alta Fidelidade'}
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, sapiente?"
              index={1}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />

            <Card
              title={'Animação'}
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, sapiente?."
              index={2}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />

            <Card
              title={'Sobre mim'}
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, sapiente?."
              index={3}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />
          </div>
        </div>
        <div
          className="
            mdall:col-span-1 
            ss:[grid-row:frame]
            ss:ml-auto

            "
        >
          <VerticalDivision height="110px" />
          <div
            className="
          relative
          h-[150px]
          flex
          items-center
          "
          >
            <h3
              className={`
            absolute
            text-6xl
            ss:text-4xl
            [max-width:90vw]
            ${blanka.className}
            w-screen
            text-white
            right-[0%]
            text-right
            `}
            >
              Lorem ipsum dolor sit amet. <br className="ss:hidden" /> Lorem,
              dolor.
            </h3>
          </div>
          <VerticalDivision height="680px" />
          <div
            id="about-me"
            className="
            rounded-md 
            flex 
            relative
            border-[5px]
            border-c-cyan500 
            justify-center
            ss:w-[175px] ss:min-h-[350px] w-[215px] h-[520px] 
            items-center"
          >
            <div
              className="
            absolute 
            left-[55%] 
            -top-72
            tracking-[3px]
            "
            >
              <div className="rotate-90  -ml-3">
                <AboutMeSvg />
              </div>
              <h5
                className={`
                ${blanka.className}
                text-3xl
                [writing-mode:vertical-lr]
                `}
              >
                S<span className="text-c-orange500">o</span>bre Mim
              </h5>
            </div>
            <Image
              className="
            object-cover 
            ss:w-[175px] 
            ss:min-h-[350px] 
            w-[215px] 
            h-[520px]"
              src={portrait.src}
              alt="portrait"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
}
