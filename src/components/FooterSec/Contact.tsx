import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export default function Contact({ href, children, target = '_self' }: Props) {
  return (
    <li className="mt-4">
      <Link
        className="hover:pl-3 transition-all duration-500"
        target={target}
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}
