import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub, FaWhatsapp  } from "react-icons/fa";

interface Props{
  icon: 'linkedin'| 'github' | 'phone',
  href: string
}

export default function SocialsLink({href , icon}:Props){
  return(
    <Link className="w-[120px] flex  justify-around mb-16" href={href}>
      {
        icon==='linkedin' && <AiOutlineLinkedin   className="
        text-white
        w-10 h-10 
        " />
      }
      {
        icon==='github' && <FaGithub   className="
        text-white
        w-10 h-10 
        " />
      }
      {
        icon==='phone' && <FaWhatsapp   className="
        text-white
        w-10 h-10 
        " />
      }
    </Link>
  )

}