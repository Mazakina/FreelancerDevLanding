import Label from "./Label";
import Boya from '@images/InstcBoya.png'
import ProjectTwo from '@images/projeto2.png'
import ProjectThree from '@images/project3.png'
import ProjectOne from '@images/htmlImg1.png'

export default function ProjectDisplay(){
  const someArray = [ProjectOne,ProjectTwo,ProjectThree,ProjectOne]
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