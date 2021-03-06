import React, {Fragment} from 'react'
import master from '../../assets/svg/icon_mastercard.svg'
import visa from '../../assets/svg/icon_visa.svg'
import jcb from '../../assets/svg/icon_jcb.svg'
import './CreditCard.css'
import plan90d from '../../assets/svg/photo_90days_selected.svg'
import {Action} from "../Action";

function CreditCard ({history}) {
  const handleBack = () => {
    history.goBack();
  }

  const handleNext = () => {
    history.push('/finish')
  }

  return (
      <Fragment>
        <div className="credit">
          <div>
            <div className="title">
              <div className="title__rect"></div>
              <div className="title__name">信用卡資訊</div>
            </div>
            <div className="form">
              <div className="row">
                <div className="field">
                  <div className="field__name">
                    信用卡號:
                    <div className="credit__type">
                      <img src={master} alt="master"/>
                      <img src={visa} alt="visa"/>
                      <img src={jcb} alt="jcb"/>
                    </div>
                  </div>
                  <input type="text" className="field__input"/>
                </div>
              </div>
              <div className="row">
                <div className="expire">
                  <div className="field__name">
                    有效年/月:
                  </div>
                  <input type="text" className="field__input"/>
                </div>
                <div className="cvc">
                  <div className="field__name">
                    CVC:
                  </div>
                  <input type="text" className="field__input"/>
                </div>
              </div>
              <div className="row">
                <div className="owner">
                  <div className="field__name">
                    持卡人姓名:
                  </div>
                  <input type="text" className="field__input"/>
                </div>
              </div>
              <div className="row">
                <div className="pwd">
                  <div className="field__name">
                    輸入交易密碼:
                  </div>
                  <input type="text" className="field__input"/>
                </div>
                <button className="sms-pwd">取得簡訊傳送交易密碼</button>
                <div className="remark">
                  *請點選「取得簡訊傳送交易密碼」按鍵，您的手機將於1~2分鐘內收到 動態交易認證密碼。若無法完成交易或未收到認證碼，請致電客服中心 電話：0800-1234-5679
                </div>
              </div>
            </div>
          </div>
          <div className="credit__plan">
            <img src={plan90d} alt="plan"/>
            <div className="line"></div>
            <div className="credit__plan-name">Karaoke期間券</div>
            <div className="credit__attendtion">
              <ul>
                <li>·從購買日起可無限歡唱90日。</li>
                <li>·有效期總計不能超過365天。</li>
                <li>·此期間券僅適用本公司產品。</li>
                <li>·到期前追加購買，將自動延長期限。</li>
                <li>·您無法取消或退還購買的期間券。</li>
              </ul>
            </div>
          </div>
        </div>
        <Action onBack={handleBack} onNext={handleNext} nextText="付款"></Action>
      </Fragment>
  )
}

export { CreditCard }
