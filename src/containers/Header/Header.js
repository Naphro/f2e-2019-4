import React from 'react'
import './Header.css'
import {matchRoutes} from "react-router-config";
import {routes} from "../../router";
import processing from '../../assets/svg/icon_processing.svg'

function Header(props) {
    const matchRoute = matchRoutes(props.route.routes, props.location.pathname)[0];
console.log(matchRoute)
    let done = true;
    const steps = routes[0].routes.map((route, index) => {
        const isMatch = matchRoute.match.path === route.path;
        if (isMatch) {
            done = false;
        }

        if (isMatch || !done) {
            return (
                <div key={index} className={isMatch ? 'step active' : 'step'}>
                    <div className="step__index">{index + 1}</div>
                    <div className="step__name">{route.name}</div>
                </div>
            )
        } else {
            return (
                <div key={index} className="step active">
                    <img src={processing} alt="done"/>
                  <div className="step__name">{route.name}</div>
                </div>
            )
        }
    })

    return (
        <div className="header">
            <div className="steps">
                {steps}
            </div>
        </div>
    )
}

export {Header}
