import React from 'react'
import './Action.css'

function Action({backText = '返回', nextText = '繼續', onBack, onNext}) {
    return (
        <div className="actions">
            <div className="action">
                <div className="action__name" onClick={onBack}>{backText}</div>
                <div className="action__bar"></div>
            </div>
            <div className="action active">
                <div className="action__name" onClick={onNext}>{nextText}</div>
                <div className="action__bar"></div>
            </div>
        </div>
    )
}

export {Action}
