import {HTMLAttributes} from 'react'

interface DivisionProps extends HTMLAttributes<HTMLDivElement> {
  width?:string;
  height?:string;
  color?:string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

export default function Division({width='98%',height="2px",color="#00E25B",marginLeft='initial',marginTop='2.5rem',marginRight="initial",marginBottom='initial'}:DivisionProps){
  return(
    <div
      style={{ boxShadow: `1px 0px 5px 2px ${color}55 `,height:height,width:width,backgroundColor:color,borderRadius:"3px",marginTop:marginTop,marginLeft:marginLeft,marginRight:marginRight,marginBottom:marginBottom,}}
    />
  )
}