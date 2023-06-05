import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default function contactGmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
  })
  const toHostMailData = {
    from: req.body.email,
    to: 'won9118391183@gmail.com',
    subject: `${req.body.name}【お問い合わせがありました】`,
    html: `
    ${req.body.name}
    ${req.body.email}
    ${req.body.message}
    `,
  }
  transport.sendMail(toHostMailData, (error, info) => {
    if (error) console.log(error)
    else console.log(info)
  })
  return res.send('成功しました')
}
