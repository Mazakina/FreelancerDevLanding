'use client'

import { orbitron } from '@/app/ui/fonts'
import { useTitleAnimation } from '@/utils/textAnimation'
import { useEffect, useState } from 'react'

export function Description() {
  const [text, setText] = useState('Desenvolvedor Front-end | UI | UX | WEB')
  const { handleReplace } = useTitleAnimation({
    text,
    setText,
    length: 38,
    interval: 70,
  })
  useEffect(() => {
    handleReplace()
  }, [])
  return (
    <p
      onClick={handleReplace}
      className={`
    ${orbitron.className}
    text-white
    tracking-[1px]
    ss:text-sm
    ss:w-60
    text-center
    `}
    >
      {text}
    </p>
  )
}
