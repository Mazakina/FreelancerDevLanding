import * as fs from 'fs';
import { NextResponse } from 'next/server';
export async function GET(req:Request){
  const directoryPath = './public/slideIcons';
  const files = fs.readdirSync(directoryPath);
  return NextResponse.json({
    files
  })
}