import React from 'react'
import './Action.css'

function Action () {
  return (
    <div className="actions">
        <div className="action">
            <div className="action__name">返回</div>
            <div className="action__bar"></div>
        </div>
        <div className="action active">
            <div className="action__name">繼續</div>
            <div className="action__bar"></div>
        </div>
    </div>
  )
}

export { Action }
