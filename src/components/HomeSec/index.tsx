import ProjectDisplay from '../ProjectDisplay'
import BgImage from '../BgImage'

import { orbitron } from '@/app/ui/fonts'
import SocialsLink from './SocialsLink'
import { Title } from './Title'
import { Description } from './Description'

export default function HomeSec() {
  return (
    <section
      id="home"
      style={{}}
      className={`
      relative
      h-screen-1
      top-0
      z-20
      flex
      flex-col
      flex-1
      mx-auto
      ${orbitron.className}`}
    >
      <BgImage />
      <div
        className="
        z-20
        flex
        justify-center
        mt-32
        mb-auto
        mdall:mt-auto
        mx-auto
      "
      >
        <SocialsLink icon="github" href="https://github.com/Mazakina" />
        <SocialsLink
          icon="linkedin"
          href="https://www.linkedin.com/in/paulo-mazakina-1236811b4/"
        />
        <SocialsLink icon="phone" href="https://wa.me/5511966092722" />
      </div>
      <div
        id="center-home"
        className="
        z-20
        absolute
        left-[50%]
        -translate-x-1/2
        top-[48%]
        ss:ml-4
        -translate-y-1/2
        flex
        items-center
        flex-col
        "
      >
        <Title />
        <Description />
      </div>
      <div
        className="
        ss:flex-col 
        sticky 
        mx-auto
        ss:mt-auto
        w-full
        z-10 
        flex 
        [padding-top:6rem]
        justify-between
        lg:justify-center
        xl:justify-center
        ss:[padding-top:0rem] 
      "
      >
        <ProjectDisplay />
      </div>
    </section>
  )
}
