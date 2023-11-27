import Division from '../Division'
import Link from 'next/link'
import { orbitron } from '@/app/ui/fonts'

interface HeaderSiteProps {
  className?: string
}
export default function Header({ className }: HeaderSiteProps) {
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
