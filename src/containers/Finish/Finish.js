import React from 'react'
import './Finish.css'
import finish from '../../assets/svg/photo_order done.svg'

function Finish({history}) {

    const handleClick = () => {
        history.push('/');
    }

    return (
        <div className="finish">
            <img src={finish} alt="finish"/>
            <div className="finish__message">訂單已完成！</div>
            <button className="finish__btn" onClick={handleClick}>結束</button>
        </div>
    )
}

export {Finish}