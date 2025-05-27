import AboutMe from '../AboutMe'
import { blanka } from '@/app/ui/fonts'
import { Frame } from './Frame'
import StackSection from '../StackSection'

export default function SkillsSec() {
  return (
    <div className="z-20 sticky bg-[#0c0c0cbb]  h-screen-2 up-to-md:h-fit pb-[300px] flex-1 ">
      <div className="flex flex-col pt-8 tracking-widest">
        <h4
          id="projetos"
          className={`${blanka.className} z-10 tracking-widest mx-auto inline-block text-3xl text-c-gray100`}
        >
          MINHAS STACKS
        </h4>
        <StackSection />
        <Frame />
      </div>
      <AboutMe />
    </div>
  )
}
