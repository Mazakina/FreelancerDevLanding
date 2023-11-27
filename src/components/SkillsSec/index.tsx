import AboutMe from '../AboutMe'
import Carrosel from '../Carrosel'
import { blanka } from '@/app/ui/fonts'
import { Frame } from './Frame'

export default function SkillsSec() {
  return (
    <div className="z-20 sticky bg-[#0c0c0cbb]  h-screen-2 ss:h-[3350px] flex-1 ">
      <div className="flex flex-col pt-8 tracking-widest">
        <h4
          id="projetos"
          className={`${blanka.className} z-10 tracking-widest mx-auto inline-block text-3xl text-c-gray100`}
        >
          MINHAS SKILLS
        </h4>
        <Carrosel velocity={-2} />
        <Frame />
      </div>
      <AboutMe />
    </div>
  )
}
