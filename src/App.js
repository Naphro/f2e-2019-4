import React from 'react'
import './App.css'
import {Header} from './containers/Header'
import {renderRoutes} from "react-router-config";

function App(props) {
    console.log(props)
    return (
        <div className="App">
            <Header {...props}></Header>
            <div className="content">
                {renderRoutes(props.route.routes)}
            </div>
        </div>
    )
}

export default App
