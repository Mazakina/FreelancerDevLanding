import * as fs from 'fs'
import { NextResponse } from 'next/server'

export async function GET() {
  const directoryPath = './public/slideIcons'
  const files = fs.readdirSync(directoryPath)
  return NextResponse.json({
    files,
  })
}
