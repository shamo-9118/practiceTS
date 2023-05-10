import { resolve } from 'path'

const Async = () => {
  function fetchURL(URL: string) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest()
      req.open('GET', URL, true)
      req.onload = () => {
        if (200 <= req.status && req.status < 300) {
          resolve(req.responseText)
        } else {
          reject(new Error(req.statusText))
        }
      }
      req.onerror = () => {
        reject(new Error(req.statusText))
      }
      req.send()
    })
  }

  const URL = 'https://jsonplaceholder.typicode.com/todo/1'

  const callAsyncFunction = () => {
    fetchURL(URL)
      .then(function onFulfilled(value) {
        console.log(value)
      })
      .catch(function onRejected(error) {
        console.error(error)
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
