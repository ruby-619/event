import { useEffect, useState } from 'react'

function MultipleInputs(props) {
  // 養成先設定好預設值的習慣
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    birth: '',
    price: 0,
  })
  // 欄位名稱先丟進來 之後的函式才是真正的處理函式
  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({
      ...state,
      [fieldName]: event.target.value,
    }))
  }

  // 觀察變化用
  //   useEffect(() => {
  //     console.log(inputs)
  //   }, [inputs])

  return (
    <>
      <input
        type="text"
        value={inputs.name}
        // 每一個輸入框一定要加名稱，和定義的欄位狀態值最好一樣
        name="name"
        onChange={onChangeForField('name')}
        placeholder="姓名"
      />
      <input
        type="text"
        value={inputs.email}
        name="email"
        onChange={onChangeForField('email')}
        placeholder="Email"
      />
      <input
        type="text"
        value={inputs.username}
        name="username"
        onChange={onChangeForField('username')}
        placeholder="帳號"
      />
      <input
        type="password"
        value={inputs.password}
        name="password"
        onChange={onChangeForField('password')}
        placeholder="密碼"
      />
      <input
        type="date"
        value={inputs.birth}
        name="birth"
        onChange={onChangeForField('birth')}
      />
      <input
        type="range"
        value={inputs.price}
        name="price"
        onChange={onChangeForField('price')}
      />
    </>
  )
}

export default MultipleInputs