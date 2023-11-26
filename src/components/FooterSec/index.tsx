import { blanka, orbitron } from '@/app/ui/fonts'
import Contact from './Contact'
import { PhoneContact } from './PhoneContact'

export default function FooterSec() {
  return (
    <footer id="footer">
      <div
        className={` z-30 sticky text-white flex max-w-4xl px-2 mx-auto  justify-center items-center`}
      >
        <h2 className={` text-3xl -mt-2 ml-4 ${blanka.className}`}>
          MAZA<span className="text-c-orange500">K</span>INA
        </h2>
        <div className="border mx-6 border-white flex-1 " />
        <p className={`text-sm -mt-1 text-c-green500 ${blanka.className}`}>
          FRONT-END DEVELOPER
        </p>
        <div className="border ml-6 mr-4 border-white flex-1 " />
      </div>
      <div
        className={`z-30  ${orbitron.className}   sticky text-white  flex max-w-4xl mb-20 mt-20 mx-auto justify-around`}
      >
        <ul>
          <h5 className="text-c-green500 text-lg w-44">Menu</h5>
          <Contact href="#home">Home</Contact>
          <Contact href="#projects">Portfolio</Contact>
          <Contact href="#about-me">Sobre Mim</Contact>
          <Contact href="#contact">FaleComigo</Contact>
        </ul>
        <ul className="w-44">
          <h5 className="text-c-green500 whitespace-nowrap text-lg">
            Redes Sociais
          </h5>
          <Contact target="_blank" href="https://www.instagram.com/mazakina_/">
            Instagram
          </Contact>
          <Contact
            target="_blank"
            href="https://www.linkedin.com/in/paulo-mazakina-1236811b4/"
          >
            LinkedIn
          </Contact>
          <Contact target="_blank" href="https://github.com/Mazakina">
            GitHub
          </Contact>
          <PhoneContact />
        </ul>
      </div>
    </footer>
  )
}
