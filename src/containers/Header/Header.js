import React from 'react'
import './Header.css'

function Header () {
  return (
    <div className="header">
      <div className="steps">
        <div className="step--active">
          <div className="step__index">1</div>
          <div className="step__name">商品訂單</div>
        </div>
        <div className="step">
          <div className="step__index">2</div>
          <div className="step__name">付款資訊</div>
        </div>
        <div className="step">
          <div className="step__index">3</div>
          <div className="step__name">確認訂單</div>
        </div>
      </div>
    </div>
  )
}

export { Header }
