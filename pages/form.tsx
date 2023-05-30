import { ChangeEvent } from 'react'

const formItemList = [
  { label: '名前', placeholder: '山田太郎', type: 'text', name: 'user' },
  {
    label: 'メールアドレス',
    placeholder: 'example@example.com',
    type: 'text',
    name: 'mailadress',
  },
  {
    label: 'パスワード',
    placeholder: 'lkjflash',
    type: 'text',
    name: 'password',
  },
]

const form = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-[100vh]'>
      <form
        action='post'
        className='flex flex-col gap-4 bg-white rounded-xl p-7 w-1/2'
      >
        <div className='flex flex-col gap-3'>
          <h1 className='text-center text-2xl font-bold'>ログインフォーム</h1>
          <hr />
        </div>
        <div className='flex flex-col gap-3 '>
          {formItemList.map((item) => {
            return (
              <div key={item.name} className='flex flex-col gap-2'>
                <label>{item.label}</label>
                <input
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                />
              </div>
            )
          })}
        </div>
        <button className=''>確認画面</button>
      </form>
    </div>
  )
}

export default form
