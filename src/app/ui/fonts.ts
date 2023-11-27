import {
  Anton,
  Noto_Sans as NotoSans,
  Orbitron,
  Roboto,
} from 'next/font/google'
import localFont from 'next/font/local'

export const blanka = localFont({
  src: '../../../public/Blanka.otf',
  preload: true,
})
export const alexana = localFont({
  src: '../../../public/Alexana.ttf',
  preload: true,
})

export const orbitron = Orbitron({
  weight: '400',
  subsets: ['latin'],
  preload: true,
})

export const sans = NotoSans({
  weight: '400',
  subsets: ['latin'],
})

export const anton = Anton({
  weight: '400',
  subsets: ['latin'],
})

export const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
})
