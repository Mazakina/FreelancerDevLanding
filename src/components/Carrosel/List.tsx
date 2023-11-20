import Image from "next/image"

export default async function List(){
  const files = ['CSS.svg',  'GIT.svg',
  'HTML.svg', 'NEXT.svg',
  'NODE.svg', 'REACT.svg',
  'SASS.svg', 'SQL.svg']
  return(
    <div className="flex flex-nowrap [height:60px] [width:640px]">
      {files.map((icon:any)  =>{
        return(
          <Image className=" hover:scale-125 transition-all [transition-duration:500ms] ml-5" rel='icon'  key={icon} width={60} height={60} src={'/slideIcons/'+icon} alt={icon}/>
        )
      })}
    </div>
  )
}