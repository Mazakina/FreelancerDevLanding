import Image from "next/image"


export default function Label({img,className}:any){
  return(
    <div
      className={`relative ${className} pb-6`}
    >
      <div
        className="bg-c-gray200 "
        style={{
          height:'442px',
          width:' 96px',
          objectFit: 'cover',
          zIndex: 2,
          clipPath: 'path("M0 442V41.0122L0.0121926 41.0244L41.0244 0.012207L41.0122 0H96V401.012L55.0122 442H0Z")'
        }}
      />
      <Image
        className="absolute top-6 hover:top-5 cursor-pointer transition-all"
        style={{
          height:'442px',
          width:' 96px',
          objectFit: 'cover',
          zIndex: 2,
          clipPath: 'path("M0 442V41.0122L0.0121926 41.0244L41.0244 0.012207L41.0122 0H96V401.012L55.0122 442H0Z")'
        }}
        src={img}
        alt=""
      />

    </div>
  )
}
