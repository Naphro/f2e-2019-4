import React from 'react'
import './Payment.css'

function Payment({svg, children, selected}) {
    const classes = ['payment'];

    if (selected) {
        classes.push('selected')
    }

    return (
        <div className={classes.join(' ')}>
            <img src={svg} alt="plan"/>
            {children}
        </div>
    )
}

export {Payment}
