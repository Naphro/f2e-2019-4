import React from 'react'
import './Product.css'
import { Action } from './Action'

function Product () {
  return (
    <div className="product">
      <div className="plan"></div>
      <div className="payment"></div>
      <Action></Action>
    </div>
  )
}

export { Product }
