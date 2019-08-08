import React from 'react'
import './Plan.css'

function Plan({svg, selected}) {
    const classes = ['plan'];

    if (selected) {
        classes.push('selected')
    }

    return (
        <div className={classes.join(' ')}>
            <img src={svg} alt="plan"/>
        </div>
    )
}

export {Plan}
