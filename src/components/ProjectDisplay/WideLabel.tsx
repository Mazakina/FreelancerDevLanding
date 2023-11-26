import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

interface Props {
  img: StaticImageData
  className: React.ComponentProps<'div'>['className']
  text: string
  index: number
  href: string
}
export default function WideLabel({
  img,
  className = '',
  href,
  text,
  index,
}: Props) {
  const isFirst = index === 0
  return (
    <div
      className={`
      ${className}
      group
      w-[280px]
      h-[95px]
      flex
      transition-all
      duration-300
      hover:[filter:drop-shadow(0px_0px_15px_#2ff8ff)] 
      items-center
      justify-center
      `}
    >
      <motion.a
        href={href}
        className={`
        ${!isFirst && '-scale-y-100 ss:mt-4 '}
        w-[280px]
        clip-path-wide-frame
        h-[95px]
        relative
        cursor-pointer
        bg-[linear-gradient(200deg,_#fed9b7b2,_#00b0b9bc);]
        `}
      >
        <div
          className={`
          relative
          mx-auto
          w-[262px]
          h-[95px]
          clip-path-wide
          `}
        >
          <Image
            className={`
            brightness-50
            group-hover:brightness-110
            '
            ${!isFirst && '-scale-y-100'}
            `}
            src={img}
            alt=""
          />
          <motion.p
            className={`
            -translate-x-1/2 left-1/2
            -translate-y-1/2 top-1/2
            absolute
            whitespace-nowrap
            text-lg
            font-bold
            tracking-widest
            group-hover:opacity-0
            ${!isFirst && '-scale-y-100'}
            text-white`}
          >
            {text}
          </motion.p>
        </div>
      </motion.a>
    </div>
  )
}
