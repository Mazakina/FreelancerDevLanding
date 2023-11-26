import { HTMLAttributes } from 'react'

interface DivisionProps extends HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
  color?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
}

export default function Division({
  width = '98%',
  height = '2px',
  color = '#00FFB2',
  marginLeft = 'initial',
  marginTop = '2.5rem',
  marginRight = 'initial',
  marginBottom = 'initial',
  ...rest
}: DivisionProps) {
  return (
    <div
      style={{
        boxShadow: `1px 0px 5px 2px ${color}55`,
        height,
        width,
        backgroundColor: color,
        borderRadius: '3px',
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
        ...rest,
      }}
    />
  )
}
