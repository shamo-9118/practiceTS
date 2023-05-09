import { NextPage } from 'next'
import { BtnComponents } from '../components/btnComponents'
import { ImgAnimation } from '../components/ImgAnimation/ImgAnimation'
import Async from '../components/async/Async'
import { Rotate } from '../components/routate'

type HeadChildren = {
  [key: string]: {}
}

const Home: NextPage = () => {
  let obj1: object = []
  let obj2: { a: { b: string } } = { a: { b: 'aaa' } }

  return (
    <div>
      <Async></Async>
      <Rotate></Rotate>
      <BtnComponents />
      <ImgAnimation></ImgAnimation>
    </div>
  )
}

export default Home
