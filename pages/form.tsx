const form = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-[100vh]'>
      <form
        action='post'
        className='flex flex-col gap-4 bg-white rounded-xl p-7'
      >
        <div className='flex flex-col gap-3'>
          <h1 className='text-center text-2xl font-bold'>ログインフォーム</h1>
          <hr />
        </div>
        <div className='flex flex-col gap-3 '>
          <div>
            <label>名前</label>
            <input type='text' name='user' placeholder='山田太郎' />
          </div>
          <div>
            <label>メールアドレス</label>
            <input
              type='text'
              name='mailadress'
              placeholder='example@example.com'
            />
          </div>
          <div>
            <label>パスワード</label>
            <input type='text' name='password' placeholder='lkjflash' />
          </div>
        </div>
        <button className=''>確認画面</button>
      </form>
    </div>
  )
}

export default form
