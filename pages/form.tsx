import { ChangeEvent, FormEvent, useState } from 'react'

type FormValues = {
  username: string
  mailAddress: string
  password: string
}

type FormError = { [P in keyof FormValues]?: string }

const formItemList = [
  { label: '名前', placeholder: '山田太郎', type: 'text', name: 'username' },
  {
    label: 'メールアドレス',
    placeholder: 'example@example.com',
    type: 'text',
    name: 'mailAddress',
  },
  {
    label: 'パスワード',
    placeholder: 'lkjflash',
    type: 'text',
    name: 'password',
  },
]

const Form = () => {
  const initialValue = { username: '', mailAddress: '', password: '' }
  const [formValue, setFormValue] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})

  const hundleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }

  const hundleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormErrors(validate(formValue))
  }

  const validate = (values: FormValues): FormError => {
    const errors: FormError = {}
    const mailRegex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/

    if (!values.username) {
      errors.username = 'ユーザー名を登録してください'
    }

    if (!values.mailAddress) {
      errors.mailAddress = 'メールアドレスを登録してください'
    } else if (!mailRegex.test(values.mailAddress)) {
      errors.mailAddress = '正しいメールアドレスを入力してください'
    }

    if (!values.password) {
      errors.password = 'パスワードを登録してください'
    } else if (values.password.length < 4) {
      errors.password = 'パスワードは4文字以上15文字以内で入力してください'
    } else if (values.password.length > 15) {
      errors.password = 'パスワードは4文字以上15文字以内で入力してください'
    }
    console.log('🚀  validate  errors:', errors)
    return errors
  }

  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-[100vh] text-[#333]'>
      <form
        action='post'
        className='flex flex-col gap-4 bg-white rounded-xl p-7 w-1/2'
        onSubmit={(e) => hundleSubmit(e)}
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
                  className='p-3 border-[1px] border-zinc-200 rounded-md'
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  onChange={(e) => hundleInput(e)}
                />
                {/* TODO: エラーがあるときにテキストを出す */}
                <p>{formErrors[item.name]}</p>
              </div>
            )
          })}
        </div>
        <button className='bg-blue-300 rounded-full w-1/2 py-3 m-[16px_auto_0]'>
          確認画面
        </button>
      </form>
    </div>
  )
}

export default Form
