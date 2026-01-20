import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { PiFigmaLogoBold } from "react-icons/pi";

interface Props {
  src: string;
  description: string;
  github: string;
  figma: string;
  site: string;
}
export default function Project({
  src,
  description,
  github,
  figma,
  site,
}: Props) {
  // This component is designed to display a project card with an image, description, and links to GitHub and Figma.
  return (
    <motion.div className="project mx-auto  mt-10 relative ss:w-[365px] w-[430px] h-[510px] ">
      <Image
        className="z-20 w-[364px] h-[222px] rounded-xl object-left-top absolute clip-path-l-shape hover:clip-path-square-shape ss:hover:clip-path-l-shape object-cover transition-[clip-path] duration-500 "
        height={222}
        width={364}
        src={src}
        alt={"Website preview"}
        priority
      />
      <div
        className="
          z-10 
          flex flex-col 
          absolute border-2 border-c-green500 shadow-2xl shadow-c-transparent-green 
          h-[280px] w-fit p-4
          ss:h-fit ss:w-[240px]
          mt-[120px] 
          rounded-xl   
          ml-[125px]"
      >
        <p className="text-white text-sm">{description}</p>
        <div className="flex h-10 mt-auto pt-4 mb-2  justify-around items-center ">
          <Link
            href={github}
            target="_blank"
            className="
                flex 
                mr-4
                h-fit
                justify-center  
                border-4 
                border-white 
                transition-all 
                duration-300  
                rounded-full 
                hover:[filter:drop-shadow(0px_0px_15px_#2ff8ff)]
                hover:border-c-green500 "
          >
            <FaGithub
              className={"w-9 border-transparent text-white border h-9"}
            />
          </Link>
          <Link
            href={figma}
            target="_blank"
            className="
                flex 
                justify-center  
                items-center  
                h-fit
                border-4 
                border-white 
                transition-all 
                duration-300  
                hover:[filter:drop-shadow(0px_0px_15px_#2ff8ff)]
                rounded-full hover:border-c-green500 "
          >
            <PiFigmaLogoBold
              className={
                " bg-white border-black border-2 rounded-full text-black w-9 h-9 p-1"
              }
            />
          </Link>
          <Link
            href={site}
            target="_blank"
            className={` 
                flex 
                justify-center  
                whitespace-nowrap
                w-24  
                transition-all 
                
                text-white
                font-bold
                text-lg
                duration-300  p-2 rounded-sm 
                hover:text-c-green500

                `}
          >
            Visitar<p className="ss:hidden"> &gt;</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
