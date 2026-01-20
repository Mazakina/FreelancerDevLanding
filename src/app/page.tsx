import Header from '@components/Header'
import HomeSec from '@/components/HomeSec'
import SkillsSec from '@/components/SkillsSec'
import ContactMeSec from '@/components/ContactMeSec'
import FooterSec from '@/components/FooterSec'
import SvgOverlay from '@/components/SvgOverlay'
import ResponsiveHeader from '@/components/ResponsiveHeader'

export default async function Home() {
  return (
    <main>
      <section className="relative w-full overflow-hidden bg-c-gray900">
        <Header />
        <ResponsiveHeader />
        <SvgOverlay />
        <HomeSec />
        <SkillsSec />
        <ContactMeSec />
        <FooterSec />
      </section>
    </main>
  )
}
