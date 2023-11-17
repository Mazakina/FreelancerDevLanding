import Image from "next/image"

export default async function List(){
  const response = await fetch('https://mazakina.vercel.app/list')
  const {files} = await response.json()

  return(
    <div className="flex flex-nowrap [height:60px] [width:640px]">
      {files.map((icon:any)  =>{
        return(
          <Image className=" hover:scale-110 ml-5" rel='icon'  key={icon} width={60} height={60} src={'/slideIcons/'+icon} alt={icon}/>
        )
      })}
    </div>
  )
}