import React, { Fragment } from 'react'
import './Purchase.css'
import { Plan } from './Plan'
import svg3hSelected from '../../../assets/svg/photo_3hr_selected.svg'
import svg24hUnselected from '../../../assets/svg/photo_24hr_unselected.svg'
import svg30dUnselected from '../../../assets/svg/photo_30days_unselected.svg'
import svg90dUnselected from '../../../assets/svg/photo_90days_unselected.svg'
import { Payment } from './Payment'
import creditCard from '../../../assets/svg/icon_credit card.svg'
import atm from '../../../assets/svg/icon_atm.svg'
import paypal from '../../../assets/svg/icon_paypal.svg'
import barcode from '../../../assets/svg/icon_barcode.svg'

function Purchase () {
  return (
    <Fragment>
      <div className="title">
        <div className="title__rect"></div>
        <div className="title__name">期間券方案</div>
      </div>
      <div className="plans">
        <Plan svg={svg3hSelected} selected={true}></Plan>
        <Plan svg={svg24hUnselected}></Plan>
        <Plan svg={svg30dUnselected}></Plan>
        <Plan svg={svg90dUnselected}></Plan>
      </div>
      <div className="title">
        <div className="title__rect"></div>
        <div className="title__name">付款方式</div>
      </div>
      <div className="payments">
        <Payment svg={creditCard}>
          信用卡
        </Payment>
        <Payment svg={atm}>
          銀行轉帳
        </Payment>
        <Payment svg={paypal}></Payment>
        <Payment svg={barcode}>
          超商繳費
        </Payment>
      </div>
    </Fragment>
  )
}

export { Purchase }
