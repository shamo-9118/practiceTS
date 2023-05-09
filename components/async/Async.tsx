import { resolve } from 'path'

const Async = () => {
  const getAsyncFunction = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello async function!!')
      }, 1600)
    })
  }
  const callAsyncFunction = () => {
    getAsyncFunction()
      .then((value) => {
        alert(value)
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <button
      className='w-[300px] h-[50px] bg-gray-300 border-black shadow-[2px_2px_0_0_rgba(0,0,0,6)] border-[1px] border-[rgba(0,0,0,6)] rounded-lg font-bold text-lg hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px] hover:font-normal duration-300'
      onClick={callAsyncFunction}
    >
      please push it!
    </button>
  )
}
export default Async
