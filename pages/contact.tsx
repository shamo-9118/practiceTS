import { ChangeEvent, FormEvent, useState } from 'react'
import { formItemList } from '../constants/formItemList'

import type { FormError, FormValues } from '../types/formTypes'

const Form = () => {
  const initialValue = { username: '', mailAddress: '', password: '' }
  const [formValue, setFormValue] = useState(initialValue)
  const [formErrors, setFormErrors] = useState<FormError>({})

  const hundleInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }

  const hundleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormErrors(validate(formValue))
    await fetch('api/contactGmail', {
      method: 'POST',
      headers: {
        Accsept: 'application/json, text/plain',
        'content-type': 'application/json',
      },
      body: JSON.stringify(formValue),
    }).then((res) => {
      if (res.status === 200) console.log('submit success')
    })
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
      errors.password = 'お問合せ内容を記入してください'
    }
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
          <h1 className='text-center text-2xl font-bold'>
            お問い合わせフォーム
          </h1>
          <hr />
        </div>
        <div className='flex flex-col gap-2'>
          {formItemList.map((item) => {
            return (
              <div key={item.name} className='flex flex-col gap-1'>
                {item.name === 'password' ? (
                  <div className='flex flex-col gap-1'>
                    <label>{item.label}</label>
                    <textarea
                      className='p-3 border-[1px] border-zinc-200 rounded-md'
                      name={item.name}
                      onChange={(e) => hundleInput(e)}
                    />
                  </div>
                ) : (
                  <div className='flex flex-col gap-1'>
                    <label>{item.label}</label>
                    <input
                      className='p-3 border-[1px] border-zinc-200 rounded-md'
                      type={item.type}
                      name={item.name}
                      placeholder={item.placeholder}
                      onChange={(e) => hundleInput(e)}
                    />
                  </div>
                )}

                <div className='h-5'>
                  {formErrors[item.name] ? (
                    <p className='text-sm text-red-500'>
                      {formErrors[item.name]}
                    </p>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
        <button className='bg-blue-300 rounded-full w-1/2 py-3 m-[16px_auto_0]'>
          送信
        </button>
      </form>
    </div>
  )
}

export default Form
