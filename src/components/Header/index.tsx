import Division from '../Division'

export default function Header() {
  return (
    <div className="ss:hidden z-30 text-white absolute w-full">
      <Division
        width="98vw"
        height="2px"
        marginTop="4rem"
        marginBottom=".5rem"
        marginLeft="auto"
        marginRight="auto"
      />
    </div>
  )
}
