import newSvg from '@images/svg2.svg'

export default function SvgOverlay(){
  return(
    
    <div className=''>
      <svg>
        <path>

        </path>
      </svg>
      <svg style={{position:'absolute',margin:'750px 0 0 0',height:'875px', width:'100%'}} id="line-box" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d={`M 2 0 L 2 50 L 4 54 L 96 54 L 98 58 L 98 85`}
              fill="none"
              stroke="#00E25B"
              stroke-width="2"
              vector-effect="non-scaling-stroke"></path>
      </svg>
    </div>

  )
}