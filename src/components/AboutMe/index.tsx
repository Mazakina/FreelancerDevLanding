'use client'

import portrait from '@images/profile.png'
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
      className={`${orbitron.className} z-20 sticky flex justify-center h-fit mx-auto w-full flex-col text-cyan-50 `}
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
          md:-mb-[250px]
          h-fit mt-auto flex  items-center "
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
            w-full
            lg-all:w-[660px] 
            [height:420px]
            ss:mt-12 
            up-to-md:h-[815px]
            up-to-md:flex-col
            lg-all:[max-height:420px] 
            relative
            `}
          >
            <Card
              title={'Clear Code'}
              content="Priorizo código limpo e legível, aplicando Clean Architecture e DDD para criar software robusto, escalável e de fácil manutenção. Foco em componentes reutilizáveis e arquitetura que facilita a evolução e colaboração"
              index={0}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />

            <Card
              title={'Alta Fidelidade'}
              content="Transformo designs em interfaces visualmente impecáveis e fiéis ao layout (pixel-perfect). Com atenção aos detalhes, uso HTML semântico, CSS moderno e JS/TS (React/Next.js) para criar UIs fluidas e responsivas."
              index={1}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />

            <Card
              title={'Animação'}
              content="Utilizo animações sutis e estratégicas para guiar o usuário, fornecer feedback e tornar a navegação mais intuitiva e agradável, sempre equilibrando performance e engajamento visual."
              index={2}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />

            <Card
              title={'Sobre mim'}
              content="Desenvolvedor fullstack (React, Next.js, NestJS) apaixonado por resolver problemas com código. Com background em Audiovisual e Mecatrônica, sou analítico, atento a detalhes e resiliente. "
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
              Tecnologia que entrega valor <br className="ss:hidden" /> além das
              expectativas!
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
