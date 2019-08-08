import React from 'react'
import master from '../../../assets/svg/icon_mastercard.svg'
import visa from '../../../assets/svg/icon_visa.svg'
import jcb from '../../../assets/svg/icon_jcb.svg'

function CreditCard () {
  return (
    <div>
      <div>
        <div className="title">
          <div className="title__rect"></div>
          <div className="title__name">信用卡資訊</div>
        </div>
        <div className="row">
          <div className="field">
            <div className="field__name">
              信用卡號:
            </div>
            <div className="credit__type">
              <img src={master} alt="master"/>
              <img src={visa} alt="visa"/>
              <img src={jcb} alt="jcb"/>
            </div>
            <input type="text" className="field__input"/>
          </div>
        </div>
        <div className="row">
          <div className="field">
            <div className="field__name">
              有效年/月:
            </div>
            <input type="text" className="field__input"/>
          </div>
          <div className="field">
            <div className="field__name">
              CVC:
            </div>
            <input type="text" className="field__input"/>
          </div>
        </div>
        <div className="row">
          <div className="field">
            <div className="field__name">
              持卡人姓名:
            </div>
            <input type="text" className="field__input"/>
          </div>
        </div>
        <div className="row">
          <div className="field">
            <div className="field__name">
              輸入交易密碼:
            </div>
            <input type="text" className="field__input"/>
          </div>
          <button className="sms-pwd">取得簡訊傳送交易密碼</button>
        </div>
        <div className="row">
          <div className="remark">
            *請點選「取得簡訊傳送交易密碼」按鍵，您的手機將於1~2分鐘內收到 動態交易認證密碼。若無法完成交易或未收到認證碼，請致電客服中心 電話：0800-1234-5679
          </div>
        </div>
      </div>
      <div className="plan">
        <img src="" alt=""/>
        <div className="plan__name">Karaoke期間券</div>
        <div className="attendtion">
          ·從購買日起可無限歡唱90日。 ·有效期總計不能超過365天。 ·此期間券僅適用本公司產品。 ·到期前追加購買，將自動延長期限。 ·您無法取消或退還購買的期間券。
        </div>
      </div>
    </div>

  )
}

export { CreditCard }
