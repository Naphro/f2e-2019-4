import React from 'react'
import { Action } from './Action'
import './Content.css'
import { Purchase } from './Purchase'
import { CreditCard } from './CreditCard'

function Content () {
  return (
    <div className="content">
      {/*<Purchase></Purchase>*/}
      <CreditCard></CreditCard>
      <Action></Action>
    </div>
  )
}

export { Content }
