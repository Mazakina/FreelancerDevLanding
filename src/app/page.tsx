import Header from '@components/Header'
import ProjectDisplay from '@/components/ProjectDisplay'
import Division from '@/components/Division'
import localFont from 'next/font/local'
import { Anton, Roboto } from "next/font/google"
import HomeSec from '@/components/HomeSec'
import SkillsSec from '@/components/SkillsSec'
import AboutMe from '@/components/AboutMe'
const blanka = localFont({ src: '../../public/Blanka.otf' })

const anton = Anton({
  weight:"400",
  subsets:['latin']
})

const roboto = Roboto({
  weight:"700",
  subsets:['latin']
})

export default async function Home() {
  return (
    <main>
      <section className='relative w-full' >
        <Header className="p-auto ml-24 mr-4 z-10"/>
        <HomeSec/>
        <SkillsSec/>
        <AboutMe/>
      </section>

    </main>
  )
}
