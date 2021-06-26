import React, { useState } from 'react'
import './App.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

// 產品訂購的項目
const products = [
  {
    name: '咖啡色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    name: '白色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    name: '黑色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    name: '金色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 1200,
  },
  {
    name: '金色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 1200,
  },
]

function App() {
  // 動態的對於產品數量的設定
  // counts 初始化 [1,1,1,1,1]
  const [counts, setCounts] = useState(
    Array(products.length).fill(1)
  )

  // 計算總價用
  const total = () => {
    let sum = 0
    for (let i = 0; i < products.length; i++) {
      sum += products[i].price * counts[i]
    }

    return sum.toLocaleString()
  }

  // 計算總共買了多少產品
  const productCount = () => {
    let totalCount = 0
    for (let i = 0; i < counts.length; i++) {
      totalCount += counts[i]
    }
    return totalCount
  }

  return (
    <div className="card">
      <div className="row">
        {/* 產品列表區堆 */}
        <OrderList
          products={products}
          counts={counts}
          setCounts={setCounts}
        />
        {/* 產品摘要區塊 */}
        <Summary
          total={total()}
          productCount={productCount()}
        />
      </div>
    </div>
  )
}

export default App