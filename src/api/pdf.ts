import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'public', 'pdf', 'SeniorProject.pdf')
  
  try {
    const file = fs.readFileSync(filePath)
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'inline; filename=SeniorProject.pdf')
    res.send(file)
  } catch {
    res.status(404).json({ message: 'PDF not found' })
  }
}