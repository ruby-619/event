import React ,{ useState }from 'react' // 1.node＿module全小寫 2.上一個版本都有寫這行,建議還是要寫

const App = () => {

  // 使用裝態 鉤子hooks（函式型元件擴充）
  // useState(0) = [0,f] // 解構賦值寫法
  const [total, setTotal] = useState(0) // 預設值為 0
  return (
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  )
}

export default App // 導出 模組系統屬於es6

