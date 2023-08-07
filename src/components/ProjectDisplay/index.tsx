import Label from "./Label";
import Boya from '@images/InstcBoya.png'
export default function ProjectDisplay(){
  const someArray = [Boya,Boya,Boya,Boya]
  return(
    <div className="flex w-auto">
      {
        someArray.map((value,index)=>{
          let ml;
          index===0?
          ml="" : ml= "ml-10"
          return(
            <Label className={ml} key={index} img={value} />
          )
        })
      }    
    </div>
  )
}