import { NextApiRequest, NextApiResponse } from 'next'

export default function contactGmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({ email: 'marumoto' })
}
