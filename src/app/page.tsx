import Header from '@components/Header'
import localFont from 'next/font/local'
import { Anton, Roboto } from "next/font/google"
import HomeSec from '@/components/HomeSec'
import SkillsSec from '@/components/SkillsSec'
import ContactMeSec from '@/components/ContactMeSec'
import FooterSec from '@/components/FooterSec'
import SvgOverlay from '@/components/SvgOverlay'
import SideNav from '@/components/SideNav'
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
      <section className='relative w-full overflow-hidden' >
        <SideNav/>
        <SvgOverlay/>
        <Header className="p-auto ml-24 mr-4 z-10"/>
        <HomeSec/>
        <SkillsSec/>
        <ContactMeSec/>
        <FooterSec/>
      </section>
    </main>
  )
}
